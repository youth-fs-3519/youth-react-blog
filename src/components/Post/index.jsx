function Post({ post }) {
    console.log(post);
    // fazer request para
    // jsonplaceholder.typicode.com/posts/1/comments
    // guardar o resultado num state
    // mostrar a quantidade de comentários

    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                    </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Post