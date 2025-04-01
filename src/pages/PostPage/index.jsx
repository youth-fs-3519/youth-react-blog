import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

function PostPage() {
    const { postId } = useParams();

    const { data: comments = [] } = useQuery({
        queryKey: ['comments', Number(postId)],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            return await response.json();
        },
        staleTime: Infinity,
    });

    const { data: postInfo = {} } = useQuery({
        queryKey: ['post', Number(postId)],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            return await response.json();
        },
        staleTime: Infinity,
    })

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