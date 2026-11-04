# Lead capture — how enquiries reach Jigisha

**Status: no server-side storage.** The `/api/lead` endpoint and the Google Sheet
webhook were both removed by decision. The site is fully static, and **WhatsApp and
the phone are the only channels an enquiry travels on.**

## How each form behaves

| Form | Where | What happens on submit |
|---|---|---|
| Contact form | `/contact` | Composes the details and opens WhatsApp; shows a confirmation |
| Assessment form | homepage | Opens WhatsApp with name, phone, goal, age, income |
| Booking request | `/book` | Opens WhatsApp with the preferred day, time and mode |
| Call back | service / area / guide pages | Opens WhatsApp with name and phone, then shows "one tap to finish" |
| Protection Check | `/protection-check` | The calculator runs in the browser; the visitor chooses Book or WhatsApp, and the figures are included in the message |

Nothing is written to a database, a sheet, or a function log. If a visitor enters
their details and then closes the WhatsApp tab without pressing send, **the enquiry
does not reach anyone**. That is the accepted trade-off of running without
server-side capture.

## Why this is a real trade-off

Before this change, every submission was stored first and then handed to WhatsApp,
which meant a visitor who abandoned WhatsApp still appeared on a call-back list.
Removing the endpoint removes that safety net. The site is simpler — one less
function, nothing to configure, no health check to monitor — but the only record of
an enquiry is the WhatsApp thread itself.

If stored enquiries are wanted again, the cheapest route is a Serverless Function
that emails each submission (Resend) or appends a row to a Sheet. That is a
deliberate re-introduction, not a configuration flip, and it should come with a
`lead_saved` analytics event so the funnel is measurable again.

## What to watch instead

- **WhatsApp is now the funnel.** Keep response time under an hour during 9–6.
- **`consultation_form_submit`** still fires on every form submit, plus
  `protection_check_handoff` and the booking events. Those are your only signal of
  intent before the visitor presses send.
- If form submits stay high while actual WhatsApp messages stay low, that gap is the
  cost of not storing leads — and the argument for bringing capture back.
