import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MerchantPanelModule } from './merchant-panel/merchant-panel.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component :LoginComponent
  },
  {
    path: "dashboard",
    loadChildren: "../app/merchant-panel/merchant-panel.module#MerchantPanelModule"
  },
  // { path: 'dashboard', loadChildren: () => import('../app/merchant-panel/merchant-panel-routing.module').then(m => m.Mer) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MerchantPanelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
