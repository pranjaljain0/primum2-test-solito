# Solito + NativeWind

## About

 a starter for an  app using [NativeWind](https://nativewind.dev) for its styling & [Solito](https://solito.dev) for navigation.

## Multi-Step Form

Deployed on [Vercel](https://vercel.com/) at [primum-test-2.vercel.app](https://primum2-test-solito-next.vercel.app/)

## Watch it in action

* [Web](https://youtu.be/sJ5tNp03sEY)
* [Native](https://youtu.be/XnU242a7s3k)

You can find the [Screenshots](https://github.com/pranjaljain0/primum2-test-solito/tree/main/Media) here.

This monorepo is a multi-step form built with solito a Expo + Next.js framework it includes custom & platform specific components, form validation and a summary page. Users can complete each step of the form, go back to a previous step to update their selections, see a summary of their selections on the final step, and confirm their order.

## Getting Started

To get started, clone this repository and run yarn install to install the necessary dependencies. Then, run `yarn web` to start the development server for web & `yarn native` for expo developement server. The web application should be available at <http://localhost:3000>, and you can access the expo application in a simulator.

## Prerequisites

This project requires Node.js, npm & yarn to be installed on your system.

## Installation

To install the dependencies for this project, run:

```bash
yarn install
```

## Running the Project

To run the project in web development mode, run:

```bash
yarn web
```

To run the project in app development mode, run:

```bash
yarn native
```

## Tech Stack

This project was built using the following technologies:

### Frontend

* React
* Next.js
* TypeScript
* React Hook Form
* Zod
* Tailwind CSS

### Frontend, Mobile

* React Native
* Expo
* TypeScript
* Solito
* Moti

### Backend

* Deployment at Vercel

### Development, Build, and Testing

* ESLint
* Prettier
* Jest
* Testing Library
* Cypress/Playwright

## Code Quality

The code for this project is well-organized, follows best practices, and is easy to understand. Proper error handling and validation are implemented, and code comments are included with semantic commit messages.

## User Experience

The UX of this project is visually appealing, responsive, and adheres to the chosen project design. The form includes hover and focus states for all interactive elements on the page.

## Functionality and Performance

This project is fully functional, with no major bugs or performance issues. The form includes form validation messages if a field has been missed, the email address is not formatted correctly, or a step is submitted but no selection has been made. The layout is optimized for different screen sizes, and animations are used to enhance the user experience.
