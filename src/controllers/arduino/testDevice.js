import Arduino from "../../services/arduino/Arduino.cjs";

const testDevice = async (req, res) => {

  const { command } = req.body;

  try {

    //const arduinoService = new Arduino('COM3');
    const arduinoService = new Arduino('/dev/tty.usbmodem1101');

    switch (command) {

      case 'abrir':
        arduinoService.abrir();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Abrir"
        })
        break;
      case 'cerrar':
        arduinoService.cerrar();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Cerrar"
        })
        break;
      case 'contar':
        arduinoService.contar();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Contar"
        })
        break;
      case 'regresivo':
        arduinoService.regresivo();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Regresivo"
        })
        break;
      case 'saludo':
        arduinoService.saludo();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Saludo"
        })
        break;
      case 'pistola':
        arduinoService.pistola();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Pistola"
        })
        break;
      case 'sigsag':
        arduinoService.sigsag();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Sigsag"
        })
        break;
      case 'groseria':
        arduinoService.groseria();
        res.status(200).json({
          "status": "success",
          "message": "Instrucción ejecutada",
          "gesto": "Grosería"
        })
        break;
      default:
        res.status(404).json({
          "status": "wrong",
          "message": "Instrucción incorrecta",
          "gesto": command
        })

    }

  } catch (error) {
    console.error(error);
    res.status(503).json({
      "status": "error",
      "message": "hubo un error al intentar ejecutar la instrucción",
      "gesto": command
    })
  }
  };

export default testDevice;
