import React from 'react'
import Total from './Total/Total'


class Cart extends React.Component{

    render() {
        return(
        <div>
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                <Total />
            </section>
        </div>
        )
    }
}

export default Cart;