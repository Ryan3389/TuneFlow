import { Link } from "react-router-dom"
function LandingPage() {
    return (
        <section className="hero-section">
            <article className="hero-intro">
                <h1>Welcome to TuneFlow</h1>
                <p>Listen to the latest music, save your favourites</p>
                <Link to={'/dashboard'} className="browse-btn">Browse Music</Link>
            </article>
        </section>
    )
}

export default LandingPage