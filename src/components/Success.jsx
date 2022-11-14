import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div>
            <h1>Success</h1>
            <h2>Thank you for your purchase!</h2>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Success;
