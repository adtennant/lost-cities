import React, { useCallback } from "react";
import AddPlayerButton from "../components/addPlayerButton";
import { useDispatch } from "react-redux";
import { addPlayer } from "../state/ducks/scorecard/actions";

const AddPlayerButtonContainer = () => {
  const dispatch = useDispatch();

  const dispatchToProps = {
    onSubmit: useCallback(name => dispatch(addPlayer(name)), [dispatch])
  };

  return <AddPlayerButton {...dispatchToProps} />;
};

export default AddPlayerButtonContainer;
