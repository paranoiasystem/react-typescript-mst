import { Store, Todo } from '../../stores/store';

export interface InjectProps {
    store: typeof Store.Type;
}
  
export interface AppProps {
    title: string;
}

export interface TodoProps {
    todo: typeof Todo.Type;
}