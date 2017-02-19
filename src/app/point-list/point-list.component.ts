import { Component, OnInit } from '@angular/core';
import { PointService } from "../shared/point.service";
import { Point } from "../shared/point";

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.sass']
})
export class PointListComponent implements OnInit {
  points: Array<Object>;

  constructor(private pointService: PointService) { }

  ngOnInit() {
    this.pointService.getPoints().subscribe((points: Array<Point>) => {
      this.points = points;
    })
  }

}
