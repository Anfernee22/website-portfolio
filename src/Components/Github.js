import { useEffect } from "react";
const Github = () => {
    useEffect(() => {
        window.location.href = "https://github.com/Anfernee22"
    }, [])
    return (
        <div style={{width: '85%', height: '100vh'}}>
            <h1>Welcome to my Github Page</h1>
        </div>
    )
}
export default Github;