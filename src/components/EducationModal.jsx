import "./Modals.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";

// displays modal to add a new section to work experience on CV

function EducationModal({ isOpen, saveAction, closeAction, stateUpdate }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="workExpModal">
        <FormInput
          className="institutionName"
          type="text"
          placeholder="Enter name of the institution"
          isDisabled={false}
          action={stateUpdate}
          labelText="Enter name of the institution"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="dateFrom"
          type="date"
          isDisabled={false}
          action={stateUpdate}
          labelText="Starting date"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="dateUntil"
          type="date"
          isDisabled={false}
          action={stateUpdate}
          labelText="Date of finish"
          maxInputDate="2030-01-01"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="fieldOfStudy"
          type="text"
          placeholder="Enter field of study"
          isDisabled={false}
          action={stateUpdate}
          labelText="Field of study"
          modalLabel={"modalLabel"}
        />
        <FormInput
          className="gradeAchieved"
          type="text"
          placeholder="Enter your grade achieved"
          isDisabled={false}
          action={stateUpdate}
          labelText="Grade achieved"
          modalLabel={"modalLabel"}
        />
        <div className="formButtons">
          <AddNewButton
            className="closeModal"
            text="Close"
            action={closeAction}
          />
          <AddNewButton className="saveModal" text="Save" action={saveAction} />
        </div>
      </div>
    </div>
  );
}

export { EducationModal };
