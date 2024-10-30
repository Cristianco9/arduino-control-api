const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

class ArduinoService {

  constructor(portPath) {
    // Configurar el puerto serial
    this.port = new SerialPort(portPath, { baudRate: 9600 });
    this.parser = this.port.pipe(new Readline({ delimiter: '\n' }));

    // Mostrar los mensajes recibidos del Arduino
    this.parser.on('data', (data) => {
      console.log('Respuesta del Arduino:', data.trim());
    });

    // Manejo de errores de conexión
    this.port.on('error', (err) => {
      console.error('Error en el puerto serial:', err.message);
    });
  }

  // Método general para enviar comandos al Arduino
  sendCommand(command) {
    if (this.port.isOpen) {
      this.port.write(`${command}\n`, (err) => {
        if (err) {
          console.error('Error al enviar el comando:', err.message);
        } else {
          console.log(`Comando "${command}" enviado al Arduino.`);
        }
      });
    } else {
      console.error('El puerto serial no está abierto.');
    }
  }

  // Métodos para cada movimiento de la mano
  abrir() {
    this.sendCommand('abrir');
  }

  cerrar() {
    this.sendCommand('cerrar');
  }

  contar() {
    this.sendCommand('contar');
  }

  regresivo() {
    this.sendCommand('regresivo');
  }

  saludo() {
    this.sendCommand('saludo');
  }

  pistola() {
    this.sendCommand('pistola');
  }

  sigsag() {
    this.sendCommand('sigsag');
  }

  groseria() {
    this.sendCommand('groseria');
  }
}

module.exports = ArduinoService;
