import { useState } from "react";
import usePosts from "../hooks/usePosts";

function PostList() {
    const [userId, setUserId] = useState <number | undefined>() 
    const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`${error.name}: ${error.message}`}</p>;
  return (
    <>
    <select className="form-select mt-4 mx-3 w-50" 
    onChange={(e) => setUserId(parseInt(e.target.value))}
    value={userId}>
        <option value=""></option>
        <option value="1">Username 1</option>
        <option value="2">Username 2</option>
        <option value="3">Username 3</option>
    </select>

    <ul className="list-group mt-4 ms-3 w-75">
    {posts?.map((item) => (
        <li className="list-group-item" key={item.id}>
        {item.userId} {item.title}
        </li>
    ))}
    </ul>
    </>
  );
}

export default PostList;
