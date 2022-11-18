import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <h2>Payment-Gateway Example</h2>

            {/* <ul>
                <li><Link to='/stripe'> Stripe Example </Link></li>
                <li><Link to='/razor-pay'> Razor-pay Example </Link></li>
            </ul> */}
            <ul>
                <li>Stripe Example</li>
                <li> Razor-pay Example</li>
            </ul>
        </div>
    )
}

export default Home