# Table of Contents

1. [Introduction](#introduction)
2. [Step 1: Environment Setup](#step-1-environment-setup)
3. [Step 2: Create a New Directory](#step-2-create-a-new-directory)
4. [Step 3: Initialize the Project](#step-3-initialize-the-project)
5. [Step 4: Install Dependencies](#step-4-install-dependencies)
6. [Step 5: Configure TypeScript](#step-5-configure-typescript)
7. [Step 6: Create Directory Structure](#step-6-create-directory-structure)
8. [Step 7: Add Script Commands](#step-7-add-script-commands)
9. [Step 8: Create server.ts](#step-8-create-serverts)
10. [Step 9: Create Controller and Routes Files](#step-9-create-controller-and-routes-files)
11. [Step 10: Create Configuration File](#step-10-create-configuration-file)
12. [Step 11: Generating the .gitignore File](#step-11-generating-the-gitignore-file)
13. [Conclusion](#conclusion)


I hope this table of contents helps you organize your README file.

## Introduction:

Welcome to this tutorial where we will learn how to generate the initial boilerplate for a backend project using Express
and TypeScript! The boilerplate is a basic structure that allows us to start development quickly without having to set
up everything from scratch. Throughout this tutorial, I will guide you step by step so that you can create your own
project in no time. Let's get started!

## Step 1: Environment Setup

Before we begin, make sure you have Node.js installed on your system. You can download it from the official website if
you don't have it already. Additionally, we'll need a package manager, either npm or yarn. Make sure you have one of
them installed.

## Step 2: Create a New Directory

Create a new directory for your project in the desired location. You can do this from the command line using the
following command:

```
mkdir backend-express-typescript
```

Then, navigate to the newly created directory:

```
cd backend-express-typescript
```

## Step 3: Initialize the Project

In this step, we're going to initialize a new Node.js project in the current directory. Run the following command in the
command line:

```
npm init -y
```

This will create a `package.json` file that will contain the configuration for our project.

## Step 4: Install Dependencies

For our project, we'll need to install Express and TypeScript, as well as some other useful dependencies. Execute the
following commands in the command line to install the dependencies:

```
npm install express
npm install typescript ts-node nodemon @types/node @types/express dotenv rimraf  --save-dev
```

This will install the necessary dependencies and save them in the `package.json` file.

## Step 5: Configure TypeScript

Now, we need to configure TypeScript in our project. Create a file called `tsconfig.json` in the root directory of the
project and paste the following content:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

This configuration tells TypeScript how to compile our code and where to find the source files.

## Step 6: Create Directory Structure

In this step, we'll create the basic directory structure for our project. Create a folder named `

src` in the root
directory, and inside it, create a file named `index.ts` with the following content:

```typescript
import app from './server'
import config from "./config/config";

const PORT = config.app.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
```

This file creates an instance of Express, imports the necessary dependencies, and starts the server on port 4000. We will import and use routes and middlewares from the `server.ts` file in the next step.

## Step 7: Add Script Commands

To facilitate development, we'll add some script commands to the `package.json` file. Open `package.json` and replace
the `"scripts"` object with the following:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rimraf dist && tsc",
    "start": "npm run build && node dist/index.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
}
```

### Scripts in the "package.json" file

- **build**: This script is responsible for building and transpiling TypeScript code to JavaScript. First, it
  uses `rimraf` to safely remove the "dist" folder, ensuring that no old files are left behind. Then, it uses the `tsc`
  command to compile the TypeScript files in the "src" folder and generate the JavaScript files in the "dist" folder.
  This script is typically used before starting the application in production.

- **start**: This script is responsible for starting the application in a production environment. First, it executes
  the "build" script (described above) to ensure that the JavaScript files are up to date in the "dist" folder. Then, it
  uses the `node dist/index.js` command to start the application by running the main JavaScript file located in the "
  dist" folder. This script is useful when you want to run the application in a production environment.

- **dev**: This script is useful during application development. It uses the `nodemon` tool to monitor changes in the
  TypeScript files located in the "src" folder. When a change is detected, `nodemon` executes the `ts-node src/index.ts`
  command to automatically restart the application using the main TypeScript file. This avoids manually restarting the
  application after each change during development.

It's important to note that `nodemon` and `ts-node` are additional dependencies that need to be installed in the project
to use this script.

## Step 8: Create server.ts

In this step, we'll create the `server.ts` file to define routes and middlewares. Create a file named `server.ts` in the `src` directory with the following content:

```typescript
import express from 'express';

import userRoutes from "./routes/user.routes";

const app = express()
app.use(express.json())

app.use("/user", userRoutes )


export default app
```

In this file, we define the routes and their corresponding handlers using the Express router. We export the `app` instance so that it can be imported in the `index.ts` file.

## Step 9: Create Controller and Routes Files

In this step, we will create the `controllers` and `routes` folders and add files for handling user-related routes and controllers.

1. Create a folder named `controllers` inside the `src` directory. This folder will contain the controller files.

2. Inside the `controllers` folder, create a file named `UserController.ts` with the following content:

```typescript
import { Request, Response } from 'express';

// Example controller method for getting all users
export const getAllUsers = (req: Request, res: Response) => {
  // Logic to fetch all users from the database
  // ...

  res.send('Get all users');
};

// Example controller method for creating a new user
export const createUser = (req: Request, res: Response) => {
  // Logic to create a new user in the database
  // ...

  res.send('User created successfully');
};

// Example controller method for updating a user
export const updateUser = (req: Request, res: Response) => {
  const id = req.params.id;
  // Logic to update the user in the database
  // ...

  res.send(`User with ID ${id} updated successfully`);
};

// Example controller method for deleting a user
export const deleteUser = (req: Request, res: Response) => {
  const id = req.params.id;
  // Logic to delete the user from the database
  // ...

  res.send(`User with ID ${id} deleted successfully`);
};
```

In this file, we define controller methods for handling different CRUD operations on users. These methods will be used by the routes.

3. Create a folder named `routes` inside the `src` directory. This folder will contain the route files.

4. Inside the `routes` folder, create a file named `userRoutes.ts` with the following content:

```typescript
import {Routes} from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/UserController';

const userRoutes = Router();

// Routes for getting all users, creating a new user, updating a user, and deleting a user
userRoutes.get('/users', getAllUsers);
userRoutes.post('/users', createUser);
userRoutes.put('/users/:id', updateUser);
userRoutes.delete('/users/:id', deleteUser);

export default userRoutes;
```

In this file, we define the routes for handling user-related operations using the corresponding controller methods.

5. Open the `index.ts` file in the `src` directory and modify it as follows:

```typescript
import app from './server'
import config from "./config/config";

const PORT = config.app.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
```

In this modification, we import the `userRoutes` from the `userRoutes.ts` file and use it in the Express app to handle user-related routes.

Now, the routes and controllers for user CRUD operations are organized in separate files. You can add more routes and controllers for other resources as needed.

## Step 11: Create Configuration File

In this step, we will create a `config` folder with a configuration file that handles environment-specific configurations using the `dotenv` package.

1. Create a folder named `config` inside the `src` directory. This folder will contain the configuration file.

2. Inside the `config` folder, create a file named `config.ts` with the following content:

```typescript
import dotenv from 'dotenv';

type TConfig = {
  [key: string]: EnvironmentConfig;
};

type EnvironmentConfig = {
  app: AppConfig;
};

type AppConfig = {
  PORT: string | number;
};

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.development' });
}

const ENV = process.env.NODE_ENV ?? 'development';

const CONFIG: TConfig = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 4002,
    },
  },
};

export default CONFIG[ENV];
```

In this file, we define a configuration object `CONFIG` that holds environment-specific configurations for the application. The configuration values are retrieved from environment variables using the `dotenv` package. The `CONFIG` object is selected based on the current `NODE_ENV` value (either `'production'` or `'development'`). The `ENV` constant is used to determine which configuration object to export based on the selected environment.

By using this configuration file, you can define different values for the `PORT` variable in the `.env.production` and `.env.development` files.

With this setup, you can easily switch between development and production environments by setting the `NODE_ENV` environment variable accordingly.

Now you have a configuration file that can be used to manage environment-specific configurations in your project.

## Step 10: Generating the .gitignore File

To generate the .gitignore file, follow these steps:

Create a file named .gitignore in the root directory of your project.

Open the .gitignore file and add the following lines:

```gitignore
# Dependency directories
/node_modules

# Compiled output
/dist

# dotenv environment variable files
.env
.env.development.local
.env.development
.env.test.local
.env.production.local
.env.production
.env.local

# IDE and editor files
.vscode/
.idea/

# Log files
logs/
*.log

# Mac OS
.DS_Store
```

**Explanation:**
The .gitignore file is used to specify which files and directories should be ignored by Git when tracking changes in
your project. These ignored files and directories are typically generated during the development process and don't need
to be included in the version control system.

## Conclusion:

Congratulations! You have successfully generated the boilerplate for a backend project using Express and TypeScript.
From here, you can start developing your application by adding more routes, controllers, and business logic. I hope this
tutorial has been helpful to you. Good luck with your project!
