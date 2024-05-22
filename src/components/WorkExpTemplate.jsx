function WorkExpTemplate({
  companyName,
  dateF,
  dateT,
  jobT,
  jobDesc,
  actionEdit,
  actionDelete,
}) {
  return (
    <div className="jobCard">
      <div className="topContainer">
        <h3 className="companyName">{companyName}</h3>
        <div className="datePlace">
          <h4 className="datePlaceholderText">from:</h4>
          <h4 className="dateF">{dateF}</h4>
          <h4 className="datePlaceholderText">until:</h4>
          <h4 className="dateT">{dateT}</h4>
        </div>    
      </div>

      <h4 className="jobTitle">{jobT}</h4>
      <p className="jobDesc">{jobDesc}</p>
      <div className="cardButtons">
        <button onClick={actionEdit} className="editWorkExpBtn">
          Edit
        </button>
        <button onClick={actionDelete} className="deleteWorkExpBtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export { WorkExpTemplate };
