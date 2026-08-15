# Sultan Dairy Farm Management System

Web app for the **Sultan Dairy 100-Day TMR Fattening Program** — a farm-management system covering Fattening, Qurbani, Dairy, and Breeding, plus Inventory, Staff, and Accounts. It is the browser version of the `Sultan Dairy Farm Management System.xlsx` workbook (27 sheets), with every module linked so a number entered in one place updates the whole system.

## Modules

- **Dashboard** — live summary, "today's routine" checklist, and alerts
- **Animal Register** — one master herd register (Purpose drives Fattening / Qurbani / Dairy / Breeding Stock)
- **Animal Profile** — consolidated per-animal record
- **Daily Feeding** — weight-linked DMI planning and ingredient usage
- **Weight & Growth** — weighing log + derived gain / ADG
- **Dairy & Milk** — milk production log (morning / evening)
- **Milk Customers** — daily orders, rates, routes
- **Breeding** — breeding events, expected calving (+283 days)
- **Calving / Weaning** — birth and weaning logs
- **Health** — vaccination, deworming, treatment
- **Fattening Customers / Fattening Sales** — buyers and sales with automatic P/L
- **Qurbani** — Qurbani sales with margin
- **Feed Purchases / Cost Tracker / Feed Stock** — purchases, usage cost, stock alerts
- **General Inventory** — medicines, equipment, tools
- **Staff / Salary Payments** — employees and payroll
- **Ledger** — automatic income / expense summary
- **Ration Formulator** — phase-based concentrate / roughage planning (45 / 60 / 75%)
- **Ingredient Database** — full 56-ingredient nutrition master (DM basis)
- **Guide & Help** — quick start, daily flow, and how the numbers are calculated

Every module supports **add / edit / delete** through modals, with client-side search on every table.

## Business rules (verified against the workbook)

- Fattening program: 100 days, 3 phases — Phase 1 (days 1–33) 45% concentrate, Phase 2 (34–66) 60%, Phase 3 (67–100) 75%. Phases are derived as % of duration (33% / 66%).
- Daily dry-matter intake = 3% of body weight.
- Expected calving = breeding date + 283 days.
- ADG = (current weight − start weight) × 1000 ÷ days on feed; "on track" = ADG ≥ 90% of target.
- Meat / dressing = 58% of live weight.
- Feed cost = quantity × latest purchase rate; sale P/L = price − acquisition cost − feed cost.
- Milk sales estimate = daily order × rate × 30 days.

## Data

Data is saved in the browser (`localStorage`, key `sultanDairy`) with a **Download backup (JSON)** button in the sidebar. A Cloudflare Workers + D1 backend (`worker.js`, `migrations/0001_init.sql`) is included for server-side storage.

## Running

Static web app — no build step. Open `public/index.html` in a browser, or serve with `npx wrangler dev` (or any static server).

## Source of truth

`Sultan Dairy Farm Management System.xlsx` is the domain source of truth for the app's business rules and the 56-ingredient nutrition table.
