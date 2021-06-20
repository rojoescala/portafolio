import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialSidebarComponent,
    AboutMeComponent,
    WelcomeComponent,
    WorkComponent,
    ContactComponent,
    BottomFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgxPageScrollModule, NgxPageScrollCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
