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
      <div className="eduCard">
        <div className="topContainer">
          <h3 className="institutionName">{institutionName}</h3>
          <h4>from</h4>
          <h4 className="dateFrom">{dateFrom}</h4>
          <h4>until</h4>
          <h4 className="dateUntil">{dateUntil}</h4>
        </div>
        
        <h4 className="fieldOfStudy">{fieldOfStudy}</h4>
        <h4 className="gradeAchieved">{gradeAchieved}</h4>
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