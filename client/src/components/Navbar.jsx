function Navbar() {
    return (
        <header>
            <nav>
                <span className="nav-left">
                    <p>TuneFlow</p>
                    <a href="#">Home</a>
                    <a href="#">Movies</a>
                    <a href="#">Podcasts</a>
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