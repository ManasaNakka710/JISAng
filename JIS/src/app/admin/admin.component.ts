import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/models';
import { UserService } from '@app/services';

@Component({ templateUrl: 'admin.component.html', styleUrls: ['./admin.component.css'] })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];
  
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }

    updateStatus(user: User, index: number) {
        user.status = !user.status;
        this.userService.UpdateUserStatusById(user).subscribe(res => {
            if (res.status === 204) {
                this.users[index].status = user.status;
            }
        })
    }
}