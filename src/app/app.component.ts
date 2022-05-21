import { Component } from '@angular/core';

import { alunos } from './lista_alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista_alunos';
  lista_dos_alunos = alunos;
}
