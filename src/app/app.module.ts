import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page'; // Import the HomePage

@NgModule({
  declarations: [AppComponent, HomePage], // Add the HomePage to declarations
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
