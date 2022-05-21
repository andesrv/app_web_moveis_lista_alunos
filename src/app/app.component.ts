import { Component } from '@angular/core';

import { alunos } from './lista_alunos'; // Importa lista dos alunos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista_alunos';
  lista_dos_alunos = alunos; // Associa a lista dos alunos a uma variável para que possa ser acessada
}
