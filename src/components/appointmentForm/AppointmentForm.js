import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor ="inpTitle" >Name</label>
        <input id="inpTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor ="inpDate" >Date</label>
        <input id="inpDate" type="date" min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} />
        <label htmlFor ="inpTime" >Time</label>
        <input id="inpTime" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <ContactPicker contacts={contacts} setContact={setContact} contact={contact}/>
        <input id="inpSubmit" type="submit" />
      </form>
    </section>
  );
};
