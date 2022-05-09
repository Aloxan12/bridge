import React from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import styles from "./BankCount.module.css";

export const BankCount = () => {
  const count = useSelector<AppRootStateType, number>(
    (state) => state.game.user?.count
  );

  return (
    <div className={styles.bankWrap}>
      <span>На вашем счету: {count}$</span>
    </div>
  );
};
