import "./Modals.css";
import { AddNewButton } from "./AddNewButton";
import { FormInput } from "./FormInput";
import { TextArea } from "./TextAreaComp";

// displays modal to add a new section to work experience on CV

function WorkExpModal({ isOpen, saveAction, closeAction, stateUpdate }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="workExpModal">
        <FormInput
          className="companyInput"
          type="text"
          placeholder="Enter company name"
          isDisabled={false}
          action={stateUpdate}
          labelText="Enter company name"
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
          className="jobTitle"
          type="text"
          placeholder="Enter job title"
          isDisabled={false}
          action={stateUpdate}
          labelText="Job title"
          modalLabel={"modalLabel"}
        />
        <TextArea
          className="jobOverview"
          type="textarea"
          placeholder="Describe your role"
          isDisabled={false}
          action={stateUpdate}
          labelText="Job overview"
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

export { WorkExpModal };
