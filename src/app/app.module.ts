import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptor';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { MerchantPanelModule } from './merchant-panel/merchant-panel.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    // AngularFontAwesomeModule
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    MerchantPanelModule,
    NgxSpinnerModule,
    ModalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi: true
    },
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
