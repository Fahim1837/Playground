import APIClient from "./api-client";

export interface Todos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

export default new APIClient <Todos>('/todos')
 