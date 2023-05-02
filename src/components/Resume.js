import { useState } from "react";

export default function Resume() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [addy, setAddy] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleAddy(e) {
    setAddy(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="resume__container">
      <div className="resume">
        <PersonalInfo
          first={firstName}
          handleFirstName={handleFirstName}
          last={lastName}
          handleLastName={handleLastName}
        />
        <ContactInfo
          addy={addy}
          handleAddy={handleAddy}
          phone={phone}
          handlePhone={handlePhone}
          email={email}
          handleEmail={handleEmail}
        />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    </div>
  );
}

function PersonalInfo({ handleFirstName, first, handleLastName, last }) {
  const [editFirst, setEditFirst] = useState(false);
  const [editLast, setEditLast] = useState(false);

  return (
    <section className="personal__info__container">
      <h2 className="personal__info__title">Personal Information</h2>
      {editFirst === false ? (
        <div
          onClick={function () {
            setEditFirst(true);
          }}
        >
          {first === "" ? "FIRST NAME" : first}
        </div>
      ) : (
        <form
          onBlur={function () {
            setEditFirst(false);
          }}
          onSubmit={function (e) {
            e.preventDefault();
            setEditFirst(false);
          }}
        >
          <input
            autoFocus
            type="text"
            placeholder="Meex"
            onChange={function (e) {
              handleFirstName(e);
            }}
          ></input>
          <button type="button">Enter</button>
        </form>
      )}
      {editLast === false ? (
        <div
          onClick={function () {
            setEditLast(true);
          }}
        >
          {last === "" ? "LAST NAME" : last}
        </div>
      ) : (
        <form
          onBlur={function () {
            setEditLast(false);
          }}
          onSubmit={function (e) {
            e.preventDefault();
            setEditLast(false);
          }}
        >
          <input
            autoFocus
            type="text"
            placeholder="Yeeeeehaw"
            onChange={function (e) {
              handleLastName(e);
            }}
          ></input>
          <button type="button">Enter</button>
        </form>
      )}
      <div></div>
    </section>
  );
}

function ContactInfo({
  handleAddy,
  addy,
  handlePhone,
  phone,
  handleEmail,
  email,
}) {
  const [editAddy, setEditAddy] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  return (
    <section className="contact__info__container">
      <h2 className="contact__info__title">Contact Information</h2>
      {editAddy === false ? (
        <div
          onClick={function () {
            setEditAddy(true);
          }}
        >
          {addy === "" ? "ADDRESS" : addy}
        </div>
      ) : (
        <form
          onBlur={function () {
            setEditAddy(false);
          }}
          onSubmit={function (e) {
            e.preventDefault();
            setEditAddy(false);
          }}
        >
          <input
            autoFocus
            type="text"
            placeholder="1234 Google St"
            onChange={function (e) {
              handleAddy(e);
            }}
          ></input>
          <button type="button">Enter</button>
        </form>
      )}

      {editPhone === false ? (
        <div
          onClick={function () {
            setEditPhone(true);
          }}
        >
          {phone === "" ? "PHONE NUMBER" : phone}
        </div>
      ) : (
        <form
          onBlur={function () {
            setEditPhone(false);
          }}
          onSubmit={function (e) {
            e.preventDefault();
            setEditPhone(false);
          }}
        >
          <input
            autoFocus
            type="text"
            placeholder="604-867-5309"
            onChange={function (e) {
              handlePhone(e);
            }}
          ></input>
          <button type="button">Enter</button>
        </form>
      )}

      {editEmail === false ? (
        <div
          onClick={function () {
            setEditEmail(true);
          }}
        >
          {email === "" ? "EMAIL" : email}
        </div>
      ) : (
        <form
          onBlur={function () {
            setEditEmail(false);
          }}
          onSubmit={function (e) {
            e.preventDefault();
            setEditEmail(false);
          }}
        >
          <input
            autoFocus
            type="text"
            placeholder="meeex@gmail.com"
            onChange={function (e) {
              handleEmail(e);
            }}
          ></input>
          <button type="button">Enter</button>
        </form>
      )}
    </section>
  );
}

function EducationInfo() {
  return (
    <section className="education__info__container">
      <h2 className="education__info__title">Educational Experience</h2>
      <div></div>
    </section>
  );
}

function ExperienceInfo() {
  return (
    <section className="experience__info__container">
      <h2 className="experience__info__title">Previous Experience</h2>
      <div></div>
    </section>
  );
}
