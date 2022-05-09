import React from "react";
import styles from "./StartPlayGame.module.css";
import { useDispatch } from "react-redux";
import { startGameTC } from "../../store/reducers/mainReducer";

export const StartPlayGame = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(startGameTC());
  };

  return (
    <div className={styles.btnWrap}>
      <button className={styles.btn} onClick={startGameHandler}>
        Играть
      </button>
    </div>
  );
};
