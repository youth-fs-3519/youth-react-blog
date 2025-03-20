function Post({ post }) {
    console.log(post);
    // fazer request para
    // jsonplaceholder.typicode.com/posts/1/comments
    // guardar o resultado num state
    // mostrar a quantidade de comentários

    return (
        <h1>
            {post.title}
        </h1>
    )
}

export default Post