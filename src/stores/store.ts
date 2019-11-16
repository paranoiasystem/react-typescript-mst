import { types } from 'mobx-state-tree'

const Todo = types.model('Todo', {
    title: types.string,
    done: false
}).actions(self => ({
    complete() {
        self.done = true
    }
}));

const Store = types.model('Store', {
    todos: types.array(Todo)
});

const store = Store.create({
    todos: [
        {
            title: 'buy milk'
        }
    ]
});

export { store, Store };