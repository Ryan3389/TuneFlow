import { Link } from "react-router";
import taylorSwift from '../assets/taylorSwift.jpg'
import postMalone from '../assets/postMalone.jpg'
import eltonJohn from '../assets/eltonJohn.jpg'
import morganWallen from '../assets/morganWallen.jpg'
import ladyGaga from '../assets/ladyGaga.webp'
import auth from "../utils/auth";


function HomePage() {
    // USE THIS FOR QUERY USERS 
    const userId = auth.getToken().data._id
    console.log(userId)

    const artists = [
        { id: 1, firstName: "Taylor", lastName: 'Swift', imgSrc: taylorSwift, altTag: "Taylor Swift Headshot" },
        { id: 2, firstName: "Post", lastName: 'Malone', imgSrc: postMalone, altTag: "Post Malone Headshot" },
        { id: 3, firstName: "Elton", lastName: 'John', imgSrc: eltonJohn, altTag: "Elton John Headshot" },
        { id: 4, firstName: "Morgan", lastName: 'Wallen', imgSrc: morganWallen, altTag: "Morgan Wallen Headshot" },
        { id: 5, firstName: "Lady", lastName: 'Gaga', imgSrc: ladyGaga, altTag: "Lady Gaga Headshot" },
    ]
    return (
        <section className="artist-section">
            <span className='artist-title-span'>
                <h2>Top Artists</h2>
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
                <p>Discover new artists today</p>
                <p>Start browsing</p>
            </div>
        </section>
    )
}

export default HomePage
