# Context API Todo List

A Todo List application I built with React to practice the Context API, component-based architecture, and managing shared application state.

## Live Demo

[View Live Demo](#)

## Technologies

* React
* JavaScript
* CSS
* React Context API
* LocalStorage

## About

This application allows users to add, edit, delete, and mark tasks as completed.

I used the React Context API to manage the todo state globally instead of passing it through multiple components with props. The application also uses `localStorage` to keep the todos saved when the page is refreshed.

The UI is separated into reusable components, with a `TodoForm` for adding tasks and a `TodoItem` for displaying and managing individual tasks.

## What I Learned

While building this project, I practiced:

* React Context API
* Global state management
* Avoiding prop drilling
* Creating reusable components
* CRUD operations
* Managing state with React
* Using `useEffect`
* Working with browser `localStorage`
* Persisting application data between page refreshes

## Running Locally

Clone the repository:

```bash
git clone https://github.com/WeberDotExe/mini-projects.git
```

Go into the project folder:

```bash
cd mini-projects/todolist
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
todolist/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── context/
│   │   └── TodoContext.jsx
│   ├── App.jsx
│   └── ...
├── public/
├── package.json
└── ...
```
