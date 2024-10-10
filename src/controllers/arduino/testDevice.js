import Arduino from "../../services/arduino/ArduinoServices.cjs";

const testDevice = async (req, res) => {

  const { command } = req.body;

  if (command === "run-test") {
    try {

      const arduino = new Arduino();

      const response = await arduino.controlDevice();

      if ( response.status === "EXECUTED SUCCESSFULLY" ) {
        return res.status(202).json({
          "success": "true",
          "message": "Instruction executed successfully"
        });
      } else {
        return res.status(503).json({
          "success": "false",
          "message": "The instruction could not be executed successfully"
        });
      }
    } catch(err) {
      console.error(err.message)
      throw new Error("Failed to execute Arduino service.");
    }
  } else {
    return res.status(406).json({
      "success": "false",
      "message": "command wrong. Try again"
    });
  }

};

export default testDevice;
