export interface IExpedition {
  cards: number[];
  wager: number;
}

export interface IScorecardEntry {
  id: string;
  name: string;
  yellow: IExpedition;
  white: IExpedition;
  blue: IExpedition;
  green: IExpedition;
  red: IExpedition;
  purple: IExpedition;
}
export interface IScorecardResult {
  id: string;
  name: string;
  yellow: number;
  white: number;
  blue: number;
  green: number;
  red: number;
  purple: number;
  total: number;
}
