import {Component, Input } from '@angular/core';
import {periods} from "./periods";

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent {
  @Input() public hour: string = '12';
  @Input() public minutes: string = '59';
  @Input() public selectedPeriod = 'AM';

  public periods = periods;

  public changeHours(value: string, operation: string): void {
    const hours = Number(value);
    this.hour = this.createCorrectTime(hours, 9, 12, operation);
  }

  public changeMinutes(value: string, operation: string): void {
    const minutes = Number(value);
    this.minutes = this.createCorrectTime(minutes, 9, 59, operation, false);
  }

  public createCorrectTime(num: number, min: number, max: number, operation: string, hours = true): string {
    num = this.detectOperation(operation, num, max);
    switch (true) {
      case (num <= min && num !== 0): {
        return `0${num}`;
      }
      case (num > min && num <= max): {
        return `${num}`
      }
      case (num > max || !hours && num === 0) : {
        return hours ? '01' : '00';
      }
      case (num < 1 && hours) : {
        return '12';
      }
      default: {
        return `${max}`;
      }
    }
  }

  public detectOperation(operation: string, value: number, max: number): number {
    if (operation === '+') {
      return value + 1;
    } else {
      return value === 0 ? max : value - 1;
    }
  }

  public getPeriod(period: string): void {
    this.selectedPeriod = period;
  }
  //
  // public createDateObject(): string {
  //   return `${new Date().toDateString()} ${this.hour}:${this.minutes} ${this.selectedPeriod}`;
  // }
}
