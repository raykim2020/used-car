import { Link } from 'react-router-dom'
import UserLogOut from '../UserLogOut/UserLogOut'
export default function Nav({ user, setUser }) {
    return (
        <div className='header'>
            <img className="logo" src="/images/logo.png" alt="" />
            <div className='Nav_Bar'>
                <ul>
                    <li className='nav_btn'><Link to="/">Home</Link></li>
                    <li className='nav_btn'><Link to="/cars/listings">Listings</Link></li>
                    <li className='nav_btn'><Link to="/cars/about">About</Link></li>
                    <li className='nav_btn'><Link to="/cars/contact">Contact</Link></li>
                    <li className='nav_btn'><Link to="/cars/shop">Shop</Link></li>
                    <UserLogOut user={user} setUser={setUser} />
                </ul>

            </div>
        </div>
    )
}