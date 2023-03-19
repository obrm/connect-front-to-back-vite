# Connect Front to Back - MERN Stack Project

This repository contains a MERN (MongoDB, Express, React, Node) stack project that demonstrates how to connect a front-end React application to a back-end Node/Express API. It can serve as a boilerplate project for a MERN stack application, providing a solid foundation for building scalable and maintainable applications. 
The project is based on the following tutorial I wrote: [MERN Stack Project Setup Guide - Step by Step Cheat Sheet.](https://medium.com/@obrm770/mern-stack-project-setup-guide-step-by-step-cheat-sheet-25fae8d08a9a)


## Table of Contents 

- [Connect Front to Back - MERN Stack Project](#connect-front-to-back---mern-stack-project)
- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

#### Prerequisites

Before you start, ensure you have the following installed:

* [Node.js](https://nodejs.org/en/download) (v14.x or later)
* [npm](https://www.npmjs.com/get-npm) (v7.x or later)
* [yarn](https://classic.yarnpkg.com/lang/en/docs/install) (v1.x or later)

#### Setup

To set up the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/obrm/connect-front-to-back.git
```

2. Install the necessary dependencies:

```bash
npm install
```

3. Create a config.env file in the config directory:

```bash
cd config
touch config.env
```  
4. Add the following lines to your config.env file:
```env
NODE_ENV=development
PORT=5000
```

6. Navigate to the client directory:
```bash
cd ..
cd client
```
7. Install the necessary dependencies[^1]:
```bash
yarn
```

#### Running the Application

To run the application, in the root directory, start the Node/Express server and the react application concurrently:

```bash
npm run dev
```
The server will be running on `http://localhost:5000` and the React Vite application will be running on `http://localhost:5173`.

Now you have both the front-end and back-end servers running. You can interact with the application through the browser on `http://localhost:5173` and see how the front-end React app communicates with the back-end Node/Express API.

#### Contributing

We welcome contributions to this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push the changes to the new branch: `git push origin <branch_name>`.
5. Create a pull request.

Please ensure your code adheres to the existing style and that you properly document your changes.

## License

This project is licensed under the MIT License. 

[^1]: If you don't have yarn installed on your machine, then first run: `npm install -g yarn`.
