import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <h2>Payment-Gateway</h2>
            <ul>
                <li><Link to='/stripe'> Stripe Example </Link></li>
                <li><Link to='/razor-pay'> Razor-pay Example </Link></li>
            </ul>
        </div>
    )
}

export default Home