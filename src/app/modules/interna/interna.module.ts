import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternaRoutingModule } from './interna-routing.module';
import { TitleComponent } from './common/components/title/title.component';
import { InfoComponent } from './common/components/info/info.component';
import { GalleryComponent } from './common/components/gallery/gallery.component';
import { PhpComponent } from './pages/php/php.component';
import { PythonComponent } from './pages/python/python.component';
import { DesignComponent } from './pages/design/design.component';
import { InternaComponent } from './interna.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  InternaRoutingModule,
];

@NgModule({
  declarations: [
    InternaComponent,
    TitleComponent,
    InfoComponent,
    GalleryComponent,
    PhpComponent,
    PythonComponent,
    DesignComponent,
  ],
  imports: [
    ANGULAR_MODULES,
    NgbCarouselModule

  ]
})
export class InternaModule { }
