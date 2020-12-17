import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ButtonAComponent } from './shared/button-a/button-a.component';
import { ButtonBComponent } from './shared/button-b/button-b.component';
import { MegistrateCourtModuleModule } from './shared/megistrate-court-module/megistrate-court-module.module';
//import { HighCourtComponent } from './High-Court-Module/high-court/high-court.component';
//import { HighCourtModuleComponent } from './high-court-module/high-court-module.component';
//import { HighCourtModuleComponent } from './shared/high-court-module/high-court-module.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        MegistrateCourtModuleModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        RegisterComponent,
        ButtonAComponent,
        ButtonBComponent,
        //HighCourtComponent,
        //HighCourtModuleComponent,
        //HighCourtModuleComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }