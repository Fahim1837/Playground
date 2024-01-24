import usePosts from "../hooks/usePosts"

function PostList() {
    

    const {data: posts, error, isLoading} = usePosts()
    return (
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>{`${error.name}: ${error.message}`}</p>}
    <ul className="list-group mt-4">
        {posts?.map((item) => <li className="list-group-item" key={item.id}>{item.title}</li>)}
    </ul>
    </>
  )
}

export default PostList