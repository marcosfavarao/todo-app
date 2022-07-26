import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { api } from '../services';

interface TasklistProviderProps {
  children: ReactNode;
}

interface TasklistState {
  id: number;
  title: string;
  createdAt: string;
}

type TaskInput = Omit<TasklistState, 'id' | 'createdAt'>;

interface TasklistContext {
  tasklist: Array<TasklistState>;
  createNewTask: (task: TaskInput) => void;
}

const DEFAULT_VALUE = {
  tasklist: [],
  createNewTask: () => ({}),
  // createNewTask: () => new Promise<void>({}),
};

const TasklistContext = createContext<TasklistContext>(DEFAULT_VALUE);

export const TasklistProvider = ({ children }: TasklistProviderProps) => {
  const [tasklist, setTasklist] = useState<TasklistState[]>([]);

  const createNewTask = useCallback(
    async (task: TaskInput) => {
      const response = await api.post('/tasklist', task);
      const todo = response.data.tasklist;

      setTasklist([...tasklist, todo]);
    },
    [tasklist],
  );

  useEffect(() => {
    api
      .get('/tasklist')
      .then((response) => setTasklist(response.data?.tasklists));
  }, []);

  const provider = useMemo(
    () => ({
      tasklist,
      createNewTask,
    }),
    [tasklist, createNewTask],
  );

  return (
    <TasklistContext.Provider value={provider}>
      {children}
    </TasklistContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasklistContext);

  return context;
};
