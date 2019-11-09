import React from "react";
import { IScorecardEntry } from "../state/ducks/scorecard/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

type Props = {
  entries: IScorecardEntry[];
};

const PlayerList: React.FC<Props> = ({ entries }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {entries.map(entry => (
          <TableRow key={entry.id}>
            <TableCell component="th" scope="row">
              {entry.name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlayerList;
