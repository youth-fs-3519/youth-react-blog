import { useEffect, useState } from "react";
import { useParams } from "react-router";

function PostPage() {
    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState({});
    const [comments, setComments] = useState([]);

    const getPostInfo = () => {}
    const getComments = () => {}

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
        <>
            <h1>
                PostPage
            </h1>
            <h2>
                {postId}    
            </h2>
        </>
    )
}

export default PostPage;