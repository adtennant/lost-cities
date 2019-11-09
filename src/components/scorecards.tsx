import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ScorecardContainer from "../containers/scorecardContainer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IScorecardEntry } from "../state/ducks/scorecard/types";

type Props = {
  entries: IScorecardEntry[];
};

const Scorecards: React.FC<Props> = ({ entries }) => {
  const [expanded, setExpanded] = React.useState<string | undefined>(undefined);

  const handleChange = (panel: string) => (
    _: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : undefined);
  };

  return (
    <>
      {entries.map(entry => (
        <ExpansionPanel
          key={entry.id}
          expanded={expanded === entry.id}
          onChange={handleChange(entry.id)}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{entry.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component="div">
              <ScorecardContainer entry={entry} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
};

export default Scorecards;
