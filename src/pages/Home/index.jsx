import { useEffect, useState } from "react";
import Post from "../../components/Post";

// let posts = [];

// const setPosts = (novoValor) => {
//     posts = novoValor;
// }


function Home() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const responseJson = await response.json();
        setPosts(responseJson)
    }
    // getPosts() // não pode

    useEffect(
        () => { getPosts() },
        []
    )
    
    return (
        <>
            <h1>Home</h1>
            <div>
                {posts.map((post, index) => (
                    <Post post={post} />
                ))}
            </div>
        </>
    )
}

export default Home;