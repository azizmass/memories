import React,{useEffect, useState} from "react";
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./components/img/memories.png"

import useStyles from "./Styles";

import { getPosts } from "./actions/posts";
import {useDispatch} from "react-redux";




function App()
{   const classes=useStyles();
    const dispatch=useDispatch();
    const [currentId , setCurrentId]=useState(null)
    useEffect(()=>{
    dispatch(getPosts())
    },[dispatch]);
    return (
       <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img src={memories} className={classes.image} alt="memories" height="60" />
        </AppBar>
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
             <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={currentId} />
            </Grid>

            </Grid>
        </Container>
        </Grow>
       </Container>
    )
}

export default App;