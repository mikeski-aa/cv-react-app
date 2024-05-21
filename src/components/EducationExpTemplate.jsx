function EducationExpTemplate({
    institutionName,
    dateFrom,
    dateUntil,
    fieldOfStudy,
    gradeAchieved,
    actionEdit,
    actionDelete,
  }) {
    return (
      <div className="jobCard">
        <h3 className="companyName">{institutionName}</h3>
        <h3 className="dateF">{dateFrom}</h3>
        <h3 className="dateT">{dateUntil}</h3>
        <h3 className="fieldOfStudy">{fieldOfStudy}</h3>
        <h3 className="gradeAchieved">{gradeAchieved}</h3>
        <div className="cardButtons">
          <button onClick={actionEdit} className="editEducationExpBtn">
            Edit
          </button>
          <button onClick={actionDelete} className="saveEducationExpBtn">
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export { EducationExpTemplate };