import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// // ---- localização - pt-BR -> utilizado para mostrar valor da dívida do aluno em Real
// import { registerLocaleData } from '@angular/common';
// import ptBR from '@angular/common/locales/pt';
// registerLocaleData(ptBR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
