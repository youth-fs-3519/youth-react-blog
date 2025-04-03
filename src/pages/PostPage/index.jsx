import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

function PostPage() {
    const { postId } = useParams();

    const { data: comments = [] } = useQuery({
        queryKey: ['comments', Number(postId)],
        queryFn: async () => {
            const response = await fetch(`https://api-todos.pamplona.io/posts/${postId}/comments`);
            return await response.json();
        },
        staleTime: Infinity,
    });

    const { data: postInfo = {} } = useQuery({
        queryKey: ['post', Number(postId)],
        queryFn: async () => {
            const response = await fetch(`https://api-todos.pamplona.io/posts/${postId}`);
            return await response.json();
        },
        staleTime: Infinity,
    });

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            return await fetch(`https://api-todos.pamplona.io/posts/${postId}/comments`, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['comments', Number(postId)]
            })
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = {
            title: formData.get('title'),
            body: formData.get('body'),
            email: formData.get('email'),
        };

        mutate(formJson)
    }

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
                        <h3>{comment.title}</h3>
                        <p>{comment.body}</p>
                        <small>{comment.email}</small>
                    </div>
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <input
                            className="w-100"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="col-12">
                        <input
                            className="w-100"
                            type="text"
                            name="title"
                            placeholder="Título"
                        />
                    </div>

                    <div className="col-12">
                        <textarea
                            className="w-100"
                            name="body"
                            placeholder="Seu comentário"
                        />
                    </div>

                    <div className="col">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={isPending}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PostPage;