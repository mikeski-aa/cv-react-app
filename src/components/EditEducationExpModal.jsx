import "./Modals.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";

// edit modal for specific education card
function EditEducationExpModal({
  modalState,
  institutionObjectName,
  dateObjectFrom,
  dateObjectUntill,
  eduObjectSubject,
  eduObjectGrade,
  closeEditModal,
  saveEditModal,
  stateUpdate
}) {
  if (!modalState) return null;

  return (
    <div className="modal">
      <div className="editEducationModal">
        <FormInput
          className="institutionName"
          type="text"
          isDisabled={false}
          git
          inputDefault={institutionObjectName}
          action={stateUpdate}
          labelText="Name of institution"
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
          className="fieldOfStudy"
          type="text"
          isDisabled={false}
          inputDefault={eduObjectSubject}
          action={stateUpdate}
          labelText="Field of study"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="gradeAchieved"
          type="textarea"
          isDisabled={false}
          inputDefault={eduObjectGrade}
          action={stateUpdate}
          labelText="Grade achieved"
          modalLabel={"modalLabel"}
        />
        <div className="formEditButtons">
          <AddNewButton className="closeModal" text="Close" action={closeEditModal} />
          <AddNewButton className="saveModal" text="Save" action={saveEditModal} />
        </div>
        
      </div>
    </div>
  );
}

export { EditEducationExpModal };
