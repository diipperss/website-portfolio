# My Portfolio Website

This is the repository for my personal portfolio website, built using [Vite](https://vitejs.dev/) and [React](https://react.dev/). The portfolio showcases my skills, projects, and experiences.

You can view the live version of my portfolio [here](https://diipperss.github.io/website-portfolio/).

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Running the App](#running-the-app)
- [Build and Deployment](#build-and-deployment)
- [License](#license)

## Features

- **Responsive design:** Optimized for both desktop devices.
- **Project showcase:** Displays my top projects with links to GitHub repositories.
- **Skills and experience section:** Highlights my expertise and professional background.
- **Contact:** Allows visitors to get in touch with me directly.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool that provides lightning-fast HMR (Hot Module Replacement) and optimized builds for production.
- **CSS/SCSS**: For custom styles and layout.
- **React Router**: For navigation and routing.
- **GitHub Pages**: For hosting the live website.

## Setup and Installation

To set up this project locally, follow the steps below:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Diipperss/website-portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd website-portfolio
   ```

3. **Install the dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

## Running the App

To run the app locally in development mode with Vite, use the following command:

```bash
npm run dev
```

This will start the Vite development server. You can then open your browser and go to `http://localhost:5173` to view the app.

## Build and Deployment

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build of the project in the `dist` folder.

To deploy the website to GitHub Pages, follow these steps:

1. Ensure your `vite.config.js` file is properly configured for deployment, especially the `base` option:
   ```js
   base: '/website-portfolio/'
   ```

2. Push the `dist` folder to the `gh-pages` branch using the following command:
   ```bash
   npm run deploy
   ```

The site will then be live at [https://diipperss.github.io/website-portfolio/](https://diipperss.github.io/website-portfolio/).

## License

This project is open-source and available under the [MIT License](LICENSE).
