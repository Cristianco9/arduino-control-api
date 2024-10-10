const ArduinoController = require("../../../modules/build/Release/arduino_controller.node");

class Arduino {

  async controlDevice() {

    try {
      await ArduinoController.execute();
      return { status: 'EXECUTED SUCCESSFULLY' };
    } catch(err) {
      console.error("Error controlling Arduino:", err.message);
      throw new Error("Failed to execute Arduino control.");
    }
  }
}

module.exports = Arduino;
