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
          <div className="datePlace">
            <h4 className="datePlaceholderText">from:</h4>
            <h4 className="dateFrom">{dateFrom}</h4>
            <h4 className="datePlaceholderText">until:</h4>
            <h4 className="dateUntil">{dateUntil}</h4>
          </div>
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