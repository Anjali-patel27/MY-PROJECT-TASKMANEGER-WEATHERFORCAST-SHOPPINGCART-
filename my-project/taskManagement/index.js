import { addTask, filterByStatus, findHighPriorityTask, mapTaskTitlesWithStatus, displayTasks } from './taskManagement.js';

addTask("Attend Seminar", "Pending", 4);
console.log(filterByStatus("Pending"));
console.log(findHighPriorityTask());
console.log(mapTaskTitlesWithStatus());
displayTasks();
