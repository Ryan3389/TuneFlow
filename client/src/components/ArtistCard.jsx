import { Link } from "react-router";

function ArtistCard({ imgSrc, altTag }) {
    return (
        <article>
            <Link to="/media">
                <img src={imgSrc} alt={altTag} className='artist-img' />
            </Link>
        </article>
    )
}

export default ArtistCard