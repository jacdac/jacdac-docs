# CLIENTS Snapshot Diff Notes (Gatsby vs Astro)

Date: 2026-07-12
Scope: /clients/ docs family

## Migrated Routes

- /clients/
- /clients/cli/
- /clients/embed/
- /clients/javascript/
- /clients/javascript/debugging/
- /clients/javascript/jdom/
- /clients/javascript/jdom/bus/
- /clients/javascript/jdom/device/
- /clients/javascript/jdom/event/
- /clients/javascript/jdom/field/
- /clients/javascript/jdom/node/
- /clients/javascript/jdom/register/
- /clients/javascript/jdom/service/
- /clients/javascript/p5js/
- /clients/javascript/p5js/events/
- /clients/javascript/p5js/sensors/
- /clients/javascript/react/
- /clients/javascript/react/hooks/
- /clients/javascript/react/setup/
- /clients/makecode/
- /clients/makecode/code/
- /clients/makecode/extensions/
- /clients/makecode/extensions/accelerometer/
- /clients/makecode/extensions/airpressure/
- /clients/makecode/extensions/brailledisplay/
- /clients/makecode/extensions/button/
- /clients/makecode/extensions/characterscreen/
- /clients/makecode/extensions/cloudadapter/
- /clients/makecode/extensions/color/
- /clients/makecode/extensions/dotmatrix/
- /clients/makecode/extensions/eco2/
- /clients/makecode/extensions/humidity/
- /clients/makecode/extensions/led/
- /clients/makecode/extensions/ledstrip/
- /clients/makecode/extensions/lightlevel/
- /clients/makecode/extensions/magneticfieldlevel/
- /clients/makecode/extensions/planarposition/
- /clients/makecode/extensions/potentiometer/
- /clients/makecode/extensions/relay/
- /clients/makecode/extensions/rotaryencoder/
- /clients/makecode/extensions/servo/
- /clients/makecode/extensions/temperature/
- /clients/makecode/extensions/tvoc/
- /clients/makecode/extensions/vibrationmotor/
- /clients/makecode/microbit-jukebox/
- /clients/makecode/projects/
- /clients/makecode/projects/button-smasher/
- /clients/makecode/projects/gamepad-mouse/
- /clients/makecode/projects/light-sound-bender/
- /clients/makecode/projects/magnetic-sound-bender/
- /clients/makecode/projects/rotary-mouse-wheel/
- /clients/makecode/projects/rotary-sound-bender/
- /clients/makecode/projects/slider-graph/
- /clients/makecode/projects/slider-sound-bender/
- /clients/makecode/projects/sound-led/
- /clients/makecode/servers/
- /clients/makecode/servers/codalmessagebus/
- /clients/makecode/tutorials/study/
- /clients/makecode/user-guide/
- /clients/microcode/
- /clients/more/

## Notable Differences

1. Gatsby-specific MDX component usages were replaced with static markdown content where required for Starlight compatibility.
2. Internal links under /clients/ were validated against built output.
3. Cross-family links are preserved and validated in later migration waves.

## Validation Artifacts

- Link check: docs/migration/baseline/routes/clients-link-check.md
- Link check JSON: docs/migration/baseline/routes/clients-link-check.json
- SEO sample: docs/migration/baseline/seo/clients-seo-check.md
