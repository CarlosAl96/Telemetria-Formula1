import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Piloto {
  name: string;
  team: string;
  car: string;
}

interface Data {
  piloto: string;
  velocidad: number;
  rpm: number;
  marcha: string;
  llanta: string;
  presionDI: number;
  presionDD: number;
  presionTI: number;
  presionTD: number;
  temperaturaDI: number;
  temperaturaDD: number;
  temperaturaTI: number;
  temperaturaTD: number;
  temperaturaFrenos: number;
  temperaturaMotor: number;
  combustible: number;
  bateria: number;
  tiempoVuelta: number;
  vueltasTotal: number;
  vueltasStint: number;
}

@Component({
  selector: 'app-cargar-datos',
  templateUrl: './cargar-datos.component.html',
  styleUrls: ['./cargar-datos.component.css'],
  styles: [
    `
      :host ::ng-deep .p-card {
        margin: 2rem;
        padding: 1rem;
      }
    `,
  ],
})
export class CargarDatosComponent implements OnInit {

  formData: FormGroup = new FormGroup({});
  piloto: Piloto = { name: '', team: '', car: '' };
  pilotos: Piloto[] = [
    {
      name: '1 Max Verstappen',
      team: 'Oracle Red Bull Racing',
      car: 'RB19',
    },
    {
      name: '11 Sergio Perez',
      team: 'Oracle Red Bull Racing',
      car: 'RB19',
    },

    {
      name: '44 Lewis Hamilton',
      team: 'Mercedes-AMG PETRONAS F1 Team',
      car: 'W14',
    },
    {
      name: '63 George Russell',
      team: 'Mercedes-AMG PETRONAS F1 Team',
      car: 'W14',
    },

    {
      name: '14 Fernando Alonso',
      team: 'Aston Martin Aramco Cognizant F1 Team',
      car: 'AMR23',
    },
    {
      name: '18 Lance Stroll',
      team: 'Aston Martin Aramco Cognizant F1 Team',
      car: 'AMR23',
    },

    {
      name: '16 Charles Leclerc',
      team: 'Scuderia Ferrari',
      car: 'SF-23',
    },
    {
      name: '55 Carlos Sainz',
      team: 'Scuderia Ferrari',
      car: 'SF-23',
    },

    {
      name: '10 Pierre Gasly',
      team: 'BWT Alpine F1 Team',
      car: 'A523',
    },
    {
      name: '31 Esteban Ocon',
      team: 'BWT Alpine F1 Team',
      car: 'A523',
    },

    {
      name: '77 Valtteri Bottas',
      team: 'Alfa Romeo F1 Team Stake',
      car: 'C43',
    },
    {
      name: '24 Zhou Guanyu',
      team: 'Alfa Romeo F1 Team Stake',
      car: 'C43',
    },

    {
      name: '20 Kevin Magnussen',
      team: 'MoneyGram Haas F1 Team',
      car: 'VF-23',
    },
    {
      name: '27 Nico Hulkenberg',
      team: 'MoneyGram Haas F1 Team',
      car: 'VF-23',
    },

    {
      name: '23 Alexander Albon',
      team: 'Williams Racing',
      car: 'FW45',
    },
    {
      name: '2 Logan Sargeant',
      team: 'Williams Racing',
      car: 'FW45',
    },

    {
      name: '22 Yuki Tsunoda',
      team: 'Scuderia AlphaTauri',
      car: 'AT04',
    },
    {
      name: '21 Nyck De Vries',
      team: 'Scuderia AlphaTauri',
      car: 'AT04',
    },

    {
      name: '4 Lando Norris',
      team: 'McLaren F1 Team',
      car: 'MCL60',
    },
    {
      name: '81 Oscar Piastri',
      team: 'McLaren F1 Team',
      car: 'MCL60',
    },
  ];

  constructor(private _form: FormBuilder) {}

  ngOnInit(): void {
    this._loadForm();
  }

  prueba() {
    console.log(this.piloto);
  }

  private _loadForm() {
    this.formData = this._form.group({
      piloto: ['', [Validators.compose([Validators.required])]],
      velocidad: ['', [Validators.compose([Validators.required])]],
      rpm: ['', [Validators.compose([Validators.required])]],
      marcha: ['', [Validators.compose([Validators.required])]],
      llanta: ['', [Validators.compose([Validators.required])]],
      presionDI: ['', [Validators.compose([Validators.required])]],
      presionDD: ['', [Validators.compose([Validators.required])]],
      presionTI: ['', [Validators.compose([Validators.required])]],
      presionTD: ['', [Validators.compose([Validators.required])]],
      temperaturaDI: ['', [Validators.compose([Validators.required])]],
      temperaturaDD: ['', [Validators.compose([Validators.required])]],
      temperaturaTI: ['', [Validators.compose([Validators.required])]],
      temperaturaTD: ['', [Validators.compose([Validators.required])]],
      temperaturaFrenos: ['', [Validators.compose([Validators.required])]],
      temperaturaMotor: ['', [Validators.compose([Validators.required])]],
      combustible: ['', [Validators.compose([Validators.required])]],
      bateria: ['', [Validators.compose([Validators.required])]],
      tiempoVuelta: ['', [Validators.compose([Validators.required])]],
      vueltasTotal: ['', [Validators.compose([Validators.required])]],
      vueltasStint: ['', [Validators.compose([Validators.required])]],
    });
  }

  enviarData(){
    

    let data: Data = {
      piloto: this.formData.controls["piloto"].value.name,
      velocidad: this.formData.controls["velocidad"].value,
      rpm: this.formData.controls["rpm"].value,
      marcha: this.formData.controls["marcha"].value,
      llanta: this.formData.controls["llanta"].value,
      presionDI: this.formData.controls["presionDI"].value,
      presionDD: this.formData.controls["presionDD"].value,
      presionTI: this.formData.controls["presionTI"].value,
      presionTD: this.formData.controls["presionTD"].value,
      temperaturaDI: this.formData.controls["temperaturaDI"].value,
      temperaturaDD: this.formData.controls["temperaturaDD"].value,
      temperaturaTI: this.formData.controls["temperaturaTI"].value,
      temperaturaTD: this.formData.controls["temperaturaTD"].value,
      temperaturaFrenos: this.formData.controls["temperaturaFrenos"].value,
      temperaturaMotor: this.formData.controls["temperaturaMotor"].value,
      combustible: this.formData.controls["combustible"].value,
      bateria: this.formData.controls["bateria"].value,
      tiempoVuelta: this.formData.controls["tiempoVuelta"].value,
      vueltasTotal: this.formData.controls["vueltasTotal"].value,
      vueltasStint: this.formData.controls["vueltasStint"].value,
    }

    console.log(data);
    
  }
}
