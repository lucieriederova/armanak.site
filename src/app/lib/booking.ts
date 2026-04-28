const bookingParams = new URLSearchParams({
  action: "TEMPLATE",
  text: "Konzultace s ARMANAK",
  details:
    "Vyberte prosim datum a cas, ktery vam vyhovuje. Po vytvoreni udalosti bude na schuzku pozvan email armanakcz.info@gmail.com.",
  location: "Online / Brno",
  add: "armanakcz.info@gmail.com",
  sf: "true",
  output: "xml",
});

export const GOOGLE_BOOKING_URL = `https://calendar.google.com/calendar/render?${bookingParams.toString()}`;
