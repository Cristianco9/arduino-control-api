document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.gesture-button');
  const commandList = document.getElementById('commandList');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const command = button.getAttribute('data-command');
      fetch('/app/v1/arduino/test/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      })
      .then(response => response.json())
      .then(data => {
        // Crear el elemento de lista para el comando y la respuesta
        const listItem = document.createElement('li');

        // Crear elementos separados para el comando y la respuesta
        const commandElement = document.createElement('div');
        commandElement.textContent = `Comando: ${command}`;
        commandElement.style.fontWeight = 'bold'; // Opcional, para resaltar el comando

        const responseElement = document.createElement('div');
        responseElement.textContent = `Respuesta: ${data.message}`;
        responseElement.style.marginTop = '0.5rem'; // Espacio entre el comando y la respuesta

        // Añadir los elementos al listItem
        listItem.appendChild(commandElement);
        listItem.appendChild(responseElement);

        // Añadir el listItem completo a la lista de comandos
        commandList.appendChild(listItem);
      })
      .catch((error) => {
        const listItem = document.createElement('li');

        // Crear el mensaje de error en elementos separados
        const commandElement = document.createElement('div');
        commandElement.textContent = `Comando: ${command}`;
        commandElement.style.fontWeight = 'bold';

        const responseElement = document.createElement('div');
        responseElement.textContent = 'Respuesta: Error al procesar la solicitud';
        responseElement.style.marginTop = '0.5rem';

        listItem.appendChild(commandElement);
        listItem.appendChild(responseElement);

        commandList.appendChild(listItem);
      });
    });
  });
});
