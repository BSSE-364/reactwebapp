import React, { lazy, Suspense } from 'react'
import HOC from './HOC'
const ProductCard = lazy(() => import('./ProductCard'))

function MainProducts(props) {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Products</h1>
            </div>
            <Suspense fallback={<h2 style={{ marginTop: '12%', marginLeft: '40%', color: 'green' }}>Loading Products...</h2>}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        props.products.map((items, i) => {
                            return (
                                <ProductCard key={i} indexProps={i} items={items} />
                            )
                        })
                    }
                </div>
            </Suspense>
        </>
    )
}

export default HOC(MainProducts)
