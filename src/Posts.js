import { VscBug } from 'react-icons'

export const Post = () =>{
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.xyzcom/posts')
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(error => console.error)
    }}>
        <VscBug/>
        Traer datos
    </button>
}