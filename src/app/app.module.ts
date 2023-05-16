import { RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './components/directive/directive.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ConceptsComponent,
    DirectiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'header', component: HeaderComponent },
      { path: 'directive', component: DirectiveComponent },
      { path: 'concepts', component: ConceptsComponent },
      { path: 'user', component: UserComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
