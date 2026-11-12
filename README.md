# ONE Map

Interactive landing page that shows how every Factorial module connects through ONE.

- **Map:** https://factorial-one-map.github.io/ONE-Map/
- **Connectors catalog:** https://factorial-one-map.github.io/ONE-Map/connectors/

## Link options

Add these to the end of the link. Combine them with `&`, for example `?lang=fr&for=partner`.

| Option | What it does |
|---|---|
| `?lang=en` | Language: `es` (default), `en`, `de`, `pt` (Portugal), `pt-br` (Brazil), `fr`, `it`, `pl` |
| `?for=partner` | Partner version: the connectors page tells the reader to talk to their Factorial partner. (The "Book a demo" block has been removed from the map in every version.) |
| `?theme=dark` | Night mode. Visitors can also switch it with the moon button, and the choice is remembered on both pages. |
| `?hide=turnos,marketplace` | Hides modules a market doesn't sell yet. Use the module ids below. |

English and Brazilian Portuguese hide Benefits and Salary advance by default; Polish also hides Marketplace, as German and Italian already did. French hides Benefits.

### Module ids for `?hide=`

`desempeno` Performance · `formacion` Training & LMS · `engagement` Engagement · `comunidades` Communities · `ats` ATS & hiring · `canal` Trust channel · `control` Time tracking · `turnos` Shifts · `ausencias` Time off · `plantilla` Headcount planning · `proyectos` Projects · `fpa` Financial Planning · `gastos` Expenses · `compras` Procurement · `revision` Salary review · `politicas` Policies · `portal` Employee portal · `comunicaciones` Communications · `onoff` On/Offboarding · `documentos` Document management · `firma` E-signature · `analiticas` Analytics · `tickets` Tickets · `mdm` Mobile device management · `seguridad` Security (EDR) · `cumplimiento` Compliance · `inventario` Inventory · `software` Software management · `marketplace` Marketplace · `beneficios` Benefits · `compensacion` Compensation · `integraciones` Integrations · `anticipo` Salary advance

## Files

- `index.html`: the ONE Map page (layout and logic)
- `content.js`: all the map texts in every language (ES, EN, DE, PT, PT-BR, FR, IT, PL), which modules each market hides, and the Spanish texts the pitch builder uses. Edit texts here.
- `connectors/index.html`: the ONE connectors catalog (English only for now)
- `plans/index.html`: compare bundles side by side (no prices), from the Factorial product menu. `?plans=ps,fin` opens a comparison directly.
- `site.css`, `site.js`: shared look, top menu, language and night mode for the new pages
- `media/`: short #changelog demo videos shown in the module panels (`<module id>.mp4` plus a `.jpg` cover). To add one, drop both files here and add a line to `VIDEOS` in `index.html`.
- `one-videos.js`: Bernat's 10 One use-case videos (Tella, "Day 01" to "Day 10"). Each video is shown in the panel of the modules it covers, in the visitor's language (played inside the panel in Spanish, as links in other languages) (Brazilian Portuguese uses the Portuguese videos; Polish and any missing language use English, marked on the button). The One panel lists all 10 plus the playlist.
- `skills/`: Claude skills the team can install.

## One use-case videos

In Spanish, "Míralo en acción" in each module panel plays the matching videos (Spanish versions only) instead of the product demo; modules without a use-case video keep their product demo. In every other language the panel keeps the product demo and adds a "Watch One do it" list with the videos in that language. Both end with a link to all 10 use cases, and the One panel lists all 10:

| Day | Use case | Shown in |
|---|---|---|
| 01 | Branded deck from your data | `analiticas` |
| 02 | Late arrivals to signed warnings | `control`, `firma` |
| 03 | Gender pay gap by role | `compensacion`, `analiticas` |
| 04 | Your payslip explained | `compensacion`, `documentos` (French uses English) |
| 05 | Find a free meeting room | One panel only (Spaces isn't on the map) |
| 06 | Onboarding course from a deck | `formacion`, `onoff` |
| 07 | Shift changes from a whiteboard photo | `turnos` |
| 08 | Purchase request from a supplier quote | `compras` |
| 09 | Promotion request and policy change | `desempeno`, `revision`, `politicas` |
| 10 | Next year's holidays for every workplace | `ausencias` |

To change which module shows a video, edit `mods` for that video in `one-videos.js`.

## Skills

`skills/bernat-one-videos/` is a Claude skill that picks the right video and playlist by product and language when building pitch decks or follow-ups.

To install it in Claude: download `skills/bernat-one-videos.skill` and upload it in Claude → Settings → Capabilities → Skills. In Claude Code, copy the `skills/bernat-one-videos` folder into `~/.claude/skills/`.
