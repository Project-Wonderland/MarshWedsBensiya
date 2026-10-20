export const generateGoogleCalendarUrl = () => {
  const title = encodeURIComponent("Wedding: Gnana Bensiya & Arun Marshlin");
  const details = encodeURIComponent(
    "Together with their families, Gnana Bensiya & Arun Marshlin invite you to share in their joy as they celebrate their wedding!"
  );
  const location = encodeURIComponent(
    "Illikkal Convention Center, Chudalappra, Puthuparamba Rd, Chudalappara, Kerala 676501"
  );
  // Full day event on January 16, 2027
  const dates = "20270116T043000Z/20270116T163000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
};
