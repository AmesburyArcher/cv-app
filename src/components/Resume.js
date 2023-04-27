export default function Resume() {
  return (
    <div className="resume__container">
      <div className="resume">
        <PersonalInfo />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    </div>
  );
}

function PersonalInfo() {
  return (
    <section className="personal__info__container">
      <h2 className="personal__info__title">Personal Information</h2>
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
