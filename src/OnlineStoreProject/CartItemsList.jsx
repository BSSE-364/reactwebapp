import React, { useContext } from 'react';
import { ContextValues } from './App'
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 250,
        maxWidth: '100%',
        padding: 'none'
    },
    paper: {
        width: '100%',
    },
    paperTwo: {
        width: '20%',
        marginLeft: 30,
        textAlign: "center",
        height: 300
    },
    root: {
        '& > span': {
            margin: theme.spacing(1),
        },
    },
}));
function CartItemsList() {
    const contextArray = useContext(ContextValues);
    const classes = useStyles();
    return (
        <>
            {
                contextArray.stateItemsArray.length > 0 ? (
                    <>
                        <div style={{ display: 'flex', marginTop: 40 }}>
                            <TableContainer className={classes.paper} component={Paper}>
                                <Table className={classes.table} aria-label="simple table" >
                                    <TableHead style={{ backgroundColor: '#f5f7f9' }}>
                                        <TableRow>
                                            <TableCell align="center"><b>PRODUCT</b></TableCell>
                                            <TableCell align="center"><b>NAME</b></TableCell>
                                            <TableCell align="center"><b>PRICE</b></TableCell>
                                            <TableCell align="center"><b>QUANTITY</b></TableCell>
                                            <TableCell align="center"><b>QUANTITY ++</b></TableCell>
                                            <TableCell align="center"><b>QUANTITY --</b></TableCell>
                                            <TableCell align="center"><b>TOTAL PRICE</b></TableCell>
                                            <TableCell align="center"><b>Delete</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {contextArray.stateItemsArray.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell align="center">
                                                    <img src={row.productImage} alt="Not Found" style={{ objectFit: 'cover', borderRadius: 3 }} height="80" width="180" />
                                                </TableCell>
                                                <TableCell align="center">{row.productName}</TableCell>
                                                <TableCell align="center">${row.price}.00</TableCell>
                                                <TableCell align="center">{row.quantity}</TableCell>
                                                <TableCell align="center" >
                                                    <Fab style={{ color: green[500] }} size="small" aria-label="add" className={classes.margin}
                                                        onClick={() => contextArray.handleDispatch({ type: "increament", id: row.id, row })} >
                                                        <AddIcon />
                                                    </Fab>
                                                </TableCell>
                                                <TableCell align="center" onClick={contextArray.handleDispatch({ type: 'quantityDecrease' })}>
                                                    <Fab style={{ color: green[500] }} size="small" aria-label="add"
                                                        onClick={() => contextArray.handleDispatch({ type: "decreament", id: row.id, row })}>
                                                        <RemoveIcon />
                                                    </Fab>
                                                </TableCell>
                                                <TableCell align="center">${row.totalPrice * row.quantity}.00</TableCell>
                                                <TableCell align="center">
                                                    <Fab style={{ color: red[500] }} size="small" aria-label="add"
                                                        onClick={() => contextArray.handleDispatch({ type: "deleteCartItems", id: row.id, row })}>
                                                        <ClearIcon />
                                                    </Fab>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </>
                ) : (<div style={{ textAlign: 'center', marginTop: 100, color: "#3574dc" }}>
                    <h3>Currently you have no item(s) in the shopping cart</h3>
                    <h5>Please first add items in the shopping cart</h5>
                </div>)
            }
        </>
    )
}

export default CartItemsList
