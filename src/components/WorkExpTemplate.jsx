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
        <h4>from</h4>
        <h4 className="dateF">{dateF}</h4>
        <h4>until</h4>
        <h4 className="dateT">{dateT}</h4>
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
