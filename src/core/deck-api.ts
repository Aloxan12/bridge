import { fetcher } from "./baseApi";

interface ICard {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
}

interface INewDeckResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}

interface IReturnDeckResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
}

export interface IRandomCardsResponse {
  success: boolean;
  deck_id: string;
  cards: ICard[];
  remaining: number;
}

export const deckApi = {
  setNewDeck() {
    return fetcher
      .get<INewDeckResponse>(`new/shuffle/`)
      .then((res) => res.data);
  },
  setShuffleCards(deckId: string) {
    return fetcher.get(`${deckId}/shuffle/`).then((res) => res.data);
  },
  setRandomCards(deckId: string) {
    return fetcher
      .get<IRandomCardsResponse>(`${deckId}/draw/?count=2`)
      .then((res) => res.data);
  },
  returnCards(deckId: string, firstCard: string, secondCard: string) {
    return fetcher
      .get<IReturnDeckResponse>(
        `/${deckId}/return/?cards=${firstCard},${secondCard}`
      )
      .then((res) => res.data);
  },
};
