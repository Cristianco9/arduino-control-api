#include "Finger.h"

void Finger::attach() {
    servo.attach(pin);
}

void Finger::open() {
    servo.write(180);
}

void Finger::close() {
    servo.write(0);
}
