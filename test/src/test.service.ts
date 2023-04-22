import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

interface rerun{
  isActive:boolean,
  isTest:boolean,
  isConst:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public test$ = new BehaviorSubject(null)
  public test123 = { isActive:true,isTest:false,isConst:true };


  constructor() { }

  public test(data:rerun): Observable<any> {
    return this.test$.asObservable();
  }


  public test1(data:rerun ): void {
    // @ts-ignore
    return this.test$.next(this.test123);
  }
}
