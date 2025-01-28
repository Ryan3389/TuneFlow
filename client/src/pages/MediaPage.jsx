import postMalone from '../assets/postMalone.jpg'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
function MediaPage() {
    const [artistState, setArtistState] = useState([])

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const firstName = params.get('firstName')
    const lastName = params.get('lastName')


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`api/media/artist?firstName=${firstName}&lastName=${lastName}`, {
                    method: 'GET',
                })
                if (!response.ok) {
                    throw new Error("Network error")
                }

                const data = await response.json()

                const filteredData = data.results.filter((song, index, arr) =>
                    arr.findIndex(item => item.collectionName === song.collectionName && item.artworkUrl100 === song.artworkUrl100) === index
                );

                const updateArtistState = filteredData.map((song) => ({
                    collectionName: song.collectionName,
                    imgUrl: song.artworkUrl100
                }));

                setArtistState(updateArtistState)
                console.log(updateArtistState)
            } catch (error) {
                console.error(error)
            }

        }
        getData()
    }, [firstName, lastName])
    return (
        <section className="song-container">
            {artistState.map((song, index) => (
                <article className='song-article'>
                    <p>{song.collectionName}</p>
                    <img src={song.imgUrl} alt="Post Malone" className='song-img' />
                    <button className='save-btn'>Save</button>
                </article>
            ))}
        </section>
    )
}

export default MediaPage