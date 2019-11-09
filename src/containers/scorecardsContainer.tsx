import React from "react";
import { useSelector } from "react-redux";
import { IApplicationState } from "../state/ducks";
import { getEntries } from "../state/ducks/scorecard/selectors";
import Scorecards from "../components/scorecards";

const ScorecardsContainer = () => {
  const stateToProps = useSelector((state: IApplicationState) => ({
    entries: getEntries(state)
  }));

  return <Scorecards {...stateToProps} />;
};

export default ScorecardsContainer;
