import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  userlistData !: any;
  constructor(private api : ApiService){}
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.api.getUserlist()
    .subscribe(res=>{
      this.userlistData = res;
      console.log(this.userlistData);
    })
  }
}
