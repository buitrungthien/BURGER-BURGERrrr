import React from 'react';
import Auxxx from '../../../hoc/Auxxx';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}: {props.ingredients[igKey]}</span>
                </li>
            )
        });

    return (
        <Auxxx>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType= {"Danger"}>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType= {"Success"}>CONTINUE</Button>
        </Auxxx>
    )
};

export default orderSummary;