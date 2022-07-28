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
  isCompleted: boolean;
  createdAt: string;
}

interface TasklistContext {
  tasklist: Array<TasklistState>;
  loadingRequisition: boolean;
  assignTask: (task: TasklistCreation) => Promise<void>;
  updateTaskTitle: (task: TasklistTitleUpdate) => Promise<void>;
  updateTaskStatus: (task: TasklistStatusUpdate) => Promise<void>;
  deleteTask: (task: TasklistDelete) => Promise<void>;
}

type TasklistCreation = Omit<TasklistState, 'id' | 'isCompleted' | 'createdAt'>;
type TasklistTitleUpdate = Omit<TasklistState, 'isCompleted' | 'createdAt'>;
type TasklistStatusUpdate = Omit<TasklistState, 'title' | 'createdAt'>;
type TasklistDelete = Omit<
  TasklistState,
  'title' | 'isCompleted' | 'createdAt'
>;

const DEFAULT_VALUE = {
  tasklist: [],
  loadingRequisition: false,
  assignTask: () =>
    new Promise<void>(() => {
      Promise.resolve();
    }),
  updateTaskTitle: () =>
    new Promise<void>(() => {
      Promise.resolve();
    }),
  updateTaskStatus: () =>
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
  const [loadingRequisition, setLoadingRequisition] = useState(false);

  const assignTask = useCallback(async (task: TasklistCreation) => {
    setLoadingRequisition(true);
    const response = await api.post('/tasklist', {
      ...task,
      createdAt: new Date().toString(),
    });
    const todo = response.data.tasklist;
    setTasklist((currentTasks) => [...currentTasks, todo]);
  }, []);

  const updateTaskTitle = useCallback(async (task: TasklistTitleUpdate) => {
    setLoadingRequisition(true);
    await api.patch(`/tasklist/title/${task.id}`, {
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

  const updateTaskStatus = useCallback(async (task: TasklistStatusUpdate) => {
    // setLoadingRequisition(true);
    await api.patch(`/tasklist/status/${task.id}`, {
      ...task,
      createdAt: new Date().toString(),
    });

    setTasklist((currentTasks) => {
      const taskList = currentTasks.map((taskReference) => {
        if (taskReference.id === task.id) {
          return {
            ...taskReference,
            isCompleted: task.isCompleted,
            createdAt: new Date().toString(),
          };
        }
        return taskReference;
      });
      return taskList;
    });
  }, []);

  const deleteTask = useCallback(async (task: TasklistDelete) => {
    setLoadingRequisition(true);
    await api.delete(`/tasklist/${task.id}`);
    setTasklist((_task) => _task.filter((current) => current.id !== task.id));
  }, []);

  useEffect(() => setLoadingRequisition(false), [tasklist]);

  // useEffect(() => console.log(tasklist), [tasklist]); // ! Delete

  useEffect(() => {
    api
      .get('/tasklist')
      .then((response) => setTasklist(response.data?.tasklists));
  }, []);

  const provider = useMemo(
    () => ({
      tasklist,
      loadingRequisition,
      assignTask,
      updateTaskTitle,
      updateTaskStatus,
      deleteTask,
    }),
    [
      tasklist,
      loadingRequisition,
      assignTask,
      updateTaskTitle,
      updateTaskStatus,
      deleteTask,
    ],
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
