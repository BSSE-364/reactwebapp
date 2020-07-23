import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ContextValues } from "../OnlineStoreProject/App"
import "./Style.css"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Fab, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing(-0.4),
            width: theme.spacing(200),
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const context = useContext(ContextValues)

    return (
        <>
            <div className={classes.root} >
                <Paper elevation={5}>
                    <ul style={{ listStyle: 'none', textDecoration: 'none' }}>
                        <Grid style={{ display: "flex", paddingRight: '3%' }}>
                            <Grid item sm={8} md={8} lg={8}>
                                <li>
                                    <Typography variant="h6" component="h6" align="left" style={{ cursor: 'pointer' }}>
                                        <b style={{
                                            textDecoration: 'none',
                                            color: '#2abf2c',
                                            fontWeight: "bold"
                                        }}>Online Shoping Store</b>
                                    </Typography>
                                </li>
                            </Grid>
                            <Grid item sm={2} md={2} lg={2}>
                                <li>
                                    <Typography variant="h6" component="h6" align="right" style={{
                                        cursor: 'pointer',

                                    }}>
                                        <NavLink activeClassName="active_class" exact to="/" className="linkNav">
                                            <font style={{ fontSize: 15 }}>Products</font>
                                        </NavLink>
                                    </Typography>
                                </li>
                            </Grid>
                            <Grid item sm={2} md={2} lg={2}>
                                <li>
                                    <Typography variant="h6" component="h6" align="center">
                                        <NavLink activeClassName="active_class" exact to="/cartItemsList" className="linkNav">
                                            <font style={{ fontSize: 15 }}> Cart Items <Fab style={{ marginTop: 0, marginBottom: 5, backgroundColor: "#2abf2c", color: 'white' }}
                                                size="small">
                                                <b>{context.cartItemsQuantity}</b></Fab></font>
                                        </NavLink>
                                    </Typography>
                                </li>
                            </Grid>
                        </Grid>
                    </ul>
                </Paper>
            </div>
        </>
    );
}