import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SplitUsersByRolePipe } from './pipes/split-users-by-role-pipe.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SplitUsersByRolePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [SplitUsersByRolePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
