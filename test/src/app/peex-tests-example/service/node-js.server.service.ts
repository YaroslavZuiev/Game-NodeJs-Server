import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NodeJsServerService {
  private http = inject(HttpClient);


  public getNodeJsResponse(postNumber: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${postNumber}`);
  }
}
