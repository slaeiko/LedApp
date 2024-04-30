# Controlador de Intensidad LED

## Descripción
Este proyecto permite controlar la intensidad de un LED utilizando un Arduino Mega y una interfaz web alojada localmente. Mediante un deslizador en la página web, los usuarios pueden ajustar la intensidad del LED en tiempo real. Este sistema es ideal para aprender sobre la interacción entre hardware (Arduino) y software (Node.js y HTML/CSS) en proyectos de IoT.

## Características
- **Control en tiempo real:** Ajusta la intensidad del LED desde una interfaz web.
- **Interfaz amigable:** La página web incluye un deslizador fácil de usar con estilos CSS modernos.
- **Comunicación Serial:** Utiliza comunicación serial para enviar comandos entre el servidor Node.js y el Arduino.

## Tecnologías Utilizadas
- **Arduino Mega:** Controla el hardware y ejecuta el código de firmware.
- **Node.js:** Crea un servidor local que facilita la comunicación entre la página web y el Arduino.
- **HTML/CSS:** Construye y estiliza la interfaz de usuario.
- **JavaScript:** Maneja la lógica de interacción en el cliente y las peticiones al servidor.

## Configuración
### Hardware
1. Conecta un LED al pin 11 de tu Arduino Mega utilizando una resistencia de 220 ohmios para limitar la corriente.
2. Conecta el Arduino Mega a tu computadora mediante un cable USB.

### Software
1. Asegúrate de tener instalado Node.js en tu computadora.
2. Clona este repositorio a tu máquina local.
3. Instala las dependencias necesarias con `npm install`.

## Ejecución
1. Sube el script de Arduino proporcionado en la carpeta `arduino` al Arduino Mega.
2. Ejecuta el servidor Node.js con `node server.js` desde la línea de comandos.
3. Abre un navegador y accede a `http://localhost:3000` para interactuar con la interfaz de control del LED.

