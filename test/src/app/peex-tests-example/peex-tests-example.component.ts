import { Component, inject, OnInit } from '@angular/core';
import { NodeJsServerService } from './service/node-js.server.service';

@Component({
  selector: 'app-peex-tests-example',
  templateUrl: './peex-tests-example.component.html',
  styleUrls: ['./peex-tests-example.component.scss'],
})
export class PeexTestsExampleComponent implements OnInit {
  private nodeJsServer = inject(NodeJsServerService);
  public ngOnInit(): void {
    this.nodeJsServer.getNodeJsResponse(2).subscribe((data) => console.log(data));
  }

  test() {}
}
