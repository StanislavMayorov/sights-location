import { Component, OnInit } from '@angular/core';
import { PointService } from "../shared/point.service";
import { Point } from "../shared/point";
import { _createConditionalRootRenderer } from "../../../node_modules/@angular/platform-browser/src/dom/debug/ng_probe";
import { Title } from "../../../node_modules/@angular/platform-browser/src/browser/title";
import { TitleService } from "../shared/title.service";

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.sass']
})
export class PointListComponent implements OnInit {
  points: Array<Point>;
  mapCenterLat: number;
  mapCenterLng: number;

  constructor(private pointService: PointService, private titleService: Title,
              private generateTitleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.generateTitleService.getTitle());
    this.mapCenterLat = 59.879037;
    this.mapCenterLng = 59.87903;
    this.pointService.getPoints().subscribe((points: Array<Point>) => {
      for (let point of points) {
        point.isOpen = false;
      }
      this.points = points;
    })
  }

  clickMarker(point: any) {
    this.closeAllWindows();
    point.isOpen = true;
  }

  closeAllWindows() {
    for (let point of this.points) {
      point.isOpen = false;
    }
  }

}
