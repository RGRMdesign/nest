# Nest

Cross-platform playground (iOS, Android, web) gebaseerd op **Tamagui Takeout Free**, met fictieve schermen in **Bento-stijl**.

## Stack

- [One](https://onestack.dev) — universal React framework (web + native)
- [Tamagui](https://tamagui.dev) — UI & themes
- [Takeout Free](https://github.com/tamagui/takeout-free) — starter kit
- Bento-achtige secties — lokale, copy-paste-stijl UI-bouwstenen (geen betaalde Bento-licentie vereist)

## Playground

Start zonder backend op `/playground`:

| Scherm | Pad |
|--------|-----|
| Index | `/playground` |
| Overview | `/playground/overview` |
| Profile | `/playground/profile` |
| Feed | `/playground/feed` |
| Forms | `/playground/forms` |
| Preferences | `/playground/preferences` |
| Elements | `/playground/elements` |
| Paywall | `/playground/paywall` |
| Chat | `/playground/chat` |

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

## Projectstructuur

```
app/
  (app)/playground/   # publieke fictieve schermen
  (app)/home/         # Takeout app (auth vereist)
  (app)/auth/
src/
  features/playground/  # mock data + Bento-achtige primitives
  interface/            # gedeelde UI
  tamagui/              # theme config
```

## Notities

- **Bento**: officiële Tamagui Bento-componenten zijn copy-paste/CLI (`npx bento-get`) en grotendeels betaald. Nest bevat Bento-*stijl* secties gebouwd met Tamagui primitives; je kunt later echte Bento-snippets droppen in `src/features/playground/bento/`.
- **Takeout Pro** is optioneel voor de volledige starter + support: https://tamagui.dev/takeout
