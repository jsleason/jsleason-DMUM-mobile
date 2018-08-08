import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ngx-loading-spinner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { TherapiesPage } from '../pages/therapies/therapies';
import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/event details/eventdetails';
import { DonatePage } from '../pages/donate/donate';
import { InvolvedPage } from '../pages/involved/involved';
import { AboutDetailsPage } from '../pages/about details/adetails';
import { InvolvedDetailsPage } from '../pages/involved details/involveddetails';
import { FamiliesPage } from '../pages/families/families';
import { FundraisingPage } from '../pages/fundraising/fundraising';
import { BucketingPage } from '../pages/bucketing/bucketing';
import { CheckinPublicPage } from '../pages/checkinPublic/checkinpublic';
import { CheckinHomePage } from '../pages/checkinHome/checkinhome';
import { Firebase } from '@ionic-native/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDgZW7KAtt4Wabv3Z-yIJ9K-0mjWyzp7Ts",
  authDomain: "dmum-push-notifications.firebaseapp.com",
  databaseURL: "https://dmum-push-notifications.firebaseio.com",
  projectId: "dmum-push-notifications",
  storageBucket: "dmum-push-notifications.appspot.com",
  messagingSenderId: "69176283142"
};
// Firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CheckinPage,
    RegistrationPage,
    ProfilePage,
    AboutPage,
    TherapiesPage,
    EventsPage,
    EventDetailsPage,
    DonatePage,
    InvolvedPage,
    AboutDetailsPage,
    InvolvedDetailsPage,
    FamiliesPage,
    FundraisingPage,
    BucketingPage,
    CheckinPublicPage,
    CheckinHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ng4TwitterTimelineModule,
    HttpModule,
    FormsModule,
    Ng4LoadingSpinnerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CheckinPage,
    RegistrationPage,
    ProfilePage,
    AboutPage,
    TherapiesPage,
    EventsPage,
    EventDetailsPage,
    DonatePage,
    InvolvedPage,
    AboutDetailsPage,
    InvolvedDetailsPage,
    FamiliesPage,
    FundraisingPage,
    BucketingPage,
    CheckinPublicPage,
    CheckinHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }