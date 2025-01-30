
import SongCard from '../components/SongCard'
import { ADD_MEDIA } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import auth from '../utils/auth'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
function MediaPage() {
    // State Variables
    const [artistState, setArtistState] = useState([])


    const [addMedia, { error, data }] = useMutation(ADD_MEDIA)
    //Query Params
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const firstName = params.get('firstName')
    const lastName = params.get('lastName')

    const saveSongData = async (song) => {
        const userId = auth.getToken().data._id

        const mediaInput = {
            artistName: `${firstName} ${lastName}`,
            trackName: song.collectionName,
            imgUrl: song.imgUrl
        }

        const { data } = await addMedia({
            variables: {
                userId,
                mediaInput
            }
        })

        if (data && data.addMedia) {
            console.log("Song saved successfully")
        }
        console.log("User Id: ", userId)
        console.log("Media Input: ", mediaInput)
    }

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
                const topTenSongs = filteredData.slice(0, 9)
                const updateArtistState = topTenSongs.map((song) => ({
                    collectionName: song.collectionName,
                    imgUrl: song.artworkUrl100
                }));

                console.log(updateArtistState)
                setArtistState(updateArtistState)

            } catch (error) {
                console.error(error)
            }

        }
        getData()
    }, [firstName, lastName])
    return (
        <section className="song-container">
            {artistState.map((song, index) => (
                <SongCard
                    collectionName={song.collectionName}
                    imgSrc={song.imgUrl}
                    saveBtn={() => saveSongData(song)}
                    index={index}
                    btnText="Save"
                    artistName={`${firstName} ${lastName}`}
                />
            ))}
        </section>
    )
}

export default MediaPage

// import SongCard from '../components/SongCard'
// import { ADD_MEDIA } from '../utils/mutations'
// import { useMutation } from '@apollo/client'
// import auth from '../utils/auth'
// import { useEffect, useState } from "react"
// import { useLocation } from "react-router-dom"
// function MediaPage() {
//     // State Variables
//     const [artistState, setArtistState] = useState([])


//     const [addMedia, { error, data }] = useMutation(ADD_MEDIA)
//     //Query Params
//     const location = useLocation()
//     const params = new URLSearchParams(location.search)

//     const firstName = params.get('firstName')
//     const lastName = params.get('lastName')

//     const saveSongData = async (song) => {
//         const userId = auth.getToken().data._id

//         const mediaInput = {
//             artistName: `${firstName} ${lastName}`,
//             trackName: song.collectionName,
//             imgUrl: song.imgUrl
//         }

//         const { data } = await addMedia({
//             variables: {
//                 userId,
//                 mediaInput
//             }
//         })

//         if (data && data.addMedia) {
//             console.log("Song saved successfully")
//         }
//         console.log("User Id: ", userId)
//         console.log("Media Input: ", mediaInput)
//     }

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const response = await fetch(`api/media/artist?firstName=${firstName}&lastName=${lastName}`, {
//                     method: 'GET',
//                 })
//                 if (!response.ok) {
//                     throw new Error("Network error")
//                 }

//                 const data = await response.json()

//                 const filteredData = data.results.filter((song, index, arr) =>
//                     arr.findIndex(item => item.collectionName === song.collectionName && item.artworkUrl100 === song.artworkUrl100) === index
//                 );

//                 const updateArtistState = filteredData.map((song) => ({
//                     collectionName: song.collectionName,
//                     imgUrl: song.artworkUrl100
//                 }));

//                 setArtistState(updateArtistState)

//             } catch (error) {
//                 console.error(error)
//             }

//         }
//         getData()
//     }, [firstName, lastName])
//     return (
//         <section className="song-container">
//             {artistState.map((song, index) => (
//                 <SongCard
//                     collectionName={song.collectionName}
//                     imgSrc={song.imgUrl}
//                     saveBtn={() => saveSongData(song)}
//                     index={index}
//                     btnText="Save"
//                 />
//             ))}
//         </section>
//     )
// }

// export default MediaPage
