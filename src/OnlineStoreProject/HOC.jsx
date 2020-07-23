import React, { useState } from 'react'
import DSLR1 from './Images/dslr1.jpg'
import DSLR2 from './Images/dslr2.jpg'
import DSLR3 from './Images/dslr3.jpg'
import DSLR4 from './Images/dslr4.jpg'
import DSLR5 from './Images/dslr5.jpg'
import Iphone6 from './Images/iphone6.jpg'
import Iphone7 from './Images/iphone7.jpg'
import Iphone8 from './Images/iphone8.jpg'

function HOC(HocFunction) {
    const NewComponent = () => {
        const [products, setProducts] = useState([
            { id: 1, productImage: DSLR1, productName: 'DSLR Pro', price: 95 },
            { id: 2, productImage: DSLR2, productName: 'DSLR Max', price: 98 },
            { id: 3, productImage: DSLR3, productName: 'DSLR Simple', price: 60 },
            { id: 4, productImage: DSLR4, productName: 'DSLR Pro Max', price: 110 },
            { id: 5, productImage: DSLR5, productName: 'DSLR Xs', price: 75 },
            { id: 6, productImage: Iphone6, productName: 'ihpone 5', price: 65 },
            { id: 7, productImage: Iphone7, productName: 'ihpone 7 Plus', price: 82 },
            { id: 8, productImage: Iphone8, productName: 'ihpone X', price: 95 },
        ]);
        return (
            <>
                <HocFunction products={[...products]} setHook={setProducts} />
            </>
        )
    };
    return NewComponent;
};

export default HOC
