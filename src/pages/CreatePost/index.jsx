import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const CreatePost = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (data) => {
            await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: 'post',
                body: JSON.stringify(data)
            })    
        },
        onSuccess: () => {
            navigate('/');
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
        }
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = {
            title: formData.get('title'),
            body: formData.get('body')
        }
        
        mutate(formObject);
    }

    return (
        <div className="container">
            <h1>Criar post</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <input 
                            type="text"
                            name="title"
                            className="w-100"
                            placeholder="Título"
                        />
                    </div>

                    <div className="col-12">
                        <textarea 
                            name="body" 
                            placeholder="Conteúdo"
                            className="w-100 mt-2"
                        />
                    </div>

                    <div className="col">
                        <button 
                            type="submit"
                            className="btn btn-primary"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;