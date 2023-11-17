// representa uma lista de tarefas qualquer
class ListaTarefas {
    // cria uma nova lista de tarefas
    constructor(nome_lista){
        // nome da lista 
        this.nome_lista = nome_lista
        // array para armazenar as tarefas criadas
        this.tarefas = []

    }

    // adiciona uma tarefa à lista
    add_tarefa(tarefa){
        // atribui um identificador único à tarefa com base no tamanho da lista
        tarefa.id = this.tarefas.length
        // adiciona a tarefa no array interno da lista
        this.tarefas.push(tarefa)
    }

    // remove uma tarefa da lista 
    rm_tarefa(id){
        this.tarefas.forEach(element => {
            if (element.id == id){
                this.tarefas.pop(element)
            }
        });
    }

    // marca uma tarefa como concluída 
    marcar_concluida(id){
        this.tarefas.forEach(element => {
            if (element.id == id){
                element.concluida = true
            }
        });
    }

    // imprime na tela as tarefas pendetes ou concluídas de acordo com o parâmetro fornecido 
    // false = ver pendentes
    // true = ver concluídas 
    ver_tarefas(booleano){
        this.tarefas.forEach(element => {
            if (element.concluida == booleano && element.tipo == "padrao"){
                console.log(`${element.id}  ${element.desc} ${element.prazo}`)
            }
            if (element.concluida == booleano && element.tipo == "repetitiva"){
                console.log(`${element.id}  ${element.desc} ${element.freq} ${element.data_inicio}  ${element.prazo}`)
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

// representa uma tarefa padrão - serve de superclasse para todos os outros tipos de tarefas
class TarefaPadrao { 
    constructor(desc, prazo){
        this.id = null
        this.desc = desc 
        this.prazo = prazo
        this.tipo = "padrao"
    }

}

// representa uma tarefa que deve ser feita regulamente
class TarefaRepetitiva extends TarefaPadrao {
    constructor(desc, prazo, freq, data_inicio){
        super(desc, prazo)
        this.freq = freq 
        this.data_inicio = data_inicio
        this.tipo = "repetitiva"
    }

}

// representa uma tarefa que possui algum nivel de prioridade associada a ela
class TarefaPrioritaria extends TarefaPadrao { 
    constructor(desc, prazo, prioridade){
        super(desc, prazo)
        this.prioridade = prioridade
        this.tipo = "prioritaria"
    }

}

class TarefaComEtiqueta extends TarefaPadrao { 
    constructor(desc, prazo, etiquetas){
        super(desc, prazo)
        this.etiquetas = etiquetas
        this.tipo = "etiqueta"
    }

}