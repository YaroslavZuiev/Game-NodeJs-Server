import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-peex-tests-example',
  templateUrl: './peex-tests-example.component.html',
  styleUrls: ['./peex-tests-example.component.scss'],
})
export class PeexTestsExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') public iframe: ElementRef<HTMLIFrameElement>;
  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.iframe.nativeElement.contentWindow;
    this.iframe.nativeElement.contentDocument!.body.style.background = 'red';
    this.iframe.nativeElement.contentDocument!.body.style.color = 'white';
    this.iframe.nativeElement.contentDocument!.body.appendChild(document.createElement('div')).textContent = 'Hello';
  }
}
