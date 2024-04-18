import { NgModule } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EventlogsService } from './services/eventlogs.service';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      EventlogsService,
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatTable,
      MatTableModule,
      MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }