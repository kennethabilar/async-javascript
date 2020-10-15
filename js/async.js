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

function addTodo(todo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            todos.push(todo);

            let error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error');
            }
        }, 2000);
    })
}

async function init() {
    await addTodo({ id: 3, title: 'Learn Spring Framework' });
    await getTodos();
}

init();

async function getUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();

    console.log(data);
}

getUsers();
