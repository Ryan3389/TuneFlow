import { REMOVE_MEDIA } from "../utils/mutations";
import { GET_SINGLE_USER } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import auth from "../utils/auth";
import { useEffect, useState } from "react";

function SavedPage() {
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        const token = auth.getToken();
        if (token) {
            setUserToken(token.data._id);
        }
    }, []);

    const { loading, error, data, refetch } = useQuery(GET_SINGLE_USER, {
        variables: { userId: userToken },
        fetchPolicy: "network-only", // Ensure fresh data every time
        skip: !userToken, // Prevent running query before userToken is set
    });

    const [removeMedia] = useMutation(REMOVE_MEDIA, {
        onCompleted: () => {
            refetch(); // Automatically refetch updated data after removing a song
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const removeSongData = async (song) => {
        await removeMedia({
            variables: {
                userId: userToken,
                mediaId: song._id,
            },
        });
    };

    return (
        <section className="saved-section">
            {data?.getSingleUser?.media.map((artist, index) => (
                <article key={index} className="fav-artist">
                    <span className="remove-fav">
                        <button className="remove-btn" onClick={() => removeSongData(artist)}>x</button>
                    </span>
                    <h3>{artist.artistName}</h3>
                    <p>{artist.trackName}</p>
                    <img src={artist.imgUrl} alt={artist.trackName} className="song-img" />
                </article>
            ))}
        </section>
    );
}

export default SavedPage;
