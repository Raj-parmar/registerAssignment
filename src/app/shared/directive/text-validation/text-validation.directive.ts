import { Directive, Input, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[textValid]'
})
// tslint:disable-next-line: class-name
export class textValidationDirective {
  
  @Output() formControlName:EventEmitter<any> = new EventEmitter()
  @Input('formControl') data = '';
  constructor(private el: ElementRef, private control : NgControl) {}
  @HostListener('keyup') onkeyup(){
      const regex = /^[a-z A-Z À-ÿ]+$/g;
      if (regex.test(this.el.nativeElement.value) !== true){
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^a-z A-Z]/g, '');
        this.formControlName.emit(this.el.nativeElement.value);
        // this.control.valueAccessor.writeValue(this.el.nativeElement.value);
      }
  }
}
