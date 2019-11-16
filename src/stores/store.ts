import { types } from 'mobx-state-tree'

const Todo = types.model('Todo', {
    id: types.number,
    title: types.string,
    done: false
}).actions(self => ({
    complete() {
        self.done = true
    }
}));

const Store = types.model('Store', {
    todos: types.array(Todo)
}).actions(self => ({
    addTodo(title: string) {
        self.todos.push({
            id: self.todos.length,
            title: title
        })
    }
}));

const store = Store.create({
    todos: [
        {
            id: 0,
            title: 'buy milk'
        }
    ]
});

export { store, Store, Todo };