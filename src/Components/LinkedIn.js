import { useEffect } from "react";
const LinkedIn = () => {
    useEffect(() => {
        window.location.href = 'https://www.linkedin.com/'
    })
   return <h1>Welcome to my Linked In page</h1>
}
export default LinkedIn;