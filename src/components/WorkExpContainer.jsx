import { AddNewButton } from "./AddNewButton";
import { WorkExpTemplate } from "./WorkExpTemplate";
import { WorkExpModal } from "./WorkExpModal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditExistingExpModal } from "./EditExistingExpModal";
import "./workContainer.css";

function WorkExpContainer() {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [tempJobInfo, setTempJobInfo] = useState({
    id: "",
    companyInput: "",
    dateFrom: "",
    dateUntil: "",
    jobTitle: "",
    jobOverview: "",
  });
  const [jobList, setJobList] = useState([]);

  // resets state - used when closing modal by saving or cancelling addition
  function resetTempState() {
    setTempJobInfo({
      id: "",
      companyInput: "",
      dateFrom: "",
      dateUntil: "",
      jobTitle: "",
      jobOverview: "",
    });
  }

  // upon opening the modal, new id number is generated for the job, modal made visible
  function handleOpenClick() {
    setTempJobInfo({ id: uuidv4() });
    setAddModalVisible(true);
  }

  // clicking cancel will reset the temporary state, closing modal
  function handleCloseClick() {
    setAddModalVisible(false);
    resetTempState();
  }

  // on clicking save, a new div should be created within workExp div called WorkExperienceDetails
  function handleSaveClick() {
    setAddModalVisible(false);
    setJobList([...jobList, tempJobInfo]);
  }

  // need to create if / case for to handle data coming from different input sources
  function handleStateChange(input, source) {
    console.log('detecting click' +' ' + input + ' source ' + source)
    if (source === "companyInput") {
      setTempJobInfo({ ...tempJobInfo, companyInput: input });
    } else if (source === "dateFrom") {
      setTempJobInfo({ ...tempJobInfo, dateFrom: input });
    } else if (source === "dateUntil") {
      setTempJobInfo({ ...tempJobInfo, dateUntil: input });
    } else if (source === "jobTitle") {
      setTempJobInfo({ ...tempJobInfo, jobTitle: input });
    } else if (source === "jobOverview") {
      setTempJobInfo({ ...tempJobInfo, jobOverview: input });
    }
  }

  // used for rendering the main work exp card
  // this can probably get moved out to its own file right?
  function WorkExperienceDetails() {
    return (
      <div className="workExperienceDetails">
        {jobList.map((item) => (
          <WorkExpTemplate
            key={item.id}
            companyName={item.companyInput}
            dateF={item.dateFrom}
            dateT={item.dateUntil}
            jobT={item.jobTitle}
            jobDesc={item.jobOverview}
            actionDelete={() => handleCardDelete(item.id)}
            actionEdit={() => handleCardEditOpen(item)}
          />
        ))}
      </div>
    );
  }

  // card delete click handler
  function handleCardDelete(id) {
    const tempState = { ...jobList };
    const filteredState = Object.values(tempState).filter(
      (job) => job.id != id
    );
    setJobList(filteredState);
  }

  // card edit click handler
  function handleCardEditOpen(details) {
    console.log(details);
    setEditModalVisible(true);
    setTempJobInfo(details);
    console.log(tempJobInfo);
  }

  // card edit close handler
  function handleCardEditClose() {
    setEditModalVisible(false);
    resetTempState();
    console.log(jobList);
  }

  // this function should save and update existing card
  // errors with rendering look into it
  function handleCardEditSave() {
    setEditModalVisible(false);
    const tempArray = [...jobList];
    console.log(tempArray);

    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].id === tempJobInfo.id) {
        tempArray[i] = {
          ...tempArray[i],
          companyInput: tempJobInfo.companyInput,
          dateFrom: tempJobInfo.dateFrom,
          dateUntil: tempJobInfo.dateUntil,
          jobTitle: tempJobInfo.jobTitle,
          jobOverview: tempJobInfo.jobOverview,
        }
      }
      
    }

    console.log(tempArray);
    setJobList(tempArray);
  }

  return (
    <div className="workExp">
      <AddNewButton
        className="addWorkExp"
        text="Add position"
        action={handleOpenClick}
      />
      <WorkExperienceDetails />
      <WorkExpModal
        isOpen={addModalVisible}
        closeAction={handleCloseClick}
        saveAction={handleSaveClick}
        stateUpdate={handleStateChange}
      />

      <EditExistingExpModal
        modalState={editModalVisible}
        companyObjectName={tempJobInfo.companyInput}
        dateObjectFrom={tempJobInfo.dateFrom}
        dateObjectUntill={tempJobInfo.dateUntil}
        jobObjectTitle={tempJobInfo.jobTitle}
        jobObjectDesc={tempJobInfo.jobOverview}
        closeEditModal={handleCardEditClose}
        saveEditModal={handleCardEditSave}
        stateUpdate={handleStateChange}
      />
    </div>
  );
}

export { WorkExpContainer };
