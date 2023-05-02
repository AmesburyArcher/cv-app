import { useState } from "react";

export default function Resume() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [addy, setAddy] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [education, setEducation] = useState([]);

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
        <div className="upper__resume">
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
        </div>
        <EducationInfo education={education} setEducation={setEducation} />
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
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-addy"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M10 12h4v4h-4z"></path>
            </svg>
          }
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
          {" "}
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-phone"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              <path d="M15 6h6m-3 -3v6"></path>
            </svg>
          }
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
          {" "}
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          }
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

function EducationInfo({ education, setEducation }) {
  const [editing, setEditing] = useState(false);

  const [eductionObj, setEducationObj] = useState({});

  const handleChange = function (which, value) {
    switch (which) {
      case "name":
        setEducationObj({
          ...eductionObj,
          name: value,
        });
        break;

      case "city":
        setEducationObj({
          ...eductionObj,
          city: value,
        });
        break;

      case "date":
        setEducationObj({
          ...eductionObj,
          date: value,
        });
        break;

      case "degree":
        setEducationObj({
          ...eductionObj,
          degree: value,
        });
        break;

      case "info":
        setEducationObj({
          ...eductionObj,
          info: value,
        });
        break;
    }
  };

  const displayEducation = function () {
    const educationList = education.map((educ) => {
      return (
        <div className="education__entry">
          <div className="education__name">{educ.name}</div>
          <div className="education__city">{educ.city}</div>
          <div className="education__date">{educ.date}</div>
          <div className="education__degree">{educ.degree}</div>
          <div className="education__info">{educ.info}</div>
        </div>
      );
    });
    return <ul>{educationList}</ul>;
  };

  return (
    <section className="education__info__container">
      <h2 className="education__info__title">Educational Experience</h2>
      <div>
        {education.length > 0 ? displayEducation() : ""}
        {editing === false ? (
          <button
            onClick={function () {
              setEditing(true);
            }}
          >
            Add Education
          </button>
        ) : (
          <form
            className="education__info__form"
            onSubmit={function (e) {
              e.preventDefault();
              setEducation([...education, eductionObj]);
              setEditing(false);
              setEducationObj({});
            }}
          >
            <input
              type="text"
              placeholder="Simon Fraser University"
              onChange={function (e) {
                handleChange("name", e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="Burnaby, BC"
              onChange={function (e) {
                handleChange("city", e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="2016-2023"
              onChange={function (e) {
                handleChange("date", e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="Bachelor of Science Majoring in Computer Science"
              onChange={function (e) {
                handleChange("degree", e.target.value);
              }}
            ></input>
            <textarea
              placeholder="Interesting information about your experience, keep it short!"
              onChange={function (e) {
                handleChange("info", e.target.value);
              }}
            ></textarea>
            <button>Submit</button>
            <button
              type="button"
              onClick={function () {
                setEditing(false);
                setEducationObj({});
              }}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
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
