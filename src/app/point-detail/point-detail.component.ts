import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { PointService } from "../shared/point.service";
import { PointDetail } from "../shared/point-detail";

@Component({
  selector: 'app-point-detail',
  templateUrl: './point-detail.component.html',
  styleUrls: ['./point-detail.component.sass']
})
export class PointDetailComponent implements OnInit {
  pointId: number;
  pointDetail: PointDetail;

  constructor(private route: ActivatedRoute, private pointService: PointService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pointId = +params['id'];
      this.updateDetail();
    });
  }

  updateDetail(){
    this.pointService.getPointDetails(this.pointId).subscribe((point: PointDetail) =>{
      this.pointDetail = point;
    })
  }

}
