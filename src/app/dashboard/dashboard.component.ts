import { Component, OnInit } from '@angular/core';
import { Post } from '../home/Post';
import { LoginSeviceService } from '../services.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // columns = ["User Id","title","body", "related", "author", "time"];
  // index = ["id", "title", "body", "related", "author", "time"];
  Posts: any ={};
  search = '';
  constructor(private rs : LoginSeviceService,private router: Router) { 
    
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
z
  deleteDetails(item: any) {
    // if(confirm("Are you sure to delete ")) {
    //   console.log("Implement delete functionality here");
    // }
    this.Posts.splice(item - 1, 1);
    this.rs.deleteDetails(item).subscribe((result) => {
      console.warn('result', result);
    });
  }


  Add(){
    this.router.navigate(['/Add']);
  }


}
