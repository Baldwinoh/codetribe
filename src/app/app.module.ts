import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProfilePage } from './../pages/profile/profile';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditIfomationPage } from '../pages/edit-ifomation/edit-ifomation';
import { RegisterPage } from './../pages/register/register';
import { ServicesProvider } from '../providers/services/services';
import { DetailsPage } from './../pages/details/details';
import { Http ,HttpModule} from '@angular/http' 
import { CodeTribePage } from './../pages/code-tribe/code-tribe';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    EditIfomationPage,
    RegisterPage,
    DetailsPage,
    CodeTribePage
  ],
  imports: [





  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    EditIfomationPage,
    RegisterPage,
    DetailsPage,
    CodeTribePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServicesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
