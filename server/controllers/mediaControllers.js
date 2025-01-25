const searchByArtist = (req, res) => {
    try {
        const { artistFirstName, artistLastName } = req.body

        const url = ` https://itunes.apple.com/search?term=${artistFirstName}+${artistLastName}&media=music&entity=musicTrack&attribute=artistTerm
`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                res.status(200).json(data)
            })
    } catch (error) {
        console.log(error)
    }
}

const searchByMediaType = (req, res) => {
    try {
        const { mediaType } = req.body
        const url = `https://itunes.apple.com/search?term=action&media=${mediaType}&limit=10`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                res.status(200).json(data)
            })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { searchByArtist, searchByMediaType }

