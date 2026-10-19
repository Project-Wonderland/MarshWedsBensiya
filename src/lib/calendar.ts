export const generateGoogleCalendarUrl = () => {
  const title = encodeURIComponent("Wedding: Gnana Bensiya & Arun Marshlin");
  const details = encodeURIComponent(
    "Together with their families, Gnana Bensiya & Arun Marshlin invite you to share in their joy as they celebrate their wedding!"
  );
  const location = encodeURIComponent(
    "Chudalappra, Puthuparamba Rd, Chudalappara, Keralam 676501"
  );
  // Full day event on January 16, 2027
  const dates = "20270116T043000Z/20270116T163000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
};

export const downloadIcsFile = () => {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gnana & Arun//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "SUMMARY:Wedding of Gnana Bensiya & Arun Marshlin",
    "DESCRIPTION:Together with their families\\, Gnana Bensiya & Arun Marshlin invite you to celebrate their holy matrimony.",
    "LOCATION:Chudalappra\\, Puthuparamba Rd\\, Chudalappara\\, Keralam 676501",
    "DTSTART:20270116T100000",
    "DTEND:20270116T180000",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.setAttribute("download", "Gnana-and-Arun-Wedding.ics");
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(url);
};
