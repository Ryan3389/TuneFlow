const getMedia = (req, res) => {
    try {
        const url = `https://itunes.apple.com/search?term=action&media=podcast&limit=10`
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

module.exports = { getMedia }

