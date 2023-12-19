import { useState } from "react";
import InputForm from "./components/InputForms/Form";
import OutPut from "./components/OutputData/Output";

import "./App.css";

// const DUMMY = [
//   {
//     id: "002",
//     username: "umar",
//     age: "24",
//   },
//   {
//     id: "003",
//     username: "ali",
//     age: "26",
//   },
//   {
//     id: "004",
//     username: "john",
//     age: "20",
//   },
// ];

const App = () => {
  const [userInputdata, setUserInputData] = useState("");

  // get data from form component
  const addUserDataHandler = (userdata) => {
    setUserInputData((prevUserData) => [userdata, ...prevUserData ]);
    console.log(userdata);
  };

  return (
    <>
      <div className="main-div">
        <InputForm onAddData={addUserDataHandler} />
        <OutPut inputData={userInputdata}/>
      </div>
    </>
  );
};

export default App;
