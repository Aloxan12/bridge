import { CardPosition } from "../components/Board/Board";
import { actions, statusType } from "../store/reducers/mainReducer";

type CardsValueType = {
  [key in string]: number;
};
export const cardsValue: CardsValueType = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
};

export const gameResult = (
  currentCard: CardPosition,
  leftCard: string,
  rightCard: string
): statusType => {
  if (cardsValue[leftCard] === cardsValue[rightCard]) {
    return statusType.draw;
  } else if (
    currentCard === CardPosition.left &&
    cardsValue[leftCard] > cardsValue[rightCard]
  ) {
    return statusType.win;
  } else if (
    currentCard === CardPosition.left &&
    cardsValue[leftCard] < cardsValue[rightCard]
  ) {
    return statusType.lose;
  } else if (
    currentCard === CardPosition.right &&
    cardsValue[leftCard] < cardsValue[rightCard]
  ) {
    return statusType.win;
  } else if (
    currentCard === CardPosition.right &&
    cardsValue[leftCard] > cardsValue[rightCard]
  ) {
    return statusType.lose;
  } else {
    return statusType.draw;
  }
};
