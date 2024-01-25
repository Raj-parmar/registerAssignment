import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../../shared/modules/app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditRegisterComponent } from './pages/edit-register/edit-register.component';

@NgModule({
  declarations: [RegisterComponent,EditRegisterComponent],
  imports: [
    FormsModule,
    CommonModule,
    AuthenticationRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    MatSnackBarModule
  ],
  exports: [
   RegisterComponent
  ]
})
export class AuthenticationModule { }
