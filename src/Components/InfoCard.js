import { useEffect } from "react";
const InfoCard = () => {
    useEffect(() => {
        window.location.href = 'https://github.com/Anfernee22/Information-Card'
    },[])
    return (
        <div style={{width: '85%', height: '100vh'}}>
            <h1>Welcome to my Information Card Project</h1>
        </div>
    )
}
export default InfoCard;