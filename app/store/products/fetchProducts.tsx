import axios, { AxiosResponse } from "axios";

interface Todo {
  id: number;
  name: string;
}

interface Client {
  set: any;
}

interface TodoSlice {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  // getTodos: () => Promise<void>;
  fetchTodos: () => Promise<void>;
}

const todoSlice = (set: Client["set"]): TodoSlice => ({
  todos: [],
  loading: false,
  error: null,
  fetchTodos: async () => {
    set(() => ({
      loading: true,
    }));
    try {
      const res: AxiosResponse<Todo[]> = await axios.get(
        "https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?page=1&limit=5"
      );
      const data: Todo[] = res.data;
      set(() => ({
        loading: false,
        todos: data,
        error: null,
      }));
    } catch (error) {
      set(() => ({
        loading: false,
        todos: [],
        error: Error,
      }));
    }
  },
});

export default todoSlice;
