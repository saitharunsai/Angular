import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytask';
loggedIn =localStorage.getItem('STATE')
loggedout=localStorage.getItem('STATE')
nav1 =false
nav2 =true
  constructor(   private router :Router) {}
  ngOnInit(): void {
   console.log("appcompoennet")
  if(this.loggedIn === 'true'){
    this.nav1 =true
    this.nav2=false
  }
  else if(this.loggedout === '') {
    this.nav2=true
    this.nav1=false

  }
   else {
      this.router.navigate(['/login'])
    }
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
