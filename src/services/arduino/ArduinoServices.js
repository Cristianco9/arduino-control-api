import ArduinoController from "../../../build/Release/arduino_controller";

class Arduino {

  async controlDevice() {

    try {
      await ArduinoController.execute();
      console.log("Arduino control executed successfully.");
    } catch(err) {
      console.error("Error controlling Arduino:", err.message);
      throw new Error("Failed to execute Arduino control.");
    }
  }
}

export default Arduino;
