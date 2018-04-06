import { LessonComponent } from './../../../pages/lesson/lesson.component';
import { Pipe, PipeTransform, Inject, forwardRef } from '@angular/core';

@Pipe({
  name: 'lessonSearch'
})
export class LessonSearchPipe implements PipeTransform {

  constructor(@Inject(forwardRef(() => LessonComponent)) private comp: LessonComponent) {}

  transform(value: any, args?: any): any {

    if (value.length === 0 || args === undefined || args.length < 3) {
      return value;
    }

    let filter = args.toLocaleLowerCase();

    let filtered = value.filter(
      v => ( v.aula_descricao.toLocaleLowerCase().includes(filter) ||
        v.modulo_descricao.toLocaleLowerCase().includes(filter) ||
        v.disciplina_descricao.toLocaleLowerCase().includes(filter) ||
        v.areaconhecimento_descricao.toLocaleLowerCase().includes(filter) )
    );
    console.log(filtered.length === 0);
    this.comp.isEmpty = (filtered.length === 0);

    return filtered;
  }
}
