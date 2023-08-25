const tasks = [
    {id: 1, nome: 'Estudar', completed: false},
    {id: 2, nome: 'Dormir', completed: false}
    ]

const getTasks = () => tasks;

const addTasks = (taskName) => {
    const novaTarefa = [
        tasks.id = tasks.lenght + 1,
        tasks.nome = taskName,
        tasks.completed = false,
    ]

    return tasks.push(novaTarefa)
  
}

console.log(novaTask)

const removeTask = (taskId) => {
    const index = tasks.findIndex((task)=> task.id === task.id ) //busca indice e cria função de comparação com o parâmetro buscado. Se localizado, guarda a posição do elemento
        taskId = tasks.id
        tasks.splice(index, 1) //se localizado remove linha
        //tasks.filter(tarefa => tarefa.id != taskId ).map(RemoveLinha => RemoveLinha.tasks)
        
    }   

const updateTask = (taskId, props) => {
    const index = tasks.findIndex((task) => task.id === taskId) //identifica a linha 
    tasks[index].nome = props.nome
    tasks[index].completed = props.completed
}

export {getTasks, addTasks, removeTask, updateTask}