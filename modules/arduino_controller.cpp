#include <node.h>
#include <iostream>

void ControlArduino() {
    std::cout << "Arduino is being controlled!" << std::endl;
}

void Execute(const v8::FunctionCallbackInfo<v8::Value>& args) {
    ControlArduino();
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "execute", Execute);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
