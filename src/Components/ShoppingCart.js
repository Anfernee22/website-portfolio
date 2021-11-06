import { useEffect } from "react";
const ShoppingCart = () => {
    useEffect(() => {
        window.location.href = 'https://github.com/Anfernee22/react-shopping-cart/tree/shopping'
    },[])
    return (
        <div style={{width: '85%', height: '100vh'}}>
           <h1>Welcome to my Shopping Cart project</h1>
        </div>
    )
}
export default ShoppingCart;