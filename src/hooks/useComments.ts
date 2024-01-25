import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: number;
  body: string;
}

const useComments = (pageSize: number) => {
  const fetchComments = (pageParam = 1) =>
    apiClient
      .get<Comments[]>("/comments", {
        params: {
          _start: (pageParam - 1) * pageSize,
          _limit: pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery({
    queryKey: [pageSize],
    queryFn: ({ pageParam }) => fetchComments(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });
};

export default useComments;
