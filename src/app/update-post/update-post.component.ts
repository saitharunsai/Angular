import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute,Router} from '@angular/router'
import { LoginSeviceService } from '../services.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  editDetails= new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
    related: new FormControl(''),
    time:new FormControl(new Date().toLocaleDateString())
  })

  constructor (private service : LoginSeviceService,    private toastr: ToastrService,

    private router1 :Router, private router : ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.service.getCurrentDetails(this.router.snapshot.params.id).subscribe((result:any)=>{
     console.log("======result",result)
     this.editDetails = new FormGroup({
      title: new FormControl(result.title),
      body: new FormControl(result.body),
      author: new FormControl(result.author),
      related: new FormControl(result.related),
      time:new FormControl(new Date().toLocaleDateString())
     })
    })
    }
    showSuccess() {
      this.toastr.info('Sucessfully Updated 😀  ');
    }
   update(){
     console.log("item",this.editDetails.value)
     this.service.updateDetails(this.router.snapshot.params.id,this.editDetails.value).subscribe((result)=>{
       console.warn("result",result)
       this.showSuccess();
       this.router1.navigate(['/Dashboard'])
     })
    
   }
}
