import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../context/AuthProvider';

const Success = () => {
    const { state } = useLocation()
    const { isAuthenticated, isLoading } = useAuth()

    return (
        <>{isLoading ? <p>Loading...</p> : isAuthenticated ?

            <div>
                <h1>Success</h1>
                <div>
                    {state && Object.keys(state).length &&
                        <>
                            <h3>OrderId:{state?.razorpay_order_id}</h3>
                            <h3>PaymentId:{state?.razorpay_payment_id}</h3>
                            <h3>Signature:{state?.razorpay_signature}</h3>
                        </>
                    }
                </div>
                <h2>Thank you for your purchase!</h2>
                <Link to="/">Home</Link>
            </div> : <p>Please Login to continue</p>
        }
        </>
    );
};

export default Success;
