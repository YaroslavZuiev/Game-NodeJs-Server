import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CheckboxEnum } from './checkbox.enum';
import { BehaviorSubject } from 'rxjs';
import { TestService } from '../test.service';
import { DatePipe } from '@angular/common';
import { DateTime } from 'luxon';
import {printHello} from "./helper/common-helper.helper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public formGroup!: UntypedFormGroup;
  public checkbox = [CheckboxEnum.check1, CheckboxEnum.check2, CheckboxEnum.check3];
  public showCapsLock = false;
  public test = { isActive: false, isTest: true, isConst: true };
  public timer: any;
  public formContent!: string;
  public test$ = new BehaviorSubject<number | null>(null);
  public quarters: any[];
  public selectedItem: any;
  public yLines: any;
  public xLines: any;

  constructor(
    private fb: UntypedFormBuilder,
    private service: TestService,
    private view: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
  ) {}

  // public get getCheckbox(): FormArray {
  //   return this.formGroup.get('checkbox') as FormArray;
  // }
  //
  // public get getCheckboxControls(): FormGroup[] {
  //   return this.getCheckbox.controls as FormGroup[];
  // }

  public async ngOnInit(): Promise<void> {
    this.yLines = Array.from({ length: 11 }, (_, index) => index * 50);
    this.xLines = Array.from({ length: 11 }, (_, index) => index * 50);
    printHello('Yaroslav')
    // setTimeout(() => {
    //   this.resolver.resolveComponentFactory(PainterCanvasComponent);
    //   this.view.createComponent(PainterCanvasComponent);
    // }, 2000);
    // document.cookie = 'user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT';
    // console.log(document.cookie);
    //
    // const x = 'test1 test'.replace(/^\w{4}\d/, 'removed');
    // console.log(x);

    this.createQuarters();
    new Date().toLocaleTimeString();
    // this.getQuarters();
    // this.time(new Date('2022-07-14T13:00:00Z'),new Date('2022-07-14T12:00:00Z'))
    // const COUNTDOWN_SECONDS = 120;
    // const remainingLabel = document.getElementById('remaining');

    // this.test$.pipe(
    //   startWith(true),
    //   switchMap(() => interval(1000).pipe(mapTo(-1))),
    //   scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
    //   takeWhile(v => v >= 0)).subscribe((val: any) => {
    //     // @ts-ignore
    //     remainingLabel.innerHTML = val;
    //     if (val <= 0) {
    //       // @ts-ignore
    //       remainingLabel.innerHTML = 'finish';
    //     }
    //   });
    this.formGroup = this.fb.group({
      checkbox: this.fb.array([]),
      test1: this.fb.group({
        option: '',
      }),
      test2: this.fb.group({
        option1: '',
      }),
    });
    // this.switchStreams();

    // this.getCheckboxName();
    // this.formGroup.valueChanges.subscribe(({ checkbox }) => {
    //   // @ts-ignore
    //   console.log(checkbox.filter(item => item.isChecked))
    //     clearTimeout(this.timer)
    //     const isCapsLockOn = true;
    //     if(isCapsLockOn){
    //       this.showCapsLock = true;
    //       this.timer = setTimeout(()=>{
    //         this.showCapsLock = false;
    //       },1000)
    //     }
    // });

    // fromEvent(document, 'mousemove').subscribe((e:MouseEvent) => {
    //   let ele = document.getElementById('element');
    //   let distance = ele!.offsetLeft + ele!.offsetWidth - e.clientX;
    //   distance < 15 && distance > -15 ? ele!.classList.add('more-width') : ele!.classList.remove('more-width');
    // });
    const a = this.addAsync(2, 4, (item) => {
      return item;
    });
  }

  public addAsync(a: any, b: any, callback: (arg0: any) => void): number {
    const result = a + b;
    setTimeout(() => {
      callback(result);
    }, 500);
    return result;
  }

  // public getCheckboxName():void{
  //   this.checkbox.forEach((item)=>{
  //     this.getCheckbox.push(this.fb.group({name:item,isChecked:false}));
  //   })
  // }

  // public switchStreams() {
  // const { isActive,isTest,isConst,...options } = this.test;
  // const test = { isActive,isTest,isConst };
  // // @ts-ignore
  // const equipmentKeys = Object.keys(test).filter((item) => test[item]);
  // // @ts-ignore
  // from(equipmentKeys).pipe(mergeMap((el)=>{
  //   // @ts-ignore
  //   return this.service.test({
  //     ...options,
  //     // @ts-ignore
  //     [el]:equipmentKeys[el]
  //   })
  // })).subscribe()
  // }

  // check(checked: AbstractControl, input: HTMLInputElement) {
  //   input.checked = !input.checked;
  //   checked.get('isChecked')?.patchValue(input.checked)
  // }

  public date = new Date().getFullYear();

  public buildQuarterTitle(startDate: Date, endDate: Date): string {
    const datePipe = new DatePipe('en-US');
    return `(${datePipe.transform(startDate, 'MMM')} - ${datePipe.transform(endDate, 'MMM')})`;
  }

  public detectCurrentQuarter(date: Date): number {
    return Math.floor(date.getMonth() / 3);
  }

  public createQuarters(): void {
    const currentQuarter = this.detectCurrentQuarter(new Date()) + 1;
    const quarterCounter = 0;
    const quarterAccumulation: any[] = [];
    this.buildQuarters(quarterCounter, currentQuarter, quarterAccumulation, currentQuarter);
  }

  public createQuarter(iterationQuarter: number, isCurrent: boolean): any {
    const startDateOfQuarter = DateTime.fromFormat(String(iterationQuarter), 'q');
    const endDateOfQuarter = startDateOfQuarter.endOf('quarter');
    const start = new Date(startDateOfQuarter.year, startDateOfQuarter.month - 1, startDateOfQuarter.day);
    const end = new Date(endDateOfQuarter.year, endDateOfQuarter.month - 1, endDateOfQuarter.day);
    return {
      startDate: start,
      endDate: isCurrent ? new Date() : end,
      year: startDateOfQuarter.year,
    };
  }

  public buildQuarters(
    quarterCounter: number,
    iterationQuarter: number,
    quarterAccumulation: any[],
    current: number,
  ): void {
    const quartersInYear = 4;
    const isCurrent = iterationQuarter === current;
    if (quarterCounter < quartersInYear) {
      if (iterationQuarter > 0) {
        const currentQuarterData = this.createQuarter(iterationQuarter, isCurrent);
        quarterAccumulation.push({
          startDate: currentQuarterData.startDate,
          endDate: currentQuarterData.endDate,
          tag: `Q${iterationQuarter}`,
          quarter: this.buildQuarterTitle(currentQuarterData.startDate, currentQuarterData.endDate),
          year: currentQuarterData.year,
        });
      } else {
        const pastQuarterData = this.createQuarter(quartersInYear + iterationQuarter, isCurrent);
        quarterAccumulation.push({
          tag: `Q${quartersInYear + iterationQuarter}`,
          quarter: this.buildQuarterTitle(pastQuarterData.startDate, pastQuarterData.endDate),
          startDate: new Date(pastQuarterData.startDate.setFullYear(pastQuarterData.startDate.getFullYear() - 1)),
          endDate: new Date(pastQuarterData.endDate.setFullYear(pastQuarterData.endDate.getFullYear() - 1)),
          year: pastQuarterData.year - 1,
        });
      }
      this.buildQuarters(quarterCounter + 1, iterationQuarter - 1, quarterAccumulation, current);
      this.quarters = quarterAccumulation;
    }
    return;
  }

  public static validData(data: string[] = []): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const word = data.find((el) => el.toLocaleLowerCase() === control.value.toLocaleLowerCase());

      return word ? { banned: { bannedWord: word } } : null;
    };
  }

  public getValue(quarter: any): void {
    this.selectedItem = quarter;
  }
}
