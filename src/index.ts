const fromDate = new Date("2024-02-10");
const toDate = new Date("2024-03-11");
const data = [
  { date: "2024-02-13", timeSpent: "16h" },
  { date: "2024-02-17", timeSpent: "8h" },
  { date: "2024-03-10", timeSpent: "18h" },
  { date: "2024-03-05", timeSpent: "9h" },
  { date: "2024-03-03", timeSpent: "10h" },
  { date: "2024-03-02", timeSpent: "6h" },
  { date: "2024-02-28", timeSpent: "4h" },
  { date: "2024-02-27", timeSpent: "8h" },
  { date: "2024-02-17", timeSpent: "8h" },
  { date: "2024-02-13", timeSpent: "16h" },
];

function createDayElement(date, timeSpent) {
  const day = document.createElement("div");
  day.classList.add("day");
  const dayOfMonth = new Date(date).getDate();
  day.innerText = dayOfMonth;
  if (new Date(date) >= fromDate && new Date(date) <= toDate) {
    day.classList.add("highlighted");
    if (!timeSpent) day.classList.add("inactive");
  } else day.classList.add("inactive");
  const spentTime = document.createElement("div");
  spentTime.classList.add("spent-time");
  spentTime.innerText = timeSpent || "";
  day.appendChild(spentTime);
  return day;
}

function populateCalendar(data, containerId) {
  const container = document.getElementById(containerId);
  const startDate = new Date(fromDate);
  const endDate = new Date(toDate);
  while (startDate <= endDate) {
    const dateString = startDate.toISOString().slice(0, 10);
    const matchingData = data.find((item) => item.date === dateString);
    const dayElement = createDayElement(
      dateString,
      matchingData ? matchingData.timeSpent : "",
    );
    container.appendChild(dayElement);
    startDate.setDate(startDate.getDate() + 1);
  }
}

populateCalendar(data, "february-calendar");
populateCalendar(data, "march-calendar");
