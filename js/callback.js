let todos = [
    {
        id: 1,
        title: 'Learn Angular Framework'
    },
    {
        id: 2,
        title: 'Learn Django Framework'
    },
];

function getTodos() {
    setTimeout(() => {
        let output = '';

        todos.forEach(todo => {
            output += `<div>${todo.id} - ${todo.title}</div>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

// function addTodo(todo) {
//     setTimeout(() => {
//         todos.push(todo);
//     }, 2000);
// }

// addTodo({ id: 3, title: 'Learn Spring Framework'});
// getTodos();

function addTodo(todo, callback) {
    setTimeout(() => {
        todos.push(todo);
        callback();
    }, 2000);
}

addTodo({ id: 3, title: 'Learn Spring Framework' }, getTodos);
