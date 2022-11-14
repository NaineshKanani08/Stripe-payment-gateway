import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import "../styles.css";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
    }

    return stripePromise;
};

const Checkout = () => {
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const item = {
        price: "price_1M40iSSI4eVtA6Th32Jn20tY",
        quantity: 1
    };
    // const item2 = {
    //     price: "price_1M41IKSI4eVtA6Thns7O2FtW",
    //     quantity: 1
    // };

    const checkoutOptions = {
        lineItems: [item, /* item2 */],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    };

    const redirectToCheckout = async () => {
        setLoading(true);

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) setStripeError(error.message);
        setLoading(false);
    };

    if (stripeError) alert(stripeError);

    return (
        <div className="checkout">
            <h1>Stripe Checkout</h1>
            <p className="checkout-title">Sport Shoes</p>
            <p className="checkout-description">
                It is good quality of the product
            </p>
            <h1 className="checkout-price">₹ 3000</h1>
            <img
                className="checkout-product-image"
                src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
            />
            <button
                className="checkout-button"
                onClick={redirectToCheckout}
                disabled={isLoading}
            >
                <div className="grey-circle">
                    <div className="purple-circle">
                        {/* <img className="icon" src={CardIcon} alt="credit-card-icon" /> */}
                    </div>
                </div>
                <div className="text-container">
                    <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
                </div>
            </button>
        </div>
    );
};

export default Checkout;
