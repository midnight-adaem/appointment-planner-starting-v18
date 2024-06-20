import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor ="inpName" >Name</label>
        <input id="inpName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor ="inpPhone" >Phone # (999-999-9999)</label>
        <input id="inpPhone" type="tel" pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label htmlFor ="inpEmail" >Email</label>
        <input id="inpEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input id="inpSubmit" type="submit"  />
      </form>
    </section>
  );
};

