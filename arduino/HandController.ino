#include <Servo.h>
#include "Movements.h"

// Crear instancias de servos
Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
Servo servo5;

// Pines de los servos
const int pinservo1 = 2;
const int pinservo2 = 3;
const int pinservo3 = 4;
const int pinservo4 = 5;
const int pinservo5 = 6;

// Crear una instancia de Movements para controlar la mano
Movements handMovements(servo1, servo2, servo3, servo4, servo5);

void setup() {
    // Inicializar cada servo
    servo1.attach(pinservo1, 610, 2550);
    servo2.attach(pinservo2, 670, 2540);
    servo3.attach(pinservo3, 660, 2600);
    servo4.attach(pinservo4, 660, 2600);
    servo5.attach(pinservo5, 660, 2600);

    // Iniciar comunicación serial
    Serial.begin(9600);

    // Posición inicial de la mano (abrir)
    handMovements.abrir();
}

void loop() {
    // Verificar si hay datos en el Serial
    if (Serial.available() > 0) {
        // Leer el comando desde la API
        String command = Serial.readStringUntil('\n');
        command.trim(); // Elimina espacios en blanco

        // Ejecutar el comando correspondiente
        if (command == "abrir") {
            handMovements.abrir();
        } else if (command == "cerrar") {
            handMovements.cerrar();
        } else if (command == "contar") {
            handMovements.contar();
        } else if (command == "regresivo") {
            handMovements.regresivo();
        } else if (command == "saludo") {
            handMovements.saludo();
        } else if (command == "pistola") {
            handMovements.pistola();
        } else if (command == "sigsag") {
            handMovements.sigsag();
        } else if (command == "groseria") {
            handMovements.groseria();
        } else {
            Serial.println("Comando no reconocido"); // Mensaje para comandos inválidos
        }

        // Agregar un pequeño retraso para evitar procesar datos demasiado rápido
        delay(100);
    }
}
