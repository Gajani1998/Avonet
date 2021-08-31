import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import { Table } from 'react-bootstrap';
import Navigation from './Navigation'
const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',

      },
      toolbar: {
            paddingRight: 24,
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
      userimage: {
            height: 60,
            width: 60,
            borderRadius: 100,
            borderColor: 'white',

      },

      appBarSpacer: theme.mixins.toolbar,
      content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',

      },

      container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            marginTop: '20px',
            marginLeft: '100px',
      },
      paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
      },
      fixedHeight: {
            height: 'auto',
      },
      addbutton: {
            backgroundColor: '#0000ff',
            height: '50px',
            width: '160px',
            borderRadius: '5px',
            marginRight: '10px',
            textDecoration: 'none',
            textAlign: 'center',
            paddingTop: '10px'
      },
      addcategorybox: {
            width: '1100px',
            height: '120px',
            backgroundColor: '#fff',
            marginLeft: '30px',
            display: 'flex',
            //boxShadow:'5px 1px 2px 2px '

      },
      categorybtn: {
            border: 0,
            backgroundColor: '#9bddff',
            width: '800px',
            height: '40px',
            marginTop: '40px',
            marginLeft: '30px',
            fontSize: '20px',
            borderRadius: '5px'

      },
      addcategory: {
            height: '40px'
      },
      categoryimage: {
            height: '500px',
            width: '1100px'
      },
      btn: {
            color: 'white',
            fontSize: '18px',
            width: '150px',
            height: '40px',
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '5px'
      },
      addproducts: {
            display: 'flex',
      },
      textareabox: {
            border: 'none',
            backgroundColor: '#E1F4FF',
      },


      formlabel1: {
            marginBottom: '20px',
            fontSize: '16px',

      },
      twocolumn: {
            gridTemplateColumns: '1fr 2fr',
            display: 'flex',
      },
      columnleft: {
            width: '300px',
            // backgroundColor:'rgb(63, 111, 199)'
      },
      columnright: {
            width: '700px'
      },

      datas: {
            marginBottom: '20px',
      },
      user1: {
            width: '100px',
            height: '100px',
            marginTop: '20px',
            align: 'center',
            marginLeft: '60px'
      }



}));

const styles = {
      side: {
            backgroundColor: 'rgb(37, 37, 94)',
      }
};


export default function ProductInfo() {
      const [searchTerm, setSearchTerm] = useState("");
      const classes = useStyles();

      return (
            <div className={classes.root}>

                  <Navigation />


                  <main style={{ backgroundColor: '#f0f8ff' }} className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>

                              <Grid container spacing={10}>

                                    <Grid item xs={10} direction="row"  >

                                          <div >
                                                <Paper className={classes.paper}>

                                                      <div >
                                                            <Typography style={{ fontSize: '30px', marginLeft: '20px' }} color="inherit" align="left" width="100%" noWrap className={classes.title}>
                                                                  <strong align="center"> STORE ITEM INFORMATION </strong>

                                                            </Typography>
                                                            <div ><br />
                                                                  <div className='box-main'>
                                                                        <div className="searchbar">
                                                                              <input type="text" placeholder="Search" />
                                                                              <SearchIcon className='searchicon' />
                                                                        </div>
                                                                        <Link to='/Addnew' className="Addbtn"><AddCircleIcon style={{ marginTop: '0px' }} /> Add New</Link>

                                                                  </div><br />
                                                                  <Table striped bordered hover responsive>
                                                                        <thead className="tableheading">

                                                                              <tr>
                                                                                    <th scope="col">Item ID</th>
                                                                                    <th scope="col">Item Name</th>
                                                                              </tr>
                                                                        </thead>
                                                                        <tr>
                                                                              <td scope="col">1</td>
                                                                              <td scope="col">steel</td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td scope="col">2</td>
                                                                              <td scope="col">sand</td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td scope="col">3</td>
                                                                              <td scope="col">Gravel</td>
                                                                        </tr>
                                                                        <tr>
                                                                              <td scope="col">4</td>
                                                                              <td scope="col">color</td>
                                                                        </tr>





                                                                  </Table>
                                                            </div>


                                                      </div>
                                                </Paper>

                                          </div>
                                    </Grid>

                              </Grid>
                        </Container>
                  </main>
            </div>
      );
}








