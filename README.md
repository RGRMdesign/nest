# Nest

Cross-platform playground (iOS, Android, web) op **Tamagui Takeout Free**, met echte **[Tamagui Bento](https://tamagui.dev/bento)** OSS-composities.

## Stack

- [One](https://onestack.dev) — universal React framework (web + native)
- [Tamagui](https://tamagui.dev) — UI & themes
- [Takeout Free](https://github.com/tamagui/takeout-free) — starter kit
- [Tamagui Bento](https://tamagui.dev/bento) — copy-paste UI-composities (gratis OSS-secties via de officiële download API / `npx bento-get`)

## Playground

Start zonder backend op `/playground`. Schermen tonen geïnstalleerde Bento-composities:

| Scherm | Pad | Bento bron |
|--------|-----|------------|
| Index | `/playground` | catalogus |
| Forms | `/playground/forms` | inputs, switches, radio, checkboxes, textarea |
| Elements | `/playground/elements` | buttons, chips, avatars, table, popover |
| Shells | `/playground/shells` | tab bars |
| Animation | `/playground/animation` | loading, slide-in, tooltip avatars, slider |
| Sign in | `/playground/signin` | SignInScreen layout |
| Date picker | `/playground/datepicker` | DatePicker |

Broncode staat in `src/components/bento/` (zelfde structuur als Bento: `forms/`, `elements/`, `shells/`, `animation/`).

Auth-routes (`/auth`, `/home`) uit Takeout blijven beschikbaar wanneer de backend draait.

## Quick start

```bash
bun install
bun dev          # web op http://localhost:8081
```

Optioneel (backend + Zero sync):

```bash
bun backend      # Docker: postgres, zero
bun ios          # iOS simulator (macOS)
bun android      # Android emulator
```

## Meer Bento-composities toevoegen

Gratis componenten:

```bash
npx bento-get SwitchCustomIcons
# of: gebruik de code-download API zoals in deze repo
```

Pro-composities vereisen een [Bento-licentie](https://tamagui.dev/bento) en access token.

## Projectstructuur

```
app/(app)/playground/     # publieke demo-routes
src/components/bento/     # Tamagui Bento OSS-composities
src/features/playground/  # shell + catalogus
src/interface/            # Takeout UI primitives
```
