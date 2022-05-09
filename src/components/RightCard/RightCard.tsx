import React from "react";
import { IRandomCardsResponse } from "../../core/deck-api";
import styles from "../Board/Board.module.css";
import cardPhoto from "../../utils/images/card.png";
import { CardPosition } from "../Board/Board";

interface IRightCardProps {
  gameData: IRandomCardsResponse | null;
  playHandler: (card: CardPosition) => void;
}

export const RightCard = ({ gameData, playHandler }: IRightCardProps) => {
  return (
    <div className={styles.cardBlock}>
      {!gameData && (
        <button
          className={styles.cardRight}
          onClick={() => playHandler(CardPosition.right)}
        >
          правая карта
        </button>
      )}
      <img
        src={gameData?.cards[0].image ? gameData?.cards[1].image : cardPhoto}
      />
    </div>
  );
};
