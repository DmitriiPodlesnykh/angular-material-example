import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './sidebar/sidenav/sidenav.component';
import { SidebaruserComponent } from './sidebar/sidebaruser/sidebaruser.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MainnavComponent } from './sidebar/mainnav/mainnav.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidenavComponent,
    SidebaruserComponent,
    MainnavComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
