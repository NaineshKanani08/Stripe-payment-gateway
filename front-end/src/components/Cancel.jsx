import { Link } from "react-router-dom";

const Cancel = () => {
    return (
        <div>
            <h1>Cancel</h1>
            <h2>Your payment was canceled.</h2>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Cancel;
