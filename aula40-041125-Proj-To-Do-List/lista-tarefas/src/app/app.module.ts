import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component'; // 1. Tem que ter esse import

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent // 2. Tem que estar listado aqui!
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }