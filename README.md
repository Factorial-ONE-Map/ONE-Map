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
