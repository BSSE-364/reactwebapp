import React, { useContext } from 'react';
import { ContextValues } from "./App"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        maxWidth: 500,
        marginLeft: 65,
        marginBottom: 20,
    },
    media: {
        height: 140,
        objectFit: 'cover'
    },
});

export default function ProductCard(props) {
    const context = useContext(ContextValues);
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.items.productImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3" align="center">
                            {props.items.productName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align="center">
                            ${props.items.price}.00
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant="contained" color="primary" fullWidth style={{ fontWeight: 'bold' }}
                        onClick={() => context.handleDispatch({
                            type: "addCartItems",
                            id: props.items.id,
                            products: props.items,
                        })}
                    >
                        Add To Cart
                </Button>
                </CardActions>
            </Card>
        </>
    );
}
