import { useEffect } from "react";
const LinkedIn = () => {
    useEffect(() => {
        window.location.href = 'https://www.linkedin.com/'
    },[])
   return (
        <div style={{width: '85%', height: '100vh'}}>
            <h1>Welcome to my Linked In page</h1>
       </div>
   )}
export default LinkedIn;