import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytask';
  loggedIn: boolean = false;
  constructor(private router: Router,    private toastr: ToastrService,) {}
 
  ngAfterViewChecked(): void {
    console.log('appcompoennet');
    if (localStorage.getItem('STATE') == 'true') {
      console.log('treuhjke');
      this.loggedIn = true;
    } else {
      this.loggedIn=false
      console.log('faslkld');
   
    }
  
  }
  logouttoast() {
    this.toastr.warning('Sucessfully Logged OUT 😀  ');
  }
  logout() {
    // location.search
    this.logouttoast()
    localStorage.clear();
    this.router.navigate(['/']);
  }

 
 
}
