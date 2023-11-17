// representa uma lista de tarefas qualquer
class ListaTarefas {
    constructor(nome_lista){
        this.nome_lista = nome_lista
        this.tarefas = []

    }

    // adiciona uma tarefa à lista
    add_tarefa(tarefa){
        // atribui um identificador único à tarefa com base no tamanho da lista
        tarefa.id = this.tarefas.length
        // adiciona a tarefa no array interno da lista
        this.tarefas.push(tarefa)
    }

    // marca uma tarefa como concluída 
    marcar_concluida(id){
        this.tarefas.forEach(element => {
            if (element.id == id){
                element.concluida = true
            }
        });
    }

    // remove uma tarefa da lista 
    rm_tarefa(id){
        this.tarefas.forEach(element => {
            if (element.id == id){
                this.tarefas.pop(element)
            }
        });
    }

    // imprime na tela as tarefas pendentes 
    ver_tarefas_pendentes(){
        this.percorrer_tarefas(false)
    }

    // imprime na tela as tarefas concluídas 
    ver_tarefas_concluidas(){
        this.percorrer_tarefas(true)
    }

    percorrer_tarefas(booleano){
        this.tarefas.forEach(element => {
            if (element.concluida == booleano && element.tipo == "padrao"){
                console.log(`${element.id}  ${element.desc} ${element.prazo}`)
            }
            if (element.concluida == booleano && element.tipo == "repetitiva"){
                console.log(`${element.id}  ${element.desc} ${element.freq} ${element.data_inicio}`)
            }
            if (element.concluida == booleano && element.tipo == "prioritaria"){
                console.log(`${element.id}  ${element.desc} ${element.prazo} ${element.prioridade}`)
            }
            if (element.concluida == booleano && element.tipo == "etiqueta"){
                console.log(`${element.id}  ${element.desc} ${element.prazo} ${element.etiquetas}`)
            }
        });
    }

}

class TarefaPadrao { 
    constructor(){

    }

}

class TarefaRepetitiva {
    constructor(){

    }

}

class TarefaPrioritaria { 
    constructor(){

    }

}

class TarefaComEtiqueta { 
    constructor(){

    }

}