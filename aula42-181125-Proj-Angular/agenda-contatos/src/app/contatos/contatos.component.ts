import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

interface Contato{
  nome: string;
  telefone: string;
}
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  novoNome: string = '';
  novoTelefone: string = '';

  contatos: Contato[] = [];

  adicionarContato(){
    const nome = this.novoNome.trim();
    const telefone = this.novoTelefone.trim();

    if(nome === '' || telefone === '') return;
    this.contatos.push({nome, telefone});
    this.novoNome = '';
    this.novoTelefone = '';

  }

  removerContato(index: number){
    this.contatos.splice(index, 1);
  }



  
}
