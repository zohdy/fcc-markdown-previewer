import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

const MarkedInputField = (props) => {
  const [input, setInput] = useState(props.preloadedMarkup);
  const handleChange = (e) => {
    props.handleUserInput(e);
    setInput(e.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline>
        <Container maxWidth="md">
          <TextField
            autoFocus
            fullWidth
            id="editor"
            label="Insert Markup"
            multiline
            rows="23"
            margin="dense"
            variant="outlined"
            value={input}
            onChange={handleChange}
            name="inputField"
          />
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
};

export default MarkedInputField;
