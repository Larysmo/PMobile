import { getTasks, addTasks, removeTask, updateTask} from "./tasks";

const tarefas = getTasks();

getTasks().forEach(element => {
    const {id, nome, completed} = element;
    console.log (id, nome, completed);
});

addTasks("estudar react");

removeTask(2);






