import React from "react";
import useComments from "../hooks/useComments";

function CommentList() {
  const pageSize = 50;
  const {
    data: comments,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useComments(pageSize);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`${error.name}: ${error.message}`}</p>;

  return (
    <>
      <ul className="list-group mt-4">
        {comments?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((item) => (
              <li className="list-group-item" key={item.id}>
                {item.email}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 mx-3"
        onClick={() => fetchNextPage()}
        hidden={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
}

export default CommentList;
