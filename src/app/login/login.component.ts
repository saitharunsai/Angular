import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginSeviceService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginFrom!: FormGroup;
  submitted = false;

  userdetails = {};
  prasedDetails: any;

  // URL = 'https://truly-contacts.herokuapp.com/api';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private Login: LoginSeviceService,
    private router :Router
  ) {}

  ngOnInit() {
    this.LoginFrom = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // }))
  }

  collect() {
    this.submitted = true;

    if (this.LoginFrom.invalid) {
      return;
    }
    this.Login.saveDetails(this.LoginFrom.value).subscribe(result => {
      this.userdetails = result;
      localStorage.setItem('userdetails', JSON.stringify(this.userdetails));
      this.loaddetails();
      this.showSuccess();
      this.router.navigate(['/Dashboard'])
      // this.LoginFrom.reset({});
    });
  }

  showSuccess() {
    this.toastr.success('Sucessfully Logged IN 😀  ');
  }

  get f() {
    return this.LoginFrom.controls;
  }
  loaddetails() {
    this.prasedDetails = JSON.parse(
      localStorage.getItem('userdetails') || '{}'
    );
    console.log('first userdetails', this.prasedDetails);
  }
}
