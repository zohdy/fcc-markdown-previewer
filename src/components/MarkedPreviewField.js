import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 3)
    }
  })
);

const MarkedPreviewField = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline>
        <Container maxWidth="md">
          <Paper className={classes.root}>
            <div id="preview" dangerouslySetInnerHTML={props.parseMarkup()} />
          </Paper>
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
};

export default MarkedPreviewField;
