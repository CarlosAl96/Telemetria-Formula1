import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  firebaseConfig: any = {
    apiKey: "AIzaSyBC2lGqdkDcQ1i42y_OGXWMB9z_N--NfI0",
    authDomain: "telemetriaf1-cdae0.firebaseapp.com",
    projectId: "telemetriaf1-cdae0",
    storageBucket: "telemetriaf1-cdae0.appspot.com",
    messagingSenderId: "840512711825",
    appId: "1:840512711825:web:37d8270c08a92f2a48a330"
  };

  initialCoordinates = { lat: 41.38879, lng: 2.15899 };

  center = {
    lat: this.initialCoordinates.lat,
    lng: this.initialCoordinates.lng,
  };

  mapConfiguration: google.maps.MapOptions = {
    center: this.center,
    zoom: 8,
    scrollwheel: false,
    fullscreenControl: false,
  };

  data: any [] = [];

  apiLoaded: Observable<boolean>;

  apiKey = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBF07b5XbetzvsGMCgk1r4FugFT7eG5PPM&libraries=places`;

  constructor(private httpClient: HttpClient,) {
    this.apiLoaded = this.httpClient.jsonp(this.apiKey, 'callback').pipe(
      map(() => true),
      catchError(() => of(false))
    );

  }

  ngOnInit(): void {
    initializeApp(this.firebaseConfig);
    this.getData();
  }

  async getData() {
    const querydb = getFirestore();
    const queryDocs = collection(querydb, 'parametros');
    const data = await getDocs(queryDocs);

    data.forEach((doc) => {
      this.data.push(doc.data())
    });
  }
}
