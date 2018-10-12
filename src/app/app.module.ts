import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorComponent } from './component/author/author.component';
import { PracComponent } from './component/prac/prac.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { CaseFixPipe } from './pipe/case-fix.pipe';
import { PanelComponent } from './component/panel/panel.component';
import { LikeComponent } from './component/like/like.component';
import { ZippyComponent } from './component/zippy/zippy.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    PracComponent,
    SummaryPipe,
    CaseFixPipe,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
