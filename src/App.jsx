import "./App.css";
import { InputAndButtons } from "./components/InputAndButtons";
import { ContactInfo } from "./components/ContactInfo";
import { WorkExpContainer } from "./components/WorkExpContainer";
import { EducationContainer } from "./components/EducationContainer";

function App() {
  return (
    <>
      <div className="header">
        <h1 className="cvHeading">Curriculum Vitae</h1>
        <InputAndButtons
          inputDivClass="fullNameDiv"
          inputClass="inputName"
          inputType="text"
          placeholderText="Enter your full name"
        />
      </div>

      <ContactInfo />
      <div className="main">
        <WorkExpContainer />
        <EducationContainer />
      </div>
    </>
  );
}

export default App;
