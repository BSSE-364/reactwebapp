import React, { useReducer, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainProducts from '../OnlineStoreProject/MainProducts'
import CartItemsList from '../OnlineStoreProject/CartItemsList'
import Header from '../OnlineStoreProject/Header'

export const ContextValues = React.createContext();
const initialState = {
    cartItemsListArray: [],
    quantity: 0,
    totalPrice: 0,
};

const reducer = (state, action) => {
    const { cartItemsListArray, quantity, totalPrice } = state;
    let product;
    let updateQty;
    let index;
    let updatePrice;
    switch (action.type) {
        case "addCartItems":
            try {
                let check = cartItemsListArray.find((vals) => vals.id === action.id)
                if (check) {
                    alert('You already added this item into shopping cart')
                    return state
                } else {
                    product = action.products;
                    product['quantity'] = 1;
                    updateQty = quantity + 1;
                    product['totalPrice'] = product.price;
                    updatePrice = totalPrice + product.price;
                    return {
                        ...state,
                        cartItemsListArray: [product, ...cartItemsListArray],
                        quantity: updateQty,
                        totalPrice: updatePrice,
                    }
                }
            } catch (error) {
                console.log('error in addCartItems', error)
            }
            break;

        case "increament":
            try {
                product = action.row;
                product.quantity = product.quantity + 1;
                updateQty = quantity + 1;
                updatePrice = totalPrice + product.price;
                index = cartItemsListArray.findIndex((carts) => carts.id === action.id);
                cartItemsListArray[index] = product;
                return {
                    ...state,
                    cartItemsListArray: [...cartItemsListArray],
                    totalPrice: updatePrice,
                    quantity: updateQty,
                }
            } catch (error) {
                console.log('error in increament', error)
            }
            break;

        case "decreament":
            try {
                product = action.row;
                if (product.quantity > 1) {
                    product.quantity = product.quantity - 1;
                    updateQty = quantity - 1;
                    updatePrice = totalPrice - product.price;
                    index = cartItemsListArray.findIndex((carts) => carts.id === action.id);
                    cartItemsListArray[index] = product;
                    return {
                        ...state,
                        cartItemsListArray: [...cartItemsListArray],
                        totalPrice: updatePrice,
                        quantity: updateQty,
                    }
                } else {
                    return state;
                }
            } catch (error) {
                console.log('error in decreament', error)
            }
            break;

        case "deleteCartItems":
            try {
                const filteredValue = cartItemsListArray.filter((del) => del.id !== action.id);
                product = action.row;
                updateQty = quantity - product.quantity;
                return {
                    ...state,
                    cartItemsListArray: [...filteredValue],
                    quantity: updateQty
                }
            } catch (error) {
                console.log('error in decreament', error)
            }
            break;

        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    //// Preloading Screen
    const [isLoading, setLoading] = useState(true);
    const fakeRequest = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }
    useEffect(() => {
        fakeRequest().then(() => {
            const el = document.querySelector(".loader-container")
            if (el) {
                el.remove();
                setLoading(!isLoading);
            }
        })
    }, [isLoading]);
    if (isLoading) {
        return null
    }

    const valuesObject = {
        cartItemsQuantity: state.quantity,
        stateItemsArray: state.cartItemsListArray,
        handleDispatch: dispatch,
    };
    return (
        <>
            <ContextValues.Provider value={valuesObject}>
                <div>
                    <Router>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={MainProducts} />
                            <Route path="/cartItemsList" exact component={CartItemsList} />
                        </Switch>
                    </Router>
                </div>
            </ContextValues.Provider>

        </>
    )
}

export default App
