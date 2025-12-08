import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  novaTarefa: string= '';
  tarefas: string[] = [];

  adicionarTarefa(){
    const valor = this.novaTarefa.trim();
    if(valor!==''){
      this.tarefas.push(valor);
      this.novaTarefa= '';
    }
  }

  removerTarefa(index: number){
    if(index >=0 && index <this.tarefas.length){
      this.tarefas.splice(index,1)
    }
  }
}
