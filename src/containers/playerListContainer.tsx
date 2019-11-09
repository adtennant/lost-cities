import React from "react";
import { useSelector } from "react-redux";
import { IApplicationState } from "../state/ducks";
import { getEntries } from "../state/ducks/scorecard/selectors";
import PlayerList from "../components/playerList";

const PlayerListContainer = () => {
  const stateToProps = useSelector((state: IApplicationState) => ({
    entries: getEntries(state)
  }));

  return <PlayerList {...stateToProps} />;
};

export default PlayerListContainer;
