# Arduino Controller API with Node.js and C++

## 🚀 Project Overview
This project is an API developed with Node.js, integrating a C++ module to
control an Arduino. The API allows you to execute commands on an Arduino device
through a simple RESTful interface, making it easy to interface with and control
hardware remotely.

1. Control an Arduino

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Goals](#Goals)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Node.js API:** A robust and modular API built using Express.js.
- **C++ Integration:** Efficient C++ code to handle real-time control of the Arduino, using Node.js' node-gyp for native module integration.
- **Error Handling and Logging:** Ensures reliable performance with comprehensive error handling and logging.
- **RESTful Endpoints:** Simple and intuitive endpoints for controlling Arduino actions, making it accessible from any HTTP client.

## Technologies Used

- **JavaScript**
- **Node.js**
- **Express.js**
- **C++**
- **node-gyp**

## Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

#### Visual Studio Extensions
- [editorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

### Installation

1. Clone the repository:

   ```sh
    git clone https://github.com/Cristianco9/arduino-control-api.git
   ```

2. Navigate to the project directory:

   ```sh
    cd arduino-control-api
   ```

3. Install the development dependencies necessary to run the project:

   ```sh
    npm run dep-dev
   ```

4. To start the development server and run the project, use the following command:

   ```sh
    npm run dev
   ```

## Usage
### 📡

After running the server, you can control the Arduino by sending a GET request
to the /control-arduino endpoint:

   ```
    GET http://host:3399/api/v1/test
   ```

This triggers the C++ module to interact with the Arduino, performing the specified action and logging the results.

## Goals
### 🧠

This API aims to:

- Demonstrate how to create seamless interactions between Node.js and C++.
- Provide a simple, effective way to control Arduino hardware through a web
interface.

## Contributing

Contributions are what make the open-source community such an amazing place to
learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
LinkedIn - [cristianco9](https://www.linkedin.com/in/cristianco9/)

Project Link: [Github]
(https://github.com/Cristianco9/arduino-control-api.git)

---

Feel free to modify this template according to your preferences and add any
additional information that you think might be useful for users and contributors.
