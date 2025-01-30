function SongCard({ collectionName, imgSrc, saveBtn, index, btnText, artistName }) {
    return (
        <>
            <article className='song-article' key={index}>
                <p>{collectionName}</p>
                <p>{artistName}</p>
                <img src={imgSrc} alt="Post Malone" className='song-img' />

                <button onClick={saveBtn} className='save-btn'>{btnText}</button>

            </article>

        </>
    )
}

export default SongCard