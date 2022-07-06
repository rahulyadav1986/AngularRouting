import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists:any=[];
  p: number = 1;

  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
    this.listService.getList().subscribe((listData)=>{
      this.lists = listData;
    })
    
  }

}
