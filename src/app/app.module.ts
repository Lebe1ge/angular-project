import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicModule } from './public/public.module';
import { AccountModule } from './account/account.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { SearchComponent } from './public/search/search.component';
import { SearchModule } from './public/search/search.module';
import { HeaderComponent } from './shared/header/header.component';
import { SerieComponent } from './shared/serie/serie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',
        component: HomeComponent,
      },
      { path: 'search',
        component: SearchComponent,
      },
      { path: 'serie',
         component: SerieComponent,
      }
    ]),
    PublicModule,
    AccountModule,
    SharedModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
