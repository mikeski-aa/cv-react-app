import "./Modals.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";

// edit modal for specific education card
function EditEducationExpModal({
  modalState,
  companyObjectName: institutionObjectName,
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
      <div className="editWorkExpModal">
        <FormInput
          className="institutionName"
          type="text"
          isDisabled={false}
          git
          inputDefault={institutionObjectName}
          action={stateUpdate}
          labelText="Company Name"
        />
        <FormInput
          className="dateFrom"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectFrom}
          action={stateUpdate}
          labelText="Starting date"
        />
        <FormInput
          className="dateUntil"
          type="date"
          isDisabled={false}
          inputDefault={dateObjectUntill}
          action={stateUpdate}
          labelText="Finish date"
        />
        <FormInput
          className="fieldOfStudy"
          type="text"
          isDisabled={false}
          inputDefault={eduObjectSubject}
          action={stateUpdate}
          labelText="Field of study"
        />
        <FormInput
          className="gradeAchieved"
          type="textarea"
          isDisabled={false}
          inputDefault={eduObjectGrade}
          action={stateUpdate}
          labelText="Grade achieved"
        />
        <AddNewButton className="closeModal" text="Close" action={closeEditModal} />
        <AddNewButton className="saveModal" text="Save" action={saveEditModal} />
      </div>
    </div>
  );
}

export { EditEducationExpModal };
