import React from "react";
import { IScorecardResult } from "../state/ducks/scorecard/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
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

type Props = {
  results: IScorecardResult[];
};

const Scorecard: React.FC<Props> = ({ results }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="center" colSpan={expeditions.length}>
            Scores
          </TableCell>
          <TableCell align="center">Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results
          .sort((a, b) => b.total - a.total)
          .map(result => (
            <TableRow key={result.id}>
              <TableCell component="th" scope="row">
                {result.name}
              </TableCell>
              {expeditions.map(expedition => (
                <TableCell
                  key={expedition.key}
                  align="center"
                  style={{ backgroundColor: expedition.color, color: "white" }}
                >
                  {String(result[expedition.key])}
                </TableCell>
              ))}
              <TableCell align="center">{result.total}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Scorecard;
