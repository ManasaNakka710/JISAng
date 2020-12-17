import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/UserDetails/GetUserDetails`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/api/UserDetails/GetUserDetails/${id}`);
    }
    UpdateUserStatusById(user: User):Observable<HttpResponse<any>> {
        return this.http.put<any>(`${environment.apiUrl}/api/UserDetails/PutUserDetails/${user.id}`,user,{ observe: 'response' });
    }
}