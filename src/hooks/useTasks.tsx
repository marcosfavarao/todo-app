import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { v4 as uuid } from 'uuid';
import { api } from '../services';

interface TasklistProviderProps {
  children: ReactNode;
}

interface TasklistState {
  id: string;
  title: string;
  createdAt: Date;
}

interface TasklistContext {
  tasklist: Array<TasklistState>;
  createNewTask: (task: TasklistCreation) => void;
}

type TasklistCreation = Omit<TasklistState, 'id' | 'createdAt'>;

const DEFAULT_VALUE = {
  tasklist: [],
  createNewTask: () => ({}),
  // createNewTask: () => new Promise<void>({}),
};

const TasklistContext = createContext<TasklistContext>(DEFAULT_VALUE);

export const TasklistProvider = ({ children }: TasklistProviderProps) => {
  const [tasklist, setTasklist] = useState<TasklistState[]>([]);

  const createNewTask = useCallback(
    async (task: TasklistCreation) => {
      const response = await api.post('/tasklist', {
        ...task,
        id: uuid(),
        createdAt: new Date(),
      });
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

  useEffect(() => {
    console.log(tasklist);
  }, [tasklist]);

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
