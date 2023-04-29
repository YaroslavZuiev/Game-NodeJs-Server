import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import {BehaviorSubject, firstValueFrom } from 'rxjs';
import { PainterCanvasComponent } from '../painter-canvas/painter-canvas.component';

@Component({
  selector: 'app-peex-tests-example',
  templateUrl: './peex-tests-example.component.html',
  styleUrls: ['./peex-tests-example.component.css'],
})
export class PeexTestsExampleComponent implements OnInit {
  constructor() {}
  public values$ = new BehaviorSubject<any>({
    locations: [{ siteNo: '258081' }, { siteNo: '2345' }],
    tags: ['Los Angeles', 'New York'],
  });

  public async ngOnInit(): Promise<void> {
    await this.normalizeReportLocations({
      locations: [{ siteNo: '258081' }, { siteNo: '2345' }],
      tags: ['Los Angeles', 'New York'],
    });
  }

  public async normalizeReportLocations(selectedLocations: any): Promise<string> {
    let extractedTagsLocations = [];
    let extractedLocations = [];

    if (selectedLocations.tags?.length) {
      extractedTagsLocations = await firstValueFrom(this.values$);
    }

    if (selectedLocations.locations?.length) {
      extractedLocations = selectedLocations.locations.map((item: { siteNo: string }) => item.siteNo);
    }

    return [...extractedLocations, ...extractedTagsLocations].join(',');
  }
}
