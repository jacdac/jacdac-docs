import fs from 'node:fs';
import path from 'node:path';

export interface ServiceSpec {
  name: string;
  shortId: string;
  classIdentifier: number;
  status?: string;
  notes?: Record<string, string>;
  packets?: Array<Record<string, unknown>>;
  [key: string]: unknown;
}

export interface ServiceSource {
  classIdentifier: number;
  shortId: string;
  source: string;
}

export interface DeviceSpec {
  id: string;
  name: string;
  company: string;
  description?: string;
  services?: number[];
  productIdentifiers?: number[];
  link?: string;
  storeLink?: string[];
  tags?: string[];
  [key: string]: unknown;
}

export interface DeviceRedirectRow {
  vanity: string;
  productId: string;
}

function readJson<T>(relativePath: string): T {
  const filePath = path.resolve(repoRoot, relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

const repoRoot = path.resolve(process.cwd(), '..');

let servicesCache: ServiceSpec[] | undefined;
let serviceSourcesCache: ServiceSource[] | undefined;
let devicesCache: DeviceSpec[] | undefined;
let deviceRedirectRowsCache: DeviceRedirectRow[] | undefined;

export function getServices(): ServiceSpec[] {
  if (!servicesCache) {
    servicesCache = readJson<ServiceSpec[]>('jacdac-ts/jacdac-spec/dist/services.json');
  }
  return servicesCache;
}

export function getServiceSources(): ServiceSource[] {
  if (!serviceSourcesCache) {
    serviceSourcesCache = readJson<ServiceSource[]>('jacdac-ts/jacdac-spec/dist/services-sources.json');
  }
  return serviceSourcesCache;
}

export function getServiceByShortId(shortId: string): ServiceSpec | undefined {
  return getServices().find((service) => service.shortId === shortId);
}

export function getServiceByClassHex(classHex: string): ServiceSpec | undefined {
  const normalized = classHex.toLowerCase();
  return getServices().find((service) => service.classIdentifier.toString(16) === normalized);
}

export function getServiceSourceByClassIdentifier(classIdentifier: number): string | undefined {
  return getServiceSources().find((source) => source.classIdentifier === classIdentifier)?.source;
}

export function getDevices(): DeviceSpec[] {
  if (!devicesCache) {
    devicesCache = readJson<DeviceSpec[]>('jacdac-ts/jacdac-spec/dist/devices.json');
  }
  return devicesCache;
}

export function companySlug(company: string): string {
  return company.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export function identifierToUrlPath(id: string): string {
  if (!id) return id;
  const escape = (segment: string) => segment.replace(/[.:]/g, '').toLowerCase();
  const parts = id.split(/-/g);
  if (parts.length === 1) return id.replace(/[.:]/g, '').toLowerCase();
  return `${parts.slice(0, -1).map(escape).join('-')}/${escape(parts[parts.length - 1])}`;
}

export function basePathPrefix(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

export function deviceSlug(deviceId: string, company: string): string {
  const slug = companySlug(company);
  return deviceId.startsWith(`${slug}-`) ? deviceId.slice(slug.length + 1) : deviceId;
}

export function devicePath(device: DeviceSpec): string {
  return `/devices/${companySlug(device.company)}/${deviceSlug(device.id, device.company)}/`;
}

export type DeviceImageVariant = 'catalog' | 'preview' | 'full' | 'lazy' | 'list' | 'avatar';

export function deviceImagePath(device: DeviceSpec, variant: DeviceImageVariant = 'avatar'): string {
  return `${basePathPrefix()}images/devices/${identifierToUrlPath(device.id)}.${variant}.jpg`;
}

export function getDeviceRedirectRows(): DeviceRedirectRow[] {
  if (!deviceRedirectRowsCache) {
    const filePath = path.resolve(repoRoot, 'jacdac-ts/jacdac-spec/devices/microsoft-research/qr-url-device-map.csv');
    const rows = fs.readFileSync(filePath, 'utf8').trim().split(/\r?\n/);
    deviceRedirectRowsCache = rows.slice(1).map((line) => {
      const [vanity = '', , , , , productId = ''] = line.split(',');
      return { vanity: vanity.trim(), productId: productId.trim() };
    }).filter((row) => !!row.vanity);
  }
  return deviceRedirectRowsCache;
}

export function getDeviceByProductId(productId: number): DeviceSpec | undefined {
  return getDevices().find((device) => (device.productIdentifiers || []).includes(productId));
}

export function toLiteServiceSpec(service: ServiceSpec): Record<string, unknown> {
  const clone = JSON.parse(JSON.stringify(service)) as Record<string, unknown>;
  delete clone.notes;
  delete clone.enums;
  delete clone.constants;
  delete clone.extends;
  delete clone.shortName;
  delete clone.name;
  delete clone.tags;

  const packets = clone.packets as Array<Record<string, unknown>> | undefined;
  if (packets) {
    for (const packet of packets) {
      delete packet.description;
      delete packet.derived;
      delete packet.identifierName;
      const fields = packet.fields as Array<Record<string, unknown>> | undefined;
      if (!fields || fields.length <= 1) {
        delete packet.fields;
      } else {
        packet.fields = fields.map((field) => field.name as string);
      }
    }
  }

  return clone;
}
