import React, { useCallback } from "react";
import Scorecard from "../components/scorecard";
import { useDispatch } from "react-redux";
import {
  changeWager,
  addCard,
  removeCard
} from "../state/ducks/scorecard/actions";
import { IScorecardEntry } from "../state/ducks/scorecard/types";

type Props = {
  entry: IScorecardEntry;
};

const ScorecardContainer: React.FC<Props> = ownProps => {
  const dispatch = useDispatch();

  const dispatchToProps = {
    onAddCard: useCallback(
      (id, expedition, card) => dispatch(addCard({ id, expedition, card })),
      [dispatch]
    ),
    onRemoveCard: useCallback(
      (id, expedition, card) => dispatch(removeCard({ id, expedition, card })),
      [dispatch]
    ),
    onChangeWager: useCallback(
      (id, expedition, wager) =>
        dispatch(changeWager({ id, expedition, wager })),
      [dispatch]
    )
  };

  return <Scorecard {...ownProps} {...dispatchToProps} />;
};

export default ScorecardContainer;
