import { Injectable } from '@angular/core';

@Injectable()
export class Lesson {

  constructor( public aula_id: Number = 0,
    public aula_descricao: String = '',
    public modulo_id: Number = 0,
    public modulo_descricao: String = '',
    public disciplina_id: Number = 0,
    public disciplina_descricao: String = '',
    public areaconhecimento_id: Number = 0,
    public areaconhecimento_descricao: String = '',
    public aula_assistida: Boolean = false) {}
}
