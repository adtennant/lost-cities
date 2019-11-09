import { createStandardAction } from "typesafe-actions";

export const addPlayer = createStandardAction("@@scorecard/ADD_PLAYER")<
  string
>();

export const addCard = createStandardAction("@@scorecard/ADD_CARD")<{
  id: string;
  expedition: "yellow" | "white" | "blue" | "green" | "red" | "purple";
  card: number;
}>();

export const removeCard = createStandardAction("@@scorecard/REMOVE_CARD")<{
  id: string;
  expedition: "yellow" | "white" | "blue" | "green" | "red" | "purple";
  card: number;
}>();

export const changeWager = createStandardAction("@@scorecard/CHANGE_WAGER")<{
  id: string;
  expedition: "yellow" | "white" | "blue" | "green" | "red" | "purple";
  wager: number;
}>();
