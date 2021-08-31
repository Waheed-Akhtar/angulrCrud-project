import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NevbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HeaderComponent,
    NevbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SiteFrameworkModule { }
