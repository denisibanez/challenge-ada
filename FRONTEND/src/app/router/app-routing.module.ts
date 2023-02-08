import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard';

// Views
import { LayoutComponent } from '../views/layout/layout.component';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'login',
                component: LoginComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
