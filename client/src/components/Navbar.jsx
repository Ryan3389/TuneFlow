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
                        <Link to='/'>Home</Link>
                        <Link>Movies</Link>
                        <Link>Podcasts</Link>
                    </span>

                    <span className="nav-right">
                        <input type="search" aria-label="search" />
                        <Link onClick={handleLogout} className="sign-in-btn">Logout</Link>
                    </span>
                </nav>
            ) : (
                <nav>
                    <span className="nav-left">
                        <p>TuneFlow</p>
                        <Link to='/'>Home</Link>
                        <Link>Movies</Link>
                        <Link>Podcasts</Link>
                    </span>

                    <span className="nav-right">
                        <input type="search" aria-label="search" />
                        <Link to='/login' className="sign-in-btn">Sign in</Link>
                    </span>
                </nav>
            )}
        </header>
    )
}

export default Navbar
