import { useState } from "react";
import usePosts from "../hooks/usePosts";

function PostList() {
  const [page, setPage] = useState<number>(0);
  const pageSize = 10;
  const { data: posts, error, isLoading } = usePosts(page, pageSize);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`${error.name}: ${error.message}`}</p>;
  return (
    <>
      <ul className="list-group mt-4 ms-3 w-75">
        {posts?.map((item) => (
          <li className="list-group-item" key={item.id}>
            Username: {item.userId}- {item.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page == 0}
        className="btn btn-primary my-3 mx-3"
        onClick={() => setPage(page - pageSize)}
      >
        Previous
      </button>
      <button
        disabled={page == 100 - pageSize}
        className="btn btn-primary"
        onClick={() => setPage(page + pageSize)}
      >
        Next
      </button>
    </>
  );
}

export default PostList;
