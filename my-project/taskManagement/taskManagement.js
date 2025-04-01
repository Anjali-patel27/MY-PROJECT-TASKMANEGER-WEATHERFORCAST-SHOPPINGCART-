
let tasks = [
    { title: "Finish Homework", status: "Pending", priority: 3 },
    { title: "Attend Meeting", status: "Completed", priority: 4 },
    { title: "Buy Groceries", status: "Pending", priority: 2 }
];

const addTask = (title, status, priority) => {
    tasks.push({ title, status, priority });
    console.log(`Task "${title}" added.`);
};

const filterByStatus = (status) => {
    return tasks.filter(task => task.status === status);
};

const findHighPriorityTask = () => {
    return tasks.find(task => task.priority === 5);
};

const mapTaskTitlesWithStatus = () => {
    return tasks.map(task => `Task: ${task.title}, Status: ${task.status}`);
};

const displayTasks = () => {
    tasks.forEach(task => {
        console.log(`Task: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`);
    });
};

export { addTask, filterByStatus, findHighPriorityTask, mapTaskTitlesWithStatus, displayTasks };
