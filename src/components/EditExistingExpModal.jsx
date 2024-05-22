import "./Modals.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";
import { TextArea } from "./TextAreaComp";

// edit modal for specific job card
function EditExistingExpModal({
  modalState,
  companyObjectName,
  dateObjectFrom,
  dateObjectUntill,
  jobObjectTitle,
  jobObjectDesc,
  closeEditModal,
  saveEditModal,
  stateUpdate
}) {
  if (!modalState) return null;

  return (
    <div className="modal">
      <div className="editWorkExpModal">
        <FormInput
          className="companyInput"
          type="text"
          isDisabled={false}
          git
          inputDefault={companyObjectName}
          action={stateUpdate}
          labelText="Company Name"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="dateFrom"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectFrom}
          action={stateUpdate}
          labelText="Starting date"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="dateUntil"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectUntill}
          action={stateUpdate}
          labelText="Finish date"
          maxInputDate="2030-01-01"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="jobTitle"
          type="text"
          isDisabled={false}
          inputDefault={jobObjectTitle}
          action={stateUpdate}
          labelText="Job Title"
          modalLabel={"modalLabel"}
        />
        <TextArea
          className="jobOverview"
          type="textarea"
          isDisabled={false}
          inputDefault={jobObjectDesc}
          action={stateUpdate}
          labelText="Job responsibilities"
          modalLabel={"modalLabel"}
        />
        <div className="editModalButtons">
          <AddNewButton className="closeModal" text="Close" action={closeEditModal} />
          <AddNewButton className="saveModal" text="Save" action={saveEditModal} />
        </div>
        
      </div>
    </div>
  );
}

export { EditExistingExpModal };
