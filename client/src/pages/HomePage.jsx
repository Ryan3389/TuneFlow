import ArtistCard from '../components/artistCard'
import taylorSwift from '../assets/taylorSwift.jpg'
import postMalone from '../assets/postMalone.jpg'
import eltonJohn from '../assets/eltonJohn.jpg'
import morganWallen from '../assets/morganWallen.jpg'
import ladyGaga from '../assets/ladyGaga.webp'

function HomePage() {
    return (
        <section className="artist-section">
            <span className='artist-title-span'>
                <h2>Top Artists</h2>
            </span>
            <div className='artist-div'>
                <ArtistCard
                    imgSrc={taylorSwift}
                    altTag="Taylor Swift Headshot"
                />
                <ArtistCard
                    imgSrc={postMalone}
                    altTag="Post Malone Headshot"
                />
                <ArtistCard
                    imgSrc={eltonJohn}
                    altTag="Elton John Headshot"
                />
                <ArtistCard
                    imgSrc={morganWallen}
                    altTag="Morgan Wallen Headshot"
                />
                <ArtistCard
                    imgSrc={ladyGaga}
                    altTag="ladyGaga Headshot"
                />
            </div>

            <div className='cta-home'>
                <p>TuneFlow Music</p>
                <p>Discover new artists today</p>
                <p>Start browsing</p>
                <p></p>
            </div>
        </section>
    )
}

export default HomePage