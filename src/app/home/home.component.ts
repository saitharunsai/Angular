import { Component, OnInit } from '@angular/core';
import { LoginSeviceService } from '../services.service';
import { Post } from './Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private rs: LoginSeviceService) {}
  columns = ['User Id', 'title', 'body', 'related', 'author', 'time'];
  index = ['id', 'title ', 'body', 'related', 'author', 'time '];
  Posts: Post[] = [];

  ngOnInit(): void {
    this.rs.PostDetails().subscribe(
      response => {
        this.Posts = response;
      },
      error => console.log(error)
    );
  }
}
