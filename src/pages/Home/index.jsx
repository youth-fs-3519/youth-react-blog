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
        <div className="container">
            <div className="row">
                <div className="col-auto">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary">
                        Criar post
                    </button>
                </div>
            </div>
            <div className="row gy-3">
                {posts.map((post, index) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Home;