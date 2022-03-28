import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StackPageComponent } from './stack-page/stack-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ProductsComponent } from './products/products.component';
import { ProcessComponent } from './process/process.component';
import { AssetsComponent } from './assets/assets.component';
import { SecurityComponent } from './security/security.component';
import { ReviewsComponent } from './reviews/reviews.component';

import { SwiperModule } from 'swiper/angular';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StackPageComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProductsComponent,
    ProcessComponent,
    AssetsComponent,
    SecurityComponent,
    ReviewsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
