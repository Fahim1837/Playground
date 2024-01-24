import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-services";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = (page: number, pageSize: number) => {
  const fetchPosts = () =>
    apiClient
      .get<Posts[]>("/posts", {
        params: {
          _start: page,
          _limit: pageSize,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: ["posts", page],
    queryFn: fetchPosts,
  });
};

export default usePosts;
