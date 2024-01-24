import { useQuery } from "@tanstack/react-query"
import apiClient from '../services/api-services'

interface Posts {
    userID: number
    id: number
    title: string
    body: string
}

const usePosts = () => {
    const fetchPosts = () => 
    apiClient.get <Posts[]> ('/posts')
        .then((res) => res.data)

    return useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })
}

export default usePosts