import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { PointService } from "../shared/point.service";
import { PointDetail } from "../shared/point-detail";
import { Title } from "../../../node_modules/@angular/platform-browser/src/browser/title";
import { TitleService } from "../shared/title.service";

@Component({
  selector: 'app-point-detail',
  templateUrl: './point-detail.component.html',
  styleUrls: ['./point-detail.component.sass']
})
export class PointDetailComponent implements OnInit {
  pointId: number;
  pointDetail: PointDetail;

  constructor(private route: ActivatedRoute, private pointService: PointService,
              private titleService: Title, private generateTitleService: TitleService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pointId = +params['id'];
      this.updateDetail();
    });
  }

  updateDetail(){
    this.pointService.getPointDetails(this.pointId).subscribe((point: PointDetail) =>{
      this.titleService.setTitle(this.generateTitleService.getTitle(point.title));
      this.pointDetail = point;
    })
  }

}
