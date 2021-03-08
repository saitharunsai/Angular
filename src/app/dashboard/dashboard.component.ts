import { Component, OnInit } from '@angular/core';
import { Post } from '../home/Post';
import { LoginSeviceService } from '../services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  columns = ["User Id","title","body", "related", "author", "time"];
  index = ["id", "title", "body", "related", "author", "time"];
  Posts : Post[] = [];
  constructor(private rs : LoginSeviceService) { 
    
  }
  ngOnInit(): void {
    this.rs.PostDetails().subscribe
    (
      (response)=>
      {
        this.Posts = response;
      },
      (error) => console.log(error)
    
    )
  }

}
