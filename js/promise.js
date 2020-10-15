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

addTodo({ id: 3, title: 'Learn Spring Framework' })
    .then(getTodos)
    .catch(err => console.log(err));

const promise1 = Promise.resolve(1234);
const promise2 = 5678;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Learn React Native'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
    .then(res => console.log(res))
    .catch(err => console.log(err));
