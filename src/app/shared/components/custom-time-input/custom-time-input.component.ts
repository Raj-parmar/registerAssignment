import { Component, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild, OnInit } from '@angular/core';
import {FocusMonitor} from '@angular/cdk/a11y';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, FormControl, UntypedFormGroup, NgControl, Validators} from '@angular/forms';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';

export class Time {
  constructor(
    public hour: string,
    public minute: string,
    public second: string
  ) {}
}

@Component({
  selector: 'app-custom-time-input',
  templateUrl: './custom-time-input.component.html',
  styleUrls: ['./custom-time-input.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CustomTimeInputComponent }],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  }
})

export class CustomTimeInputComponent implements ControlValueAccessor, MatFormFieldControl<Time>, OnDestroy {

    static nextId = 0;
    @ViewChild('hour') hourInput: HTMLInputElement;
    @ViewChild('minute') minuteInput: HTMLInputElement;
    @ViewChild('second') secondInput: HTMLInputElement;
    parts: UntypedFormGroup;
    stateChanges = new Subject<void>();
    focused = false;
    touched = false;
    controlType = 'app-custom-time-input';
    id = `app-custom-time-input-${CustomTimeInputComponent.nextId++}`;
    onChange = (_: any) => {};
    onTouched = () => {};
    get empty() {
      const {
        value: { hour, minute, second }
      } = this.parts;
      return !hour && !minute && !second;
    }

    get shouldLabelFloat() {
      return this.focused || !this.empty;
    }

    @Input('aria-describedby') userAriaDescribedBy: string;

    @Input()
    get placeholder(): string {
      return this._placeholder;
    }
    set placeholder(value: string) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    private _placeholder: string;

    @Input()
    get required(): boolean {
      return this._required;
    }
    set required(value: boolean) {
      this._required = coerceBooleanProperty(value);
      this.stateChanges.next();
    }
    private _required = false;

    @Input()
    get disabled(): boolean {
      return this._disabled;
    }
    set disabled(value: boolean) {
      this._disabled = coerceBooleanProperty(value);
      this._disabled ? this.parts.disable() : this.parts.enable();
      this.stateChanges.next();
    }
    private _disabled = false;

    @Input()
    get value(): Time | null {
      if (this.parts.valid) {
        const {
          value: { hour, minute, second }
        } = this.parts;
        return new Time(hour, minute, second);
      }
      return null;
    }
    set value(tel: Time | null) {
      const { hour, minute, second } = tel || new Time('00', '00', '00');
      this.parts.setValue({ hour, minute, second });
      this.stateChanges.next();
    }
    get errorState(): boolean {
      return this.parts.invalid && this.touched;
    }
    constructor(
      formBuilder: UntypedFormBuilder,
      private _focusMonitor: FocusMonitor,
      private _elementRef: ElementRef<HTMLElement>,
      @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
      @Optional() @Self() public ngControl: NgControl) {
      this.parts = formBuilder.group({
        hour: [
          null,
          [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
        ],
        minute: [
          null,
          [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
        ],
        second: [
          null,
          [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
        ]
      });

      if (this.ngControl != null) {
        this.ngControl.valueAccessor = this;
      }
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
      this.stateChanges.complete();
      this._focusMonitor.stopMonitoring(this._elementRef);
    }

    onFocusIn(event: FocusEvent) {
      if (!this.focused) {
        this.focused = true;
        this.stateChanges.next();
      }
    }

    onFocusOut(event: FocusEvent) {
      if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
        this.touched = true;
        this.focused = false;
        this.onTouched();
        this.stateChanges.next();
      }
    }

    autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
      if (!control.errors && nextElement) {
        this._focusMonitor.focusVia(nextElement, 'program');
      }
    }

    autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
      if (control.value.length < 1) {
        this._focusMonitor.focusVia(prevElement, 'program');
      }
    }

    setDescribedByIds(ids: string[]) {
      const controlElement = this._elementRef.nativeElement
        .querySelector('.app-custom-time-input')!;
        if (controlElement){
          controlElement.setAttribute('aria-describedby', ids.join(' '));
        }
    }

    onContainerClick() {
      // if (this.parts.controls.second.valid) {
      //   this._focusMonitor.focusVia(this.secondInput, 'program');
      // } else if (this.parts.controls.minute.valid) {
      //   this._focusMonitor.focusVia(this.secondInput, 'program');
      // } else if (this.parts.controls.hour.valid) {
      //   this._focusMonitor.focusVia(this.minuteInput, 'program');
      // } else {
      //   this._focusMonitor.focusVia(this.hourInput, 'program');
      // }
    }

    writeValue(tel: Time | null): void {
      this.value = tel;
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
      this.disabled = isDisabled;
    }

    _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
      this.autoFocusNext(control, nextElement);
      this.onChange(this.value);
    }

    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
}
