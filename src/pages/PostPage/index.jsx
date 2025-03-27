import { useEffect, useState } from "react";
import { useParams } from "react-router";

function PostPage() {
    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState({});
    const [comments, setComments] = useState([]);

    const getPostInfo = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const responseJson = await response.json();
        setPostInfo(responseJson);
    }

    const getComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const responseJson = await response.json();
        setComments(responseJson);
    }

    useEffect(() => {
        getPostInfo();
        getComments();
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
                <div className="card">
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