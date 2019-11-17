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
    todos: types.array(Todo),
    filter: types.enumeration('Filter', ['all', 'complete', 'uncomplete'])
}).views(self => {
    return {
        getTodos() {
            switch(self.filter) {
                case 'complete':
                    return self.todos.filter(t => t.done)
                case 'uncomplete':
                    return self.todos.filter(t => !t.done)
                default:
                    return self.todos
            }
        },
        get completedTodos() {
            return self.todos.filter(t => t.done).length
        },
        get uncompletedTodos() {
            return self.todos.filter(t => !t.done).length
        }
    }
}).actions(self => ({
    addTodo(title: string) {
        self.todos.push({
            id: self.todos.length,
            title: title
        })
    },
    filterBy(filter: string) {
        self.filter = filter 
    }
}));

const store = Store.create({
    todos: [
        {
            id: 0,
            title: 'buy milk'
        }
    ],
    filter: 'all'
});

export { store, Store, Todo };