#ifndef MOVEMENTS_H
#define MOVEMENTS_H

#include <Servo.h>

// Definición de pines para los servos
extern Servo servo1;
extern Servo servo2;
extern Servo servo3;
extern Servo servo4;
extern Servo servo5;

// Declaración de funciones para los movimientos de la mano
void setupServos();       // Inicializa y configura los servos

void abrir();             // Abre completamente la mano
void cerrar();            // Cierra completamente la mano
void contar();            // Realiza un movimiento "contar"
void regresivo();         // Realiza un conteo regresivo con los dedos
void saludo();            // Realiza un movimiento de saludo
void pistola();           // Realiza un gesto en forma de "pistola"
void sigsag();            // Realiza un movimiento en zigzag con los dedos
void groseria();          // Realiza un gesto de "groseria" levantando un dedo específico

#endif // MOVEMENTS_H
