import { useParams } from "react-router";

function PostPage() {
    const { postId } = useParams();

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