import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './helpers';
import { Role } from './models';
import { MobileCourtComponent } from './shared/megistrate-court-module/mobile-court/mobile-court.component';
import { MagistrateCourtComponent } from './shared/megistrate-court-module/magistrate-court/magistrate-court.component';
import { SmallClaimCourtComponent } from './shared/megistrate-court-module/small-claim-court/small-claim-court.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: ["Admin"] }
    },
    {
        path: 'login',
        component: LoginComponent
    },{
        path: 'register',
        component: RegisterComponent
    },

     {
         path: 'mobile-court',
         component: MobileCourtComponent
     },
     {
        path: 'magistrate-court',
        component: MagistrateCourtComponent
    },
    {
        path: 'small-claim-court',
        component: SmallClaimCourtComponent
    },




    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);