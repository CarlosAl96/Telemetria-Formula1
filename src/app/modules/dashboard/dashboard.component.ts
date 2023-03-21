import { Component, OnInit } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { Data } from 'src/app/models/parametros';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
  
  data: any [] = [];
  constructor() {}

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
