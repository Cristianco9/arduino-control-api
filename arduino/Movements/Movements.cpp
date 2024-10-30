#include "Movements.h"

Movements::Movements(Servo& s1, Servo& s2, Servo& s3, Servo& s4, Servo& s5)
    : servo1(s1), servo2(s2), servo3(s3), servo4(s4), servo5(s5) {}

void Movements::abrir() {
    servo1.write(180);
    servo2.write(180);
    servo3.write(180);
    servo4.write(180);
    servo5.write(180);
}

void Movements::cerrar() {
    servo1.write(0);
    servo2.write(0);
    servo3.write(0);
    servo4.write(0);
    servo5.write(0);
}

void Movements::contar() {
    cerrar();
    delay(1000);
    servo1.write(180);
    delay(1000);
    servo2.write(180);
    delay(1000);
    servo3.write(180);
    delay(1000);
    servo4.write(180);
    delay(1000);
    servo5.write(180);
    delay(1000);
}

void Movements::regresivo() {
    abrir();
    delay(1000);
    servo5.write(0);
    delay(1000);
    servo4.write(0);
    delay(1000);
    servo3.write(0);
    delay(1000);
    servo2.write(0);
    delay(1000);
    servo1.write(0);
    delay(1000);
}

void Movements::saludo() {
    for (int i = 0; i <= 180; i++) {
        servo5.write(i);
        delay(1);
        servo1.write(i + 36);
        delay(1);
        servo2.write(i + 72);
        delay(1);
        servo3.write(i + 108);
        delay(1);
        servo4.write(i + 144);
        delay(1);
    }
    for (int i = 180; i >= 0; i--) {
        servo4.write(i);
        delay(1);
        servo3.write(i + 36);
        delay(1);
        servo2.write(i + 72);
        delay(1);
        servo1.write(i + 108);
        delay(1);
        servo5.write(i + 144);
        delay(1);
    }
}

void Movements::pistola() {
    servo1.write(180);
    servo2.write(0);
    servo3.write(0);
    servo4.write(0);
    servo5.write(180);
    delay(800);
    servo5.write(0);
    delay(800);
    servo5.write(180);
    delay(800);
    servo5.write(0);
    delay(800);
    servo5.write(180);
}

void Movements::sigsag() {
    servo1.write(180);
    servo2.write(0);
    servo3.write(180);
    servo4.write(0);
    servo5.write(0);
    delay(800);
    servo1.write(0);
    servo2.write(180);
    servo3.write(0);
    servo4.write(180);
    servo5.write(180);
}

void Movements::groseria() {
    abrir();
    delay(1000);
    servo2.write(180);
    servo5.write(0);
    servo1.write(0);
    servo3.write(180);
    servo4.write(180);
    delay(1000);
}
