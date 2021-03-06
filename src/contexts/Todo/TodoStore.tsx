import { createContext, Dispatch, useReducer, useContext } from 'react';
import {
  getTodoStorage,
  saveTodoStorage,
  removeTodoStorage,
} from 'utils/localStorage';
import { ITodo } from 'types/ITodo';

type TodosState = ITodo[];
let initState: TodosState = [];
const TodosContext = createContext<TodosState>(initState);
export let nextIdState: number = 0;

type Action =
  | { type: 'CREATE'; createTodo: ITodo }
  | { type: 'REMOVE'; id: number }
  | { type: 'UPDATE'; updateTodo: ITodo }
  | { type: 'LOAD_DATA' }
  | { type: 'SAVE'; saveTodo: TodosState }
  | {
      type: 'FILTER';
      length: number;
      value: string;
      Item: string;
      copiedTodos: TodosState;
    };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | null>(null);

function todosReducer(preState: TodosState, action: Action): TodosState {
  switch (action.type) {
    case 'LOAD_DATA':
      const initialTodos = getTodoStorage() || [];
      if (initialTodos && initialTodos.length >= 1) {
        nextIdState = initialTodos[initialTodos.length - 1].id;
      }
      saveTodoStorage(initialTodos);
      return initialTodos;
    case 'SAVE':
      const newSaveState = action.saveTodo;
      saveTodoStorage(newSaveState);
      return newSaveState;
    case 'CREATE':
      const nextId = nextIdState + 1;
      const newState = preState.concat({ ...action.createTodo, id: nextId });
      saveTodoStorage(newState);
      return newState;
    case 'REMOVE':
      removeTodoStorage(action.id);
      return preState.filter((todo) => todo.id !== action.id);
    case 'UPDATE':
      const index = preState.findIndex(
        (item) => item.id === action.updateTodo.id,
      );
      const newTodoList = [...preState];
      newTodoList.splice(index, 1, action.updateTodo);
      saveTodoStorage(newTodoList);
      return newTodoList;
    case 'FILTER':
      if (action.copiedTodos && action.value !== '') {
        const filterdData = action.copiedTodos.filter(
          (data: any) =>
            String(data[action.Item]).includes(action.value) === true,
        );

        return filterdData;
      } else {
        return action.copiedTodos;
      }

    default:
      throw new Error('Unhandled action');
  }
}

export const increamentNextId = () => {
  nextIdState = nextIdState + 1;
};

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, initState);
  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosContext.Provider value={todos}>{children}</TodosContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosState(): ITodo[] {
  const state = useContext(TodosContext);
  if (!state) throw new Error('TodosProvider not found');
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
}
