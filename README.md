# La Ventana Frontend

[![My Skills](https://skillicons.dev/icons?i=next,git,docker,ts,pnpm)](https://skillicons.dev)

![React](https://img.shields.io/badge/React-17.0.2-blue?style=flat-square&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-12.0.7-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4.3-blue?style=flat-square&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-20.10.7-blue?style=flat-square&logo=docker&logoColor=white)
![NextUI](https://img.shields.io/badge/NextUI-2.4.8-blue?style=flat-square&logo=nextui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-4.1.17-blue?style=flat-square&logo=framer&logoColor=white)

## Table of Contents

- [Features](#features)
- [Sections](#sections)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Running with Docker](#running-with-docker)

## Features

- Modern and responsive user interface.
- Multi-language support.
- Reusable components.
- Integration with Next.js for routing and performance optimization.

## Sections

- Services

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **NextUI**: UI component library for React.
- **Framer Motion**: Library for animations in React.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Docker**: Containerization platform to run applications in isolated environments.

## Project Structure

The project structure is as follows:

la-ventana-front/
├── public/ # Static files
│ ├── argentina.png # Flag image
│ └── README.md # Documentation for the folder
├── src/ # Source code
│ ├── actions/ # State management actions
│ ├── components/ # User interface components
│ │ ├── custom/ # Custom components
│ │ ├── modules/ # Modular components
│ │ ├── navbar/ # Navigation bar component
│ │ └── ui/ # UI components
│ ├── constants/ # Constants used in the application
│ ├── cypress/ # End-to-end tests
│ ├── hooks/ # Custom hooks
│ ├── providers/ # Context providers
│ ├── store/ # Global state management
│ ├── types/ # TypeScript types
│ └── tests/ # Unit tests
├── README.md # Main documentation
└── package.json # Dependencies and scripts

## Installation

To install the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@gitlab.com:ct-team/la-ventana-front.git
   ```

2. Navigate to the project directory:

   ```bash
   cd la-ventana-front
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

## Usage

To start the application in development mode, run:

```bash
pnpm run dev
```

This will start the development server, and you can access the application at <http://localhost:3000>.

## Running with Docker

```bash
docker-compose up -d
```

This command will start the application in detached mode. You can access the application at <http://localhost:3001>.
