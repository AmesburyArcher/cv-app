import { useState } from "react";

export default function Resume() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  return (
    <div className="resume__container">
      <div className="resume">
        <PersonalInfo first={firstName} handleFirstName={handleFirstName} />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    </div>
  );
}

function PersonalInfo({ handleFirstName, first }) {
  const [editFirst, setEditFirst] = useState(false);

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
          onSubmit={function (e) {
            e.preventDefault();
            setEditFirst(false);
          }}
        >
          <input
            type="text"
            placeholder="Meex"
            onChange={function (e) {
              handleFirstName(e);
            }}
          ></input>
          <button type="button">Enter</button>
        </form>
      )}
      <div>LAST NAME</div>
      <div></div>
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
