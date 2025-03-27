import { useEffect, useState } from 'react';
import './index.scss'
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';

function Post({ post }) {
    const [commentNumber, setCommentNumber] = useState(0)

    const {} = useQuery({
        queryKey: ['comments', post.id],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
            return await response.json();
        }
    })

    const getComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
        const responseJson = await response.json();
        setCommentNumber(responseJson.length);
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="col-md-6">
            <Link to={`/post/${post.id}`} className="card post">
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                    </h5>
                    <p className="card-text">
                        {commentNumber} comentários    
                    </p>
                    <button className="btn btn-primary">
                        Ver post completo
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default Post