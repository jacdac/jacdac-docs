# Devices Snapshot Diff Notes

Date: 2026-07-13T19:46:53.640Z

## Generated Routes

- /devices/
- /devices/{company}/
- /devices/{company}/{identifier}/
- /devices/0x{productId}/ (redirect)
- /devices/codes/{vanity}/ (redirect)

## Notes

- Route generation is driven directly from jacdac-ts/jacdac-spec/dist/devices.json.
- Company and device slugs are derived from the device company name and device id.
- QR vanity redirects are driven from jacdac-ts/jacdac-spec/devices/microsoft-research/qr-url-device-map.csv.
