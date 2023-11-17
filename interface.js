// módulo da lista de tarefas 
const todolist = require("./todolist")
// módulo para entrada do usuário 
const prompt = require("prompt-sync")()

// cria a lista de tarefas 
let lista_tarefas = new todolist.ListaTarefas()
// variável para permitir a interpretação do input do usuário
let escolha

// intro para o programa - é executada antes de qualquer outra função assim que ele é executado
function intro(){
    console.log("===============================")
    console.log("Bem vindo ao NodeToDoList!")
    console.log("===============================")
    console.log()
    main()
}

// função principal da interface - é "cabeça" para todas as outras 
function main(){
    while (true) {
        // pequeno menu para o usuário
        console.log("1. Adicionar uma tarefa")
        console.log("2. Remover uma tarefa")
        console.log("3. Marcar uma tarefa como concluída")
        console.log("4. Ver as tarefas pendentes")
        console.log("5. Ver as tarefas concluídas")
        console.log()
        escolha = prompt("> ")
    
        switch (escolha) {
            case "1":
                add_tarefa_lista()
                break;

            case "2": 
                rm_tarefa_lista()
                break;

            case "3":
                marcar_concluida_lista()
                break;

            case "4": 
                ver_pendentes_lista()
                break;
    
            case "5":
                ver_concluidas_lista()
                break; 

            default:
                break;
        }  
    }
}

function add_tarefa_lista(){

}

function rm_tarefa_lista(){

}

function marcar_concluida_lista(){

}

function ver_pendentes_lista(){

}

function ver_concluidas_lista(){ 
    
}

intro()