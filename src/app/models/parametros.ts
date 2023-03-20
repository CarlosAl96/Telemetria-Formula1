export interface Piloto {
  name: string;
  team: string;
  car: string;
}

export interface Data {
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
