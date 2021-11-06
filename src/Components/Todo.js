import { useEffect } from "react";
const Todo = () => {
    useEffect(() => {
        window.location.href = 'https://github.com/Anfernee22/react-todo-list'
    },[])
    return (
        <div style={{width: '85%', height: '100vh'}}>
            <h1>Welcome to my Todo Project</h1>
        </div>
    )
}
export default Todo;