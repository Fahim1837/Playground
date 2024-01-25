import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = (page: number, pageSize: number) => {
  
  const apiClient = new APIClient <Posts> ('/posts', { params: {
      _start: page,
      _limit: pageSize,
    }})
  
  return useQuery({
    queryKey: ["posts", page],
    queryFn: apiClient.getAll,
    placeholderData: (prevData) => prevData
  });
};

export default usePosts;
