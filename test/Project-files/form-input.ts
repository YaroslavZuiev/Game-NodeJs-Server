import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ValidationErrors } from '@angular/forms';
import { InputTypesEnum } from '@models/enums/input-types-enum';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements ControlValueAccessor, OnInit {
  @Input() public label = '';
  @Input() public imgSrc!: string;
  @Input() public placeholder = '';
  @Input() public type: InputTypesEnum = InputTypesEnum.Text;

  @Input() public isInvalid: boolean;
  @Input() public showPasswordIcon = false;

  @Input() public errorsMessages: ValidationErrors;

  public disabled = false;

  public get value(): string {
    return this.controlValue;
  }

  public set value(value: string) {
    if (value !== this.controlValue) {
      this.controlValue = value;
      this.onChange(value);
    }
  }

  public get errorKeys(): string[] {
    return Object.keys(this.control?.errors || {});
  }

  public control: FormControl;
  public onTouch: () => void;
  private onChange: (val: string) => void;

  private controlValue = '';
  private readonly baseUrl = 'assets/images';

  constructor(public ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    this.imgSrc = `${this.baseUrl}/eye.svg`;
    this.control = this.ngControl?.control as FormControl;
  }

  public changeInputType(): void {
    this.type = this.type === InputTypesEnum.Password ? InputTypesEnum.Text : InputTypesEnum.Password;
    this.imgSrc = this.type === InputTypesEnum.Text ? `${this.baseUrl}/hide.svg` : `${this.baseUrl}/eye.svg`;
  }

  public writeValue(value: string): void {
    this.controlValue = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
