import { Component, ViewChild, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

class Event {
    eventId: number;
    name: string;
    date_range: string;
    time_range: string;
    location: string;
    description: string;
}

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html'
})
export class DonatePage implements AfterViewInit, OnDestroy {
 @ViewChild('cardInfo') cardInfo: ElementRef;

  public eventlist: Array<Event>;
  public relationlist: Array<any>;
  
  public name: string;
  public dancer: string;
  public relationId: any;
  public email: string;
  public eventId: number;
  public amount: number;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(public navCtrl: NavController, public http: Http, private cd: ChangeDetectorRef, private alertCtrl: AlertController) {

    this.http
    .get("http://localhost:3000/allEvents")
    .subscribe(
        result => {
            console.log(result.json());
            let data = result.json();
            this.eventlist = data;
        },
        err => {
            console.log(err);
        }
    );

    this.http
    .get("http://localhost:3000/allRelations")
    .subscribe(
        result => {
            console.log(result.json());
            let data = result.json();
            this.relationlist = data;
        },
        err => {
            console.log(err);
        }
    );

  }

  ngAfterViewInit() {
      this.card = elements.create('card');
      this.card.mount(this.cardInfo.nativeElement);

      this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
      if (error) {
          this.error = error.message;
      } else {
          this.error = null;
      }
      this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
      const { token, error } = await stripe.createToken(this.card);

      if (error) {
          console.log('Something is wrong:', error);
      } else {
          console.log('Success!', token);
          //send the token to your backend to process the charge
      }
  }

  donate(){
    this.http
    .post("http://localhost:3000/newDonation", {
            name: this.name,
            dancer: this.dancer,
            relationId: this.relationId,
            email: this.email,
            eventId: this.eventId,
            amount: this.amount * 100, // converts to cents
        })
    .subscribe(
        result => {
            console.log(result.json);
            let alert = this.alertCtrl.create({
                title: 'Thank you!',
                message: 'We appreciate your support FTK.',
                buttons: ['Dismiss']
              });
              alert.present();
        },
        err => {
            console.log(err);
        }
    );
  }

  navigateToHome(){
    console.log("Navigating...");
  
    this.navCtrl.push(HomePage);
  }

}