import { Link } from "react-router";
import postMalone from '../assets/postMalone.jpg'
import eltonJohn from '../assets/eltonJohn.jpg'
import brunoMars from '../assets/brunoMars.png'
import theWeeknd from '../assets/theWeeknd.jpg'
import ladyGaga from '../assets/ladyGaga.webp'
import auth from "../utils/auth";


function HomePage() {
    const artists = [
        { id: 1, firstName: "Bruno", lastName: 'Mars', imgSrc: brunoMars, altTag: "Bruno Mars Headshot" },
        { id: 2, firstName: "Post", lastName: 'Malone', imgSrc: postMalone, altTag: "Post Malone Headshot" },
        { id: 3, firstName: "Elton", lastName: 'John', imgSrc: eltonJohn, altTag: "Elton John Headshot" },
        { id: 4, firstName: "The", lastName: 'Weeknd', imgSrc: theWeeknd, altTag: "The Weeknd Headshot" },
        { id: 5, firstName: "Lady", lastName: 'Gaga', imgSrc: ladyGaga, altTag: "Lady Gaga Headshot" },
    ]
    return (
        <section className="artist-section">
            <span className='artist-title-span'>
                <h2>Top Artists </h2>
            </span>
            <div className='artist-div'>
                {artists.map((artist) => (
                    <Link key={artist.id} to={`/media?firstName=${encodeURIComponent(artist.firstName)}&lastName=${encodeURIComponent(artist.lastName)}`}>
                        <img src={artist.imgSrc} alt={artist.altTag} className="artist-img" />
                    </Link>
                ))}

            </div>

            <div className='cta-home'>
                <p>TuneFlow Music</p>
                <p>Discover Something New</p>
                <p>Start Listening</p>
            </div>
        </section>
    )
}

export default HomePage
