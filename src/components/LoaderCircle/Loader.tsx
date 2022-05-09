import React from "react";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles["loader-circle-body"]}>
      <div className={styles["loader-circle-wrapper"]}>
        <div className={styles["loader-circle"]}></div>
      </div>
    </div>
  );
};
