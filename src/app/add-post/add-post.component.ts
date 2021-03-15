import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginSeviceService } from '../services.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addDetails= new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
    related: new FormControl(''),
    time:new FormControl(new Date().toLocaleDateString())
  })
  // date=new Date()

  constructor(private apiService:LoginSeviceService,private router :Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Added Post Sucessfully  😀  ');
  }
  addPost() {
    this.apiService.Addpost(this.addDetails.value  )
      .subscribe(data => {
        this.router.navigate(['/Dashboard'])
        this.showSuccess();
        console.log(data)
      })      
  }
}
