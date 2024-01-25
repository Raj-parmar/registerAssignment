import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { ConfirmDialogueComponent } from './components/confirm-dialogue/confirm-dialogue.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgSelectModule } from '@ng-select/ng-select';
import { CheckPermissionDirective } from './directive/check-permission/check-permission.directive';
import { textValidationDirective } from './directive/text-validation/text-validation.directive';
import { PhoneNumberValidationDirective } from './directive/phone-number-validation/phone-number-validation.directive';
// import { NgImageSliderModule } from 'ng-image-slider';


const SHARED_MODULES = [
  AppMaterialModule
]

@NgModule({
  declarations: [ConfirmDialogueComponent, CheckPermissionDirective, textValidationDirective, PhoneNumberValidationDirective],
  imports: [
    CommonModule,
    SHARED_MODULES,
    FlexLayoutModule,
    NgSelectModule,
    // NgImageSliderModule
  ],
  exports: [
    SHARED_MODULES,
    FlexLayoutModule,
    NgSelectModule,
    CheckPermissionDirective,
    textValidationDirective,
    PhoneNumberValidationDirective
    // NgImageSliderModule
  ]
})
export class SharedModule { }