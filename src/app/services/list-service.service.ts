import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private _http: HttpClient) { }
  url:string= 'http://localhost:3000/lists';
  getList(){
    return this._http.get(this.url)
  }
  getListDetails(id:any){
    return this._http.get(this.url+"/"+id)
  }
}
