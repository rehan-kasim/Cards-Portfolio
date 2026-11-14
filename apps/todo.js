const submit = document.getElementById('submit');
const taskname = document.getElementById('task-name');
const taskcounter = document.getElementById('task-counter');
const todolist = document.getElementById('todo-list');

let taskcount = 0;

submit.onclick = function () {
    taskcount += 1;
    taskcounter.textContent = `${taskcount} Tasks left`;

    const taskDiv = document.createElement('div');
    taskDiv.classList = `flex items-center justify-between gap-4 bg-white dark:bg-neutral-900 border border-orange-200 dark:border-neutral-800 rounded-2xl p-5`;

    const taskText = document.createElement('p');
    taskText.textContent = taskname.value;
    taskText.classList = `flex-1 text-2xl wrap-break-word font-display`
    
    const completebuton = document.createElement('button');
    completebuton.textContent = "✓";
    completebuton.classList = 'text-3xl text-white bg-green-800 dark:bg-green-950 hover:bg-green-700 cursor-pointer py-2 px-4 rounded-2xl dark:hover:bg-green-800'

    const deletebutton = document.createElement('button');
    deletebutton.textContent = "×";
    deletebutton.classList = 'text-3xl cursor-pointer text-white bg-red-800 dark:bg-red-950 hover:bg-red-700 dark:hover:bg-red-800 py-2 px-4 rounded-2xl';

    deletebutton.onclick = function () {
        taskDiv.remove();
    };
    
    completebuton.onclick = function () {
        taskText.classList.add(`line-through`)
    }

    taskDiv.append(taskText,completebuton,deletebutton);
    todolist.appendChild(taskDiv);
}