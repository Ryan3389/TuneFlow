import { Link } from "react-router-dom"
import auth from '../utils/auth'
function Navbar() {

    const handleLogout = () => {
        auth.logout()
    }
    return (
        <header>
            {auth.loggedIn() ? (
                <nav>
                    <span className="nav-left">
                        <p>TuneFlow</p>
                    </span>

                    <span className="nav-right">
                        <Link to='/'>Home</Link>
                        <Link to="/dashboard">Browse Music</Link>
                        <Link to='/saved'>Favourites</Link>
                        <Link onClick={handleLogout} className="sign-in-btn">Logout</Link>
                    </span>
                </nav>
            ) : (
                <nav>
                    <span className="nav-left">
                        <p>TuneFlow</p>
                    </span>

                    <span className="nav-right">
                        <Link to='/'>Home</Link>
                        <Link to='/login' className="sign-in-btn">Sign in</Link>
                    </span>
                </nav>
            )}
        </header>
    )
}

export default Navbar
