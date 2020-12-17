import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '@app/services';
import { first } from 'rxjs/operators';
import { User } from '@app/models';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
    alert: boolean = false
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            UserName: ['', Validators.required],
            Password: ['', Validators.required],
            Role: ['', Validators.required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(user: User) {
        this.submitted = true;
        console.log('input', user);

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        
        this.authenticationService.register(user)
            .pipe(first())
            .subscribe(
                data => {
                    alert("Your registration is successfull");
                    this.router.navigate(["/login"]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                    alert("Your registration failed");
                });
    }
}