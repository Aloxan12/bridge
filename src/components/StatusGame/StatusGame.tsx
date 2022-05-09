import React from "react";
import styles from "../Board/Board.module.css";
import { statusType } from "../../store/reducers/mainReducer";

interface IStatusGame {
  statusGame: statusType;
  nextGameHandler: () => void;
}

export const StatusGame = ({ statusGame, nextGameHandler }: IStatusGame) => {
  return (
    <div className={styles.cardBlock + " " + styles.statusBlock}>
      <div className={styles.statusText + " " + styles[statusGame!]}>
        <span>
          {statusGame === statusType.win
            ? "Вы выиграли!"
            : statusGame === statusType.lose
            ? "Вы проиграли"
            : "Ничья"}
        </span>
      </div>
      <button onClick={nextGameHandler} className={styles.cardBlockBtn}>
        сыграть еще
      </button>
    </div>
  );
};
