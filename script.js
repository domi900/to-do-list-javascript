var lista = []
var cont = 0

function adicionar(){
    var textoNometarefa = window.document.getElementById("textoNomeTarefa")
    if(textoNometarefa.value) {   
        var tarefas = window.document.getElementById("tarefas")
        var textoNometarefa = window.document.getElementById("textoNomeTarefa")
        lista.push(`<li>${textoNometarefa.value}</li>`)
        tarefas.innerHTML += lista[cont]
        cont += 1
    }else{
        window.alert("digite algo")
        }
    }

function remover() {
        var textoNometarefa = window.document.getElementById("textoNomeTarefa"); // pega o elemento input com o ID "textoNomeTarefa"
        if (textoNometarefa.value) { // verifica se o valor do input é vazio
            var tarefas = window.document.getElementById("tarefas"); // pega a lista de tarefas com o ID "tarefas"
            var lista1 = lista.slice(); // cria uma cópia da lista original
            var elemento = `<li>${textoNometarefa.value}</li>`; // cria um novo elemento de lista a partir do valor do input
            var indice = lista1.indexOf(elemento); // verifica o índice do elemento na cópia da lista
            if (indice >= 0) { // verifica se o elemento foi encontrado na cópia da lista
                lista1.splice(indice, 1); // remove o elemento da cópia da lista
                var novatarefas = tarefas.innerHTML.replace(elemento, ""); // remove o elemento da lista de tarefas
                tarefas.innerHTML = novatarefas; // atualiza a lista de tarefas na página
                lista = lista1; // atualiza a lista original
                cont--; // decrementa o contador de tarefas
            } else {
                window.alert("Elemento não encontrado na lista."); // exibe mensagem de erro se o elemento não for encontrado na lista
            }
        } else {
            window.alert("Digite algo para remover."); // exibe mensagem de erro se o input estiver vazio
        }
    }
