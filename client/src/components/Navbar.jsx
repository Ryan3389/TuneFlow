import { Link } from "react-router-dom"
function Navbar() {
    return (
        <header>
            <nav>
                <span className="nav-left">
                    <p>TuneFlow</p>
                    <Link to='/'>Home</Link>
                    <Link>Movies</Link>
                    <Link>Podcasts</Link>
                </span>

                <span className="nav-right">
                    <input type="search" aria-label="search" />
                    <a className="sign-in-btn" href="#">Sign In</a>
                </span>
            </nav>
        </header>
    )
}

export default Navbar