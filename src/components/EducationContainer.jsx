import { AddNewButton } from "./AddNewButton";
import { EducationExpTemplate } from "./EducationExpTemplate"
import { EducationModal } from "./EducationModal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditExistingExpModal } from "./EditExistingExpModal";

// structure of this file is very similar to WorkExpContainer
// a template might have been better instead of two files.

function EducationContainer() {
  const [eduAddModalVisible, setEduAddModalVisible] = useState(false);
  const [editEduModalVisible, setEduEditModalVisible] = useState(false);
  const [tempEducationInfo, setTempEducationInfo] = useState({
    id: "",
    institutionName: "",
    dateFrom: "",
    dateUntil: "",
    fieldOfStudy: "",
    gradeAchieved: ""

  });
  const [educationList, setEducationList] = useState([]);

  // resets state - used when closing modal by saving or cancelling addition
  function resetTempState() {
    setTempEducationInfo({
      id: "",
      institutionName: "",
      dateFrom: "",
      fieldOfStudy: "",
      gradeAchieved: "",
    });
  }

  // upon opening the modal, new id number is generated for the job, modal made visible
  function handleOpenClick() {
    setTempEducationInfo({ id: uuidv4() });
    setEduAddModalVisible(true);
  }

  // clicking cancel will reset the temporary state, closing modal
  function handleCloseClick() {
    setEduAddModalVisible(false);
    resetTempState();
  }

  // on clicking save, a new div should be created within eduExp div called WorkExperienceDetails
  function handleSaveClick() {
    setEduAddModalVisible(false);
    setEducationList([...educationList, tempEducationInfo]);
  }

  // need to create if / case for to handle data coming from different input sources
  function handleStateChange(input, source) {
    if (source === "companyInput") {
      setTempEducationInfo({ ...tempEducationInfo, institutionName: input });
    } else if (source === "dateFrom") {
      setTempEducationInfo({ ...tempEducationInfo, dateFrom: input });
    } else if (source === "dateUntil") {
      setTempEducationInfo({ ...tempEducationInfo, dateUntil: input });
    } else if (source === "fieldOfStudy") {
      setTempEducationInfo({ ...tempEducationInfo, fieldOfStudy: input });
    } else if (source === "gradeAchieved") {
        setTempEducationInfo({ ...tempEducationInfo, gradeAchieved: input });
      }
  }

  // used for rendering the main work exp card
  // this can probably get moved out to its own file right?
  function EducationExpDetails() {
    return (
      <div className="workExperienceDetails">
        {educationList.map((item) => (
          <EducationExpTemplate
            key={item.id}
            institutionName={item.institutionName}
            dateFrom={item.dateFrom}
            dateUntil={item.dateUntil}
            fieldOfStudy={item.fieldOfStudy}
            gradeAchieved={item.gradeAchieved}
            actionDelete={() => handleCardDelete(item.id)}
            actionEdit={() => handleCardEditOpen(item)}
          />
        ))}
      </div>
    );
  }

  // card delete click handler
  function handleCardDelete(id) {
    const tempState = { ...educationList };
    const filteredState = Object.values(tempState).filter(
      (job) => job.id != id
    );
    setEducationList(filteredState);
  }

  // card edit click handler
  function handleCardEditOpen(details) {
    setEduEditModalVisible(true);
    setTempEducationInfo(details);
  }

  // card edit close handler
  function handleCardEditClose() {
    setEduEditModalVisible(false);
    resetTempState();
    console.log(educationList);
  }

  // this function should save and update existing card
  // errors with rendering look into it
  function handleCardEditSave() {
    setEduEditModalVisible(false);
    const tempArray = [...educationList];

    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].id === tempEducationInfo.id) {
        tempArray[i] = {
          ...tempArray[i],
          institutionName: tempEducationInfo.institutionName,
          dateFrom: tempEducationInfo.dateFrom,
          dateUntil: tempEducationInfo.dateUntil,
          fieldOfStudy: tempEducationInfo.fieldOfStudy,
          gradeAchieved: tempEducationInfo.gradeAchieved,
        };
      }
      break;
    }

    setEducationList(tempArray);
  }

  return (
    <div className="educationContainer">
      <AddNewButton
        className="addEducationExp"
        text="Add education info"
        action={handleOpenClick}
      />
      <EducationExpDetails />
      <EducationModal
        isOpen={eduAddModalVisible}
        closeAction={handleCloseClick}
        saveAction={handleSaveClick}
        stateUpdate={handleStateChange}
      />

      <EditExistingExpModal
        modalState={editEduModalVisible}
        institutionObjectName={tempEducationInfo.institutionName}
        dateObjectFrom={tempEducationInfo.dateFrom}
        dateObjectUntill={tempEducationInfo.dateUntil}
        eduObjectSubject={tempEducationInfo.gradeAchieved}
        eduObjectGrade={tempEducationInfo.gradeAchieved}
        closeEditModal={handleCardEditClose}
        saveEditModal={handleCardEditSave}
        stateUpdate={handleStateChange}
      />
    </div>
  );
}

export { EducationContainer };
