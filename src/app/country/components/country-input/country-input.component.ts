import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{
  ngOnInit(): void {
    //observando el debouncer
    this.debouncer
      //conexion para tranformar la salida del subscribe
      .pipe(debounceTime(500))//por cada 500 mls se ejecuta el observable
      .subscribe(valor => {
        this.onDeBouns.emit(valor);
      });
  }
  // se empieza por on para referenciar a que es un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDeBouns: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string = "";

  //es como un observable especial que se ejecuta cuando deja de escribir
  debouncer:Subject<string> = new Subject();

  termino: string = "";// lo que introduce en la caja de busqueda
  search(){
    this.onEnter.emit(this.termino);
  }

  pressedKey(event:any){
    // mandamos el evento
    const valor = event.target.value;
    // le paso el termino
    this.debouncer.next(valor);
    
  }

}
