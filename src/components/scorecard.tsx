import React from "react";
import { IScorecardEntry } from "../state/ducks/scorecard/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Checkbox
} from "@material-ui/core";

const expeditions: {
  key: "yellow" | "white" | "blue" | "green" | "red" | "purple";
  color: string;
}[] = [
  { key: "yellow", color: "#e0bb14" },
  { key: "white", color: "#4c5055" },
  { key: "blue", color: "#023ece" },
  { key: "green", color: "#159b3b" },
  { key: "red", color: "#f8282a" },
  { key: "purple", color: "#452cbb" }
];

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const CardIcon: React.FC<{ color: string }> = ({ color }) => (
  <span
    style={{
      display: "inline-block",
      width: "16px",
      height: "24px",
      border: "2px solid black",
      borderRadius: "3px",
      backgroundColor: color
    }}
  ></span>
);

type Props = {
  entry: IScorecardEntry;
  onAddCard: (
    id: string,
    expedition: "yellow" | "white" | "blue" | "green" | "red" | "purple",
    card: number
  ) => void;
  onRemoveCard: (
    id: string,
    expedition: "yellow" | "white" | "blue" | "green" | "red" | "purple",
    card: number
  ) => void;
  onChangeWager: (
    id: string,
    expedition: "yellow" | "white" | "blue" | "green" | "red" | "purple",
    wager: number
  ) => void;
};

const Scorecard: React.FC<Props> = ({
  entry,
  onAddCard,
  onRemoveCard,
  onChangeWager
}) => {
  return (
    <Table style={{ tableLayout: "fixed" }}>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          {expeditions.map(expedition => (
            <TableCell key={expedition.key} align="center">
              <CardIcon color={expedition.color} />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">Wager</TableCell>
          {expeditions.map(expedition => {
            return (
              <TableCell key={expedition.key} align="center">
                <TextField
                  defaultValue={0}
                  fullWidth
                  inputProps={{
                    min: 0,
                    max: 4,
                    style: { textAlign: "center" }
                  }}
                  onChange={e => {
                    const parsed = parseInt(e.target.value, 10);
                    onChangeWager(
                      entry.id,
                      expedition.key,
                      !isNaN(parsed) ? parsed : 0
                    );
                  }}
                  type="number"
                />
              </TableCell>
            );
          })}
        </TableRow>
        {cards.map(card => (
          <TableRow key={card}>
            <TableCell component="th" scope="row" align="center">
              {card}
            </TableCell>
            {expeditions.map(expedition => (
              <TableCell key={expedition.key} align="center">
                <Checkbox
                  checked={entry[expedition.key].cards.includes(card)}
                  style={{ color: expedition.color }}
                  onChange={e => {
                    const fn = e.target.checked ? onAddCard : onRemoveCard;
                    fn(entry.id, expedition.key, card);
                  }}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Scorecard;
