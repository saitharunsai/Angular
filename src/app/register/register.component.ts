import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginSeviceService } from '../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private Register: LoginSeviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  collect() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.Register.RegisterDetails(this.registerForm.value).subscribe(result => {
      result;
      console.log(result);
      this.showSuccess();
      this.router.navigate(['/login'])
      this.registerForm.reset({});
    });
  }

  showSuccess() {
    this.toastr.info('Sucessfully Registered 😀  ');
  }

  get f() {
    return this.registerForm.controls;
  }
}
