import React, { useState } from "react";
import styles from "./Board.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { Loader } from "../LoaderCircle/Loader";
import { EnterRate } from "../EnterRate/EnterRate";
import { GameTitle } from "../GameTitle/GameTitle";
import { LeftCard } from "../LeftCard/LeftCard";
import { RightCard } from "../RightCard/RightCard";
import { StatusGame } from "../StatusGame/StatusGame";
import {
  loadingType,
  nextGameTC,
  setPlayTC,
} from "../../store/reducers/gameReducer";

export enum CardPosition {
  left = 0,
  right = 1,
}

export const Board = () => {
  const [rate, setRate] = useState<number>(20);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const count = useSelector<AppRootStateType, number>(
    (state) => state.game.user?.count
  );
  const { loading, statusGame, gameData } = useSelector(
    (state: AppRootStateType) => state.game
  );

  const playHandler = (card: CardPosition) => {
    if (rate <= 0) {
      setError("Введите вашу ставку");
    } else if (count >= rate) {
      dispatch(setPlayTC(rate, card));
    } else {
      setError("Недостаточно средств");
    }
  };

  const nextGameHandler = () => {
    dispatch(nextGameTC());
  };

  return (
    <div className={styles.boardWrap}>
      {loading === loadingType.loading && <Loader />}
      <GameTitle />
      <div className={styles.cardsBlock}>
        <LeftCard gameData={gameData} playHandler={playHandler} />
        {gameData && (
          <StatusGame
            statusGame={statusGame!}
            nextGameHandler={nextGameHandler}
          />
        )}
        <RightCard gameData={gameData} playHandler={playHandler} />
      </div>
      <EnterRate
        rate={rate}
        setRate={setRate}
        setError={setError}
        error={error}
      />
    </div>
  );
};
