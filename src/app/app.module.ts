import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { FormComponent } from './form/form.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostlistComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
