import { useHistory } from "react-router";
import React from "react";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: "70em",
  },
  profile: {
    flexGrow: 1,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
    maxWidth: "50em",
    // margin: "5%",
    display: "flex",
    height: 80,
    alignItems: "center",
    // justifyContent: 'center',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    textAlign: "",
  },
}));


const ProfileGate = (props) => {
    console.log(props.user);
    const classes = useStyles();
    const history = useHistory();

    const goToDetail = () => {
        console.log('onClick');
        history.push({
            pathname: `mypage/${props.user.nickname}`,
            state: props.user});
    }

  return (
    <>
      <div>
        <h2>My</h2>
      </div>
      <Grid container justify="center">
        <Card className={classes.profile}>
          <CardActionArea onClick={goToDetail}>
            {/* <CardActions > */}
            <CardHeader
              fontSize="large"
              avatar={
                <Avatar
                  aria-label="recipe"
                  src="../static/live_IU2.png"
                  // className={classes.avatar}
                  className={classes.large}
                ></Avatar>
              }
              // titleTypographyProps={{variant:'h1' }}
              title={<Typography variant="h6">{props.user.nickname}</Typography>}
              // subheader="September 14, 2016"
            />
            {/* </CardActions> */}
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default ProfileGate;