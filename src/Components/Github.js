import { useEffect } from "react";
const Github = () => {
    useEffect(() => {
        window.location.href = "https://github.com/Anfernee22"
    }, [])
    return <h1>Welcome to my Github Page</h1>
}
export default Github;