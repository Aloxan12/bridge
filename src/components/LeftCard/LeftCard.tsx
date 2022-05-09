import React from "react";
import { IRandomCardsResponse } from "../../core/deck-api";
import styles from "../Board/Board.module.css";
import cardPhoto from "../../utils/images/card.png";
import { CardPosition } from "../Board/Board";

interface ILeftCardProps {
  gameData: IRandomCardsResponse | null;
  playHandler: (card: CardPosition) => void;
}

export const LeftCard = ({ gameData, playHandler }: ILeftCardProps) => {
  return (
    <div className={styles.cardBlock}>
      <img
        src={gameData?.cards[0].image ? gameData?.cards[0].image : cardPhoto}
      />
      {!gameData && (
        <button
          className={styles.cardLeft}
          onClick={() => playHandler(CardPosition.left)}
        >
          левая карта
        </button>
      )}
    </div>
  );
};
