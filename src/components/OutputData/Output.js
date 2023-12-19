import React from "react";

import styles from './Output.module.css';
import OutputDataList from "./OutputDataList";

const OutPut = (props) => {
  if (props.inputData.length === 0) {
    return (
      <div className={styles["output"]}>
        <h4>No data found</h4>
      </div>
    );
  } else {
    return (
      <>
      <OutputDataList userdata={props.inputData} />
      </>
    );
  }

  // console.log(props.inputData);
  // return (
  //   <div className={styles["output"]}>
  //     <h4>No data found</h4>
  //   </div>
  // );
};

export default OutPut;
