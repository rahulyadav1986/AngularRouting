import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {

  lists:any=[];  

  constructor(public _listservice: ListServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this._listservice.getListDetails(id).subscribe((listData)=>{
      this.lists = listData;
    })
    
  }

}
