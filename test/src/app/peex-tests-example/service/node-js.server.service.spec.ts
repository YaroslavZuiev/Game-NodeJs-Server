import { TestBed } from '@angular/core/testing';

import { NodeJsServerService } from './node-js.server.service';

describe('NodeJsServerService', () => {
  let service: NodeJsServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeJsServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
