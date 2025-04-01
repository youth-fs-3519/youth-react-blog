import { useEffect, useState } from "react";
import Post from "../../components/Post";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

function Home() {
    const { data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            return await response.json();
        },
        staleTime: Infinity,
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-auto">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link  
                        to={"/post/create"}
                        className="btn btn-primary"
                    >
                        Criar post
                    </Link>
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