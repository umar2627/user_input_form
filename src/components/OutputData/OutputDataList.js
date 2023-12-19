import React from "react";

import styles from './Output.module.css';

const OutputDataList = (props) => {
  return (
    <>
      <div className={styles["output"]}>
        {props.userdata.map((userdata) => (
          <div key={userdata.id} className={styles["output"]}>
            <p>
              Username: <strong>{userdata.username}</strong>
            </p>
            <p>
              Age: <strong>{userdata.age}</strong>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OutputDataList;
