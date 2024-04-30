void setup() {
  pinMode(11, OUTPUT);  // Configura el pin 11 (o cualquier otro pin PWM) como salida
  Serial.begin(9600);   // Inicia la comunicación serial
}

void loop() {
  if (Serial.available() > 0) {            // Verifica si hay datos disponibles en el puerto serial
    int value = Serial.parseInt();         // Lee un valor entero del puerto serial
    analogWrite(11, value);                // Ajusta la intensidad del LED usando PWM
  }
}
