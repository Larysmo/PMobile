/*const tasks = []

function getTasks(){
    return tasks
}

function addTasks(taskName){
    return tasks.pop
}*/


const frutas = []
frutas.push("banana")

const pessoa = {id: 1, nome: "Jose"};
pessoa.sexo = 'M';

let cont = 0;

//funções
const soma = (a, b) => a + b;

const App = () => {
    return(
        <View>// equivalente a DIV em HTML
        </View>
    );
}

const Ap = () => <View></View>

//propagação 
frutas.push(...["uva","maça"])//os tres pontos indicam que os elementos devem ser acrescidos um por vez e não em novo array


//desestruturação
 const {id, nome } = pessoa //cria array na variavel 'pessoa' com os valores id e nome

//modulos
export default pessoa;
export {frutas, soma};

import pessoa from 'revisao';

import {frutas} from revisao;