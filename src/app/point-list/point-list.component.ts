import { Component, OnInit } from '@angular/core';
import { PointService } from "../shared/point.service";
import { Point } from "../shared/point";
import { _createConditionalRootRenderer } from "../../../node_modules/@angular/platform-browser/src/dom/debug/ng_probe";

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.sass']
})
export class PointListComponent implements OnInit {
  points: Array<Point>;
  mapCenterLat: number;
  mapCenterLng: number;

  constructor(private pointService: PointService) {
  }

  ngOnInit() {
    this.mapCenterLat = 59.879037;
    this.mapCenterLng = 59.87903;
    this.pointService.getPoints().subscribe((points: Array<Point>) => {
      this.points = points;
      for(let point of this.points){
        point.isOpen = false;
      }
    })
  }

  closeInfo(event: any){
    //debugger;
    console.log(event);
  }

  clickMarker(point: any){
    debugger;
    this.closeAllWindows();
    point.isOpen = true;
  }

  closeAllWindows(){
    debugger;
    for(let point of this.points){
      point.isOpen = false;
      //point.isOpen = !point.isOpen;
    }
  }

}
