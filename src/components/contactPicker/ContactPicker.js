import React from "react";

export const ContactPicker = ({ contacts, setContact, contact }) => {

  const changeHandler = (e) => {
    setContact(e.target.value);
  }


  return (
    <select name="contactPicker" value={contact} onChange={changeHandler} >
      <option value="">No Contact Selected</option>
      {(contacts) ? contacts.map((currContact) => (
        <option value={currContact.name} key={currContact.name}>{currContact.name}</option>
      )) : ""}
    </select>
  );
};
