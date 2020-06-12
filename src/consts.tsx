import { Phrase } from "types";

export enum RouteName {
  Root = "Dashboard",
  Phrases = "Phrase list",
  Phrase = "Phrase",
  NewPhrase = "New phrase",
}

const now = new Date().getTime();

export const phrases: Phrase[] = [
  {
    id: "1",
    phrase: "lion",
    translation: "lew",
    createdAt: now,
  },
  {
    id: "2",
    phrase: "cow",
    translation: "krowa",
    createdAt: now,
  },
  {
    id: "3",
    phrase: "dog",
    translation: "pies",
    createdAt: now,
  },
];
