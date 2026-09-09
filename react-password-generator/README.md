# React Password Generator

A password generator I built with React to practice React Hooks, state management, and working with browser APIs.

## Live Demo

[View Live Demo](#)

## Technologies

* React
* JavaScript
* CSS
* Clipboard API

## About

This application allows users to generate passwords by choosing a password length and deciding whether to include numbers and special characters.

The password is regenerated automatically whenever the selected options change. I also added a copy button that uses the browser's Clipboard API to let users quickly copy the generated password.

## What I Learned

While building this project, I practiced:

* Managing state with `useState`
* Optimizing functions with `useCallback`
* Running side effects with `useEffect`
* Using `useRef`
* Working with the Clipboard API
* Handling user input and configuration options
* Generating dynamic content based on state

## Running Locally

Clone the repository:

```bash
git clone https://github.com/WeberDotExe/mini-projects.git
```

Go into the project folder:

```bash
cd mini-projects/react-password-generator
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Project Structure

```text
react-password-generator/
├── src/
│   ├── App.jsx
│   └── ...
├── public/
├── package.json
└── ...
```
