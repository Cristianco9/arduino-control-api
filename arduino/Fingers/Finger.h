#ifndef FINGER_H
#define FINGER_H

#include <Servo.h>

class Finger {
private:
    Servo servo;
    int pin;
public:
    Finger(int pin) : pin(pin) {}
    void attach();
    void open();
    void close();
};

#endif
