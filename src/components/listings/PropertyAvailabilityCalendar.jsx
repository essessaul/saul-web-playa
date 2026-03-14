import React, { useEffect, useState } from "react";
import { getAvailabilityCalendar } from "../../services/calendarService";

export default function PropertyAvailabilityCalendar({ title = "Availability Calendar" }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    getAvailabilityCalendar().then(setCalendar);
  }, []);

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h3 style={{ marginBottom: "1rem" }}>{title}</h3>
      <div className="calendar-grid">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
          <div key={d} className="calendar-header">{d}</div>
        ))}
        {calendar.map((item) => (
          <div key={item.day} className={`calendar-day ${item.status}`}>{item.day}</div>
        ))}
      </div>
    </div>
  );
}
