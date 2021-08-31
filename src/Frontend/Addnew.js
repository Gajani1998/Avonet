import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Redirect } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Navigation from './Navigation'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',
      },
      toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
      },

      menuButton: {
            marginRight: 36,
      },
      menuButtonHidden: {
            display: 'none',
      },
      title: {
            flexGrow: 1,
            fontSize: 40,
            fontWeight: 600,
      },

      appBarSpacer: theme.mixins.toolbar,
      content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            backgroundColor: '#f0f8ff'
      },
      container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            alignContent: 'center',
            align: 'center',

      },
      paper: {
            position: 'relative',
            align: 'center',
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',

      },
      fixedHeight: {
            height: 240,
      },

      imageInput: {
            border: 'none',
            borderColor: 'white'
      }
}));

const styles = {
      side: {
            backgroundColor: 'rgb(37,37,94)',
      },


};


export default function AddProductForm() {

      const classes = useStyles();
      return (
            <div className={classes.root}>
                  <Navigation />

                  <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>
                              <Grid container spacing={18}>
                                    <Grid item xs={11} direction="row"  >

                                          <div >
                                                <Paper className={classes.paper}>
                                                      <Typography component="h1" variant="h6" color="inherit" align="center" width="100%" noWrap className={classes.title}>
                                                            <strong>ADD NEW ITEMS</strong>
                                                      </Typography><br />
                                                      <Form  >

                                                            <Form.Group as={Row} controlId="formHorizontalName">
                                                                  <Form.Label column lg={2} >
                                                                        Item Name :
                                                                  </Form.Label>
                                                                  <Col >
                                                                        <Form.Control type="text" placeholder="Enter the item name"
                                                                        />
                                                                  </Col>
                                                            </Form.Group><br />

                                                            <div align="center">
                                                                  <Button type="submit" style={{ fontSize: '20px', width: '200px' }} >Submit</Button>
                                                            </div>


                                                      </Form>


                                                </Paper>
                                          </div>
                                    </Grid>

                              </Grid>


                        </Container>
                  </main>
            </div>
      );
}

