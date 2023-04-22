import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appScrollEvents]',
})
export class ScrollEventsDirective implements OnInit, OnDestroy {
  @Output() public scrollToBottom = new EventEmitter<void>();
  @Output() public scrollState = new EventEmitter<number>();

  private targetElement;
  private scrollEventsSubscription: Subscription;

  constructor(private element: ElementRef) {}

  public ngOnInit(): void {
    this.targetElement = this.element.nativeElement;
    this.scrollEventsSubscription = fromEvent(this.targetElement, 'scroll')
      .pipe(
        tap(() => {
          if (this.targetElement.scrollTop === 0) {
            this.scrollState?.emit(this.targetElement.scrollTop);
          }
          if (this.targetElement.scrollHeight === this.targetElement.scrollTop + this.targetElement.offsetHeight) {
            this.scrollToBottom?.emit();
          }
        }),
        throttleTime(200),
      )
      .subscribe(() => {
        this.scrollState?.emit(this.targetElement.scrollTop);
      });
  }

  public ngOnDestroy(): void {
    this.scrollEventsSubscription?.unsubscribe();
  }
}
