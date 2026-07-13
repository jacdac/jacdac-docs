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

function readJson<T>(relativePath: string): T {
  const filePath = path.resolve(process.cwd(), relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

let servicesCache: ServiceSpec[] | undefined;
let serviceSourcesCache: ServiceSource[] | undefined;

export function getServices(): ServiceSpec[] {
  if (!servicesCache) {
    servicesCache = readJson<ServiceSpec[]>('../jacdac-ts/jacdac-spec/dist/services.json');
  }
  return servicesCache;
}

export function getServiceSources(): ServiceSource[] {
  if (!serviceSourcesCache) {
    serviceSourcesCache = readJson<ServiceSource[]>('../jacdac-ts/jacdac-spec/dist/services-sources.json');
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
