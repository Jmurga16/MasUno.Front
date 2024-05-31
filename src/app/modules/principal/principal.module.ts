import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalRoutingModule } from './principal-routing.module';
import { CoverComponent } from './pages/cover/cover.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { RegisterFormComponent } from './common/components/register-form/register-form.component';
import { StepDiscountComponent } from './common/components/step-discount/step-discount.component';
import { SliderTechnologiesComponent } from './common/components/slider-technologies/slider-technologies.component';
import { PrincipalComponent } from './principal.component';


const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PrincipalRoutingModule,
];

@NgModule({
  declarations: [


    CoverComponent,
    PrincipalComponent,
    DiscountComponent,
    TechnologiesComponent,
    RegisterFormComponent,
    StepDiscountComponent,
    SliderTechnologiesComponent
  ],
  imports: [
    ANGULAR_MODULES,
  ]
})
export class PrincipalModule { }
