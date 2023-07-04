
# Table of Contents

1. [Introduction](#introduction)
2. [Step 1: Environment Setup](#step-1-environment-setup)
3. [Step 2: Create a New Directory](#step-2-create-a-new-directory)
4. [Step 3: Initialize the Project](#step-3-initialize-the-project)
5. [Step 4: Install Dependencies](#step-4-install-dependencies)
6. [Step 5: Configure TypeScript](#step-5-configure-typescript)
7. [Step 6: Create Directory Structure](#step-6-create-directory-structure)
8. [Step 7: Add Script Commands](#step-7-add-script-commands)
9. [Step 8: Run the Server in Development](#step-8-run-the-server-in-development)
10. [Step 9: Generating the .gitignore File](#step-9-generating-the-gitignore-file)
11. [Conclusion](#conclusion)

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
npm install typescript ts-node nodemon @types/node @types/expres rimraf  --save-dev
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

In this step, we'll create the basic directory structure for our project. Create a folder named `src` in the root
directory, and inside it, create a file named `index.ts` with the following content:

```typescript
import express, {Request, Response} from 'express';

const app = express();
app.use(express.json())

const PORT = 4000;

// Example route using the GET method
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Example route using the POST method
app.post('/users', (req: Request, res: Response) => {
    res.send('User created successfully');
});

// Example route using the DELETE method
app.delete('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`User with ID ${id} deleted successfully`);
});

// Example route using the PUT method
app.put('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`User with ID ${id} updated successfully`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

**GET Method:**

- **URL**: /
- **Description**: This is a basic example of a GET route. It responds to the root URL (/) and returns the message "
  Hello,
  world!".

**POST Method:**

- **URL**: /users
- **Description**: This is an example of a POST route. This route is used to create a new user in your application. This
  is
  where you can add the necessary logic to process the data sent in the POST request and save the new user in your
  database or perform other necessary actions. In the provided example, it simply returns the message "User created
  successfully" as a response.

**DELETE Method:**

- **URL**: /users/:id
- **Description**: This is an example of a DELETE route. It is used to delete a specific user in your application. The :
  id
  parameter in the URL represents the ID of the user to be deleted. You can access this value through req.params.id in
  your route handler. In the provided example, the user ID is used in the response message to indicate that the
  corresponding user has been deleted successfully.

**PUT Method:**

- **URL**: /users/:id
- **Description**: This is an example of a PUT route. It is used to update a specific user in your application. Similar
  to the
  DELETE route, the :id parameter in the URL represents the ID of the user to be updated. You can access this value
  through req.params.id in your route handler. This is where you can add the necessary logic to update the user data in
  your database or perform other necessary actions. In the provided example, the user ID is used in the response message
  to indicate that the corresponding user has been updated successfully.

This file creates an instance of Express, defines a basic route, and starts the server on port 4000.

## Step 7: Add Script Commands

To facilitate development, we'll add some script commands to the `package.json` file. Open `package.json` and replace
the `"scripts"` object with the following:

```json
"scripts": {
"build": "rimraf dist && tsc",
"start": "npm run build && node dist/index.js",
"dev": "nodemon --watch ./src/**/*.ts --exec ts-node src/index.ts"
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

## Step 8: Run the Server in Development

We're ready to run our server! Execute the following command in the command line:

```
npm run dev
```

You should see a message saying "Server running at http://localhost:4000". Now, you can open your browser and visit that
address to see the "Hello, world!" message.

## Step 9: Generating the .gitignore File

To generate the .gitignore file, follow these steps:

Create a file named .gitignore in the root directory of your project.

Open the .gitignore file and add the following lines:

```gitignore
# Dependency directories
/node_modules

# Compiled output
/dist

# Environment variables
.env

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
