import React from "react";
import Results from "../components/results";
import { useSelector } from "react-redux";
import { IApplicationState } from "../state/ducks";
import { getResults } from "../state/ducks/scorecard/selectors";

const ScorecardContainer = () => {
  const stateToProps = useSelector((state: IApplicationState) => ({
    results: getResults(state)
  }));

  return <Results {...stateToProps} />;
};

export default ScorecardContainer;
