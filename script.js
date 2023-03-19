var lista = [];
var cont = 0;

function adicionar() {
  var textoNomeTarefa = document.getElementById("textoNomeTarefa");
  var nomeTarefa = textoNomeTarefa.value.trim();
  
  if (nomeTarefa !== "") { 
    var tarefas = document.getElementById("tarefas");
    var novaTarefa = {nome: nomeTarefa, id: cont};
    lista.push(novaTarefa); 
    tarefas.innerHTML += `<li id="${cont}">${nomeTarefa}</li>`;
    cont++;
    textoNomeTarefa.value = "";
  } else {
    window.alert("Digite algo para adicionar."); 
  }
}

function remover() {
    var textoNomeTarefa = document.getElementById("textoNomeTarefaRemover");
    var nomeTarefa = textoNomeTarefa.value.trim();
    
    if (nomeTarefa !== "") { 
      var tarefas = document.getElementById("tarefas");
      var indice = -1; 
      
      
      for (var i = 0; i < lista.length; i++) {
        if (lista[i].nome === nomeTarefa) {
          indice = i;
          break;
        }
      }
      
      if (indice >= 0) { 
        var idTarefa = lista[indice].id;
        lista.splice(indice, 1);
        var tarefaRemover = document.getElementById(idTarefa);
        tarefas.removeChild(tarefaRemover);
        textoNomeTarefa.value = "";
        cont--;
      } else {
        window.alert("Tarefa não encontrada na lista."); 
      }
    } else {
      window.alert("Digite algo para remover."); 
    }
  }
  
