const submit = document.getElementById('submit');
const taskname = document.getElementById('task-name');
const taskcounter = document.getElementById('task-counter');
const todolist = document.getElementById('todo-list');
const allButton = document.getElementById('all');
const pendingbutton = document.getElementById('pending');
const completedbutton = document.getElementById('completedbutton');

let taskcount = 0;

function updateCounter() {
    const pendingtasks = document.getElementsByClassName('pending');
    taskcount = pendingtasks.length;
    taskcounter.textContent = `${taskcount} Tasks left`;
}

allButton.onclick = function () {
    const alltasks = document.getElementsByClassName('all');
    for (let task of alltasks) {
        task.classList.remove('hidden');
    }
};

pendingbutton.onclick = function () {
    const completedtasks = document.getElementsByClassName('completed');
    const pendingtasks = document.getElementsByClassName('pending');
    for (let task of completedtasks) {
        task.classList.add('hidden');
    }
    for (let task of pendingtasks) {
        task.classList.remove('hidden');
    }
};

completedbutton.onclick = function () {
    const completedtasks = document.getElementsByClassName('completed');
    const pendingtasks = document.getElementsByClassName('pending');
    for (let task of pendingtasks) {
        task.classList.add('hidden');
    }
    for (let task of completedtasks) {
        task.classList.remove('hidden');
    }
};

submit.onclick = function (event) {
    event.preventDefault();
    if (taskname.value.trim() === '') return;
    const taskDiv = document.createElement('div');
    taskDiv.className = 'all pending flex items-center justify-between gap-4 bg-white dark:bg-neutral-900 border border-orange-200 dark:border-neutral-800 rounded-2xl p-5';

    const taskText = document.createElement('p');
    taskText.textContent = taskname.value;
    taskText.className = 'flex-1 text-2xl break-words font-display';

    const completebuton = document.createElement('button');
    completebuton.textContent = '✓';
    completebuton.className = 'text-3xl text-white bg-green-800 dark:bg-green-950 hover:bg-green-700 cursor-pointer py-2 px-4 rounded-2xl dark:hover:bg-green-800';

    const deletebutton = document.createElement('button');
    deletebutton.textContent = '×';
    deletebutton.className = 'text-3xl cursor-pointer text-white bg-red-800 dark:bg-red-950 hover:bg-red-700 dark:hover:bg-red-800 py-2 px-4 rounded-2xl';

    completebuton.onclick = function () {
        taskText.classList.toggle('line-through');
        taskDiv.classList.toggle('completed');
        taskDiv.classList.toggle('pending');
        updateCounter();

    };
    deletebutton.onclick = function () {
        taskDiv.remove();
        updateCounter();
    };
   
    taskDiv.append(taskText, completebuton, deletebutton);
    todolist.appendChild(taskDiv);
    taskname.value = '';
    updateCounter();
};