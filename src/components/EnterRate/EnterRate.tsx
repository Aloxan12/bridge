import React from "react";
import styles from "../Board/Board.module.css";

interface IEnterRate {
  rate: number;
  setRate: (rate: number) => void;
  setError: (rate: string) => void;
  error: string;
}

export const EnterRate = ({ rate, setRate, error, setError }: IEnterRate) => {
  return (
    <div className={styles.enterRate}>
      <span>Ввести ставку: </span>
      <input
        value={rate}
        onChange={(e) => {
          setError("");
          setRate(+e.currentTarget.value.replace(/[^0-9]/g, ""));
        }}
        type="text"
        required
      />
      <span className={styles.dollar}> $</span>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};
