import { useEffect } from "react"
import { useLocation } from "react-router-dom"
function MediaPage() {
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
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [])
    return (
        <h1 style={{ color: "white" }}>Category</h1>
    )
}

export default MediaPage