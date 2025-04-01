import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function PostPage() {
    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState({});

    const { data: comments = [] } = useQuery({
        queryKey: ['comments', Number(postId)],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            return await response.json();
        },
        staleTime: Infinity,
    });

    const getPostInfo = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const responseJson = await response.json();
        setPostInfo(responseJson);
    }

    useEffect(() => {
        getPostInfo();
    }, [postId])

    // fazer requisição para pegar informações do post
    // https://jsonplaceholder.typicode.com/posts/${postId}
    // Mostrar titulo completo do post e corpo do post

    // fazer requisição para pegar comentários do post
    // https://jsonplaceholder.typicode.com/posts/${postId}/comments
    // mostrar comentários do post no final da página

    return (
        <div className="container">
            <h1>
                {postInfo.title}
            </h1>
            <p>
                {postInfo.body} 
            </p>
            <hr />
            <h2>Comentários</h2>
            {comments.map((comment) => (
                <div key={comment.id} className="card">
                    <div className="card-body">
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                        <small>{comment.email}</small>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostPage;