import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  /* Define a callback function that, given a name, phone number, 
   * and email, adds a new contact object with that data to the array of contacts 
   */
  const addContact = (newName, newPhone, newEmail) => {
    const newContact = { name: newName, phone: newPhone, email: newEmail };
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  }


  /* Define a callback function that, given a name, contact, date, and time, 
   * adds a new appointment object with that data to the array of appointments 
   */
  const addAppointment = (newName, newContact, newDate, newTime) => {
    const newAppointment = { name: newName, contact: newContact, date: newDate, time: newTime };
    setAppointments((prevAppointments) => [newAppointment, ...prevAppointments]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts}  addAppointment={addAppointment} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
