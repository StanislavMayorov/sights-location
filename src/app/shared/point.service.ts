import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Point } from "./point";
import { Response } from "@angular/http/src/static_response";

@Injectable()
export class PointService {

  constructor(private http: Http) { }

  getPoints(): Observable<Array<Point>>{
    const url = 'http://api.dev.aispot.no/lighthouse/spot/nearby?lat=59.879037&lng=59.87903';
    return this.http.get(url).map((response:Response) => response.json())
  }


}
