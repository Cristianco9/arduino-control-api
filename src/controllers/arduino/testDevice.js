import Arduino from "../../services/arduino/Arduino.cjs";

const testDevice = async (req, res) => {

  const { command } = req.body;

  try {

    const arduinoService = new Arduino('COM3');

    switch (command) {

      case 'abrir':
        arduinoService.abrir();
        break;
      case 'cerrar':
        arduinoService.cerrar();
        break;
      case 'contar':
        arduinoService.contar();
        break;
      case 'regresivo':
        arduinoService.regresivo();
        break;
      case 'saludo':
        arduinoService.saludo();
        break;
      case 'pistola':
        arduinoService.pistola();
        break;
      case 'sigsag':
        arduinoService.sigsag();
        break;
      case 'groseria':
        arduinoService.groseria();
        break;
      default:

    }

  } catch (error) {

  }

  };

export default testDevice;
