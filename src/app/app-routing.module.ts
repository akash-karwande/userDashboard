import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

	{ path: '', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
