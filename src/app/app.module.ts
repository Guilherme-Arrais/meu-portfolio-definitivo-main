import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FixedBarComponent } from './components/fixed-bar/fixed-bar.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { CardSkillsComponent } from './components/card-skills/card-skills.component';
import { WindowsSkillsComponent } from './components/windows-skills/windows-skills.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ImageBackgroundComponent } from './components/image-background/image-background.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FixedBarComponent,
    CardDescriptionComponent,
    CardSkillsComponent,
    WindowsSkillsComponent,
    ImageBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
