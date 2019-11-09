import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Zoom,
  useTheme,
  TextField
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  onSubmit: (name: string) => void;
};

const AddPlayerButton: React.FC<Props> = ({ onSubmit }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hasError = !name || name.length === 0;
    setError(hasError);

    if (hasError) {
      return;
    }

    onSubmit(name);
    onClose();
  };

  const onClose = () => {
    setError(false);
    setName("");
    setOpenDialog(false);
  };

  return (
    <>
      <Zoom
        in
        style={{
          position: "absolute",
          bottom: theme.spacing(2),
          right: theme.spacing(2)
        }}
        timeout={theme.transitions.duration.enteringScreen}
        unmountOnExit
      >
        <Fab onClick={() => setOpenDialog(true)}>
          <AddIcon />
        </Fab>
      </Zoom>
      <Dialog
        aria-labelledby="player-dialog-title"
        open={openDialog}
        onClose={onClose}
      >
        <DialogTitle id="player-dialog-title">Add Player</DialogTitle>
        <form onSubmit={handleSubmit} noValidate>
          <DialogContent>
            <TextField
              autoFocus
              error={error}
              fullWidth
              id="player-name"
              label="Name"
              name="name"
              onChange={handleChange}
              required
              value={name}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddPlayerButton;
