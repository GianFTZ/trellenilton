import type { Card } from "../entities/card";

export interface ICardRepository {

    createCard: (card: Card) => Promise<Card>;
    loadAllCards: () => Promise<Card[]>;
    deleteCard: (id: string) => Promise<void>;
    findCardByTitle: (title: string) => Promise<Card|null>;
}