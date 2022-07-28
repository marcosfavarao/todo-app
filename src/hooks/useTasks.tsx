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
  id: string;
  title: string;
  createdAt: string;
}

interface TasklistContext {
  tasklist: Array<TasklistState>;
  createNewTask: (task: TasklistCreation) => Promise<void>;
  updateTask: (task: TasklistUpdate) => Promise<void>;
  deleteTask: (task: TasklistDelete) => Promise<void>;
}

type TasklistCreation = Omit<TasklistState, 'id' | 'createdAt'>;
type TasklistUpdate = Omit<TasklistState, 'createdAt'>;
type TasklistDelete = Omit<TasklistState, 'title' | 'createdAt'>;

const DEFAULT_VALUE = {
  tasklist: [],
  createNewTask: () =>
    new Promise<void>(() => {
      Promise.resolve();
    }),
  updateTask: () =>
    new Promise<void>(() => {
      Promise.resolve();
    }),
  deleteTask: () =>
    new Promise<void>(() => {
      Promise.resolve();
    }),
};

const TasklistContext = createContext<TasklistContext>(DEFAULT_VALUE);

export const TasklistProvider = ({ children }: TasklistProviderProps) => {
  const [tasklist, setTasklist] = useState<TasklistState[]>([]);

  const createNewTask = useCallback(async (task: TasklistCreation) => {
    const response = await api.post('/tasklist', {
      ...task,
      createdAt: new Date().toString(),
    });
    const todo = response.data.tasklist;
    setTasklist((currentTasks) => [...currentTasks, todo]);
  }, []);

  const updateTask = useCallback(async (task: TasklistUpdate) => {
    await api.patch(`/tasklist/${task.id}`, {
      ...task,
      createdAt: new Date().toString(),
    });

    setTasklist((currentTasks) => {
      const taskList = currentTasks.map((taskReference) => {
        if (taskReference.id === task.id) {
          return {
            ...taskReference,
            title: task.title,
            createdAt: new Date().toString(),
          };
        }
        return taskReference;
      });
      return taskList;
    });
  }, []);

  const deleteTask = useCallback(async (task: TasklistDelete) => {
    await api.delete(`/tasklist/${task.id}`);
    setTasklist((_task) => _task.filter((current) => current.id !== task.id));
  }, []);

  useEffect(() => {
    api
      .get('/tasklist')
      .then((response) => setTasklist(response.data?.tasklists));
  }, []);

  const provider = useMemo(
    () => ({
      tasklist,
      createNewTask,
      updateTask,
      deleteTask,
    }),
    [tasklist, createNewTask, updateTask, deleteTask],
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
