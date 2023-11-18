// módulo da lista de tarefas 
const todolist = require("./todolist")
// módulo para entrada do usuário 
const prompt = require("prompt-sync")()

// cria a lista de tarefas 
let lista_tarefas = new todolist.ListaTarefas()

let escolha, desc, prazo, freq, data_inicio, prioridade, etiquetas, id

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
        console.log("6. Sair")
        console.log()
        escolha = prompt("> ")
        console.log()
    
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
        if (escolha == "6"){
            break  
        }
    }
}

function add_tarefa_lista(){
    console.log()
    console.log("Qual o tipo de tarefa a ser criada?")
    console.log()
    console.log("1. Padrão")
    console.log("2. Repetitiva")
    console.log("3. Com prioridade")
    console.log("4. Com etiquetas")
    console.log() 
    escolha = prompt("> ")
    console.log()

    switch (escolha) {
        case "1":
            desc = prompt("Digite o texto da tarefa: ")
            prazo = prompt("Digite o prazo da tarefa: ")
    
            tarefa = new todolist.TarefaPadrao(desc, prazo)
            lista_tarefas.add_tarefa(tarefa)
            console.log()
            break;

        case "2":
            desc = prompt("Digite o texto da tarefa: ")
            prazo = prompt("Digite o prazo da tarefa: ")
            freq = prompt("Digite a frequência da tarefa (diária, semanal, ...): ")
            data_inicio = prompt("Digite a data de início dessa tarefa: ")

            tarefa = new todolist.TarefaRepetitiva(desc, prazo, freq, data_inicio)
            lista_tarefas.add_tarefa(tarefa)
            console.log()
            break; 
    
        case "3": 
            desc = prompt("Digite o texto da tarefa: ")
            prazo = prompt("Digite o prazo da tarefa: ")
            prioridade = prompt("Digite a prioridade da tarefa (baixa, média, alta, ...): ")

            tarefa = new todolist.TarefaPrioritaria(desc, prazo, prioridade)
            lista_tarefas.add_tarefa(tarefa)
            console.log()
            break; 

        case "4": 
            desc = prompt("Digite o texto da tarefa: ")
            prazo = prompt("Digite o prazo da tarefa: ")
            etiquetas = prompt("Digite suas etiquetas separadas por espaço: ")
            etiquetas = etiquetas.split(" ")

            tarefa = new todolist.TarefaComEtiqueta(desc, prazo, etiquetas)
            lista_tarefas.add_tarefa(tarefa)
            console.log()
            break;

        default:
            break;
    }

}

function rm_tarefa_lista(){
    console.log()
    id = Number(prompt("Digite o ID da tarefa a ser removida: "))
    lista_tarefas.rm_tarefa(id)
    console.log()
}

function marcar_concluida_lista(){
    console.log()
    id = Number(prompt("Digite o ID da tarefa para marcá-la como concluída: "))
    lista_tarefas.marcar_concluida(id)
    console.log()

}

function ver_pendentes_lista(){
    console.log()
    lista_tarefas.ver_tarefas(false)
    console.log()

}

function ver_concluidas_lista(){ 
    console.log()
    lista_tarefas.ver_tarefas(true)
    console.log()
    
}

intro()