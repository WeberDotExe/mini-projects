# Interactive Bubble Game

A simple browser game I built to practice JavaScript event handling, event delegation, and DOM manipulation.

## Live Demo

[View Live Demo](#)

## Technologies

* HTML5
* CSS3
* JavaScript

## About

The game generates a grid of numbered bubbles and gives the player a target number to find. The goal is to click the matching bubble before the 60-second timer runs out.

Instead of attaching an event listener to every bubble, I used **event delegation** by adding a single listener to the parent container. The bubbles are also regenerated dynamically whenever the player finds the correct number.

## What I Learned

While building this project, I practiced:

* Event delegation
* Event bubbling
* DOM manipulation
* `setInterval()` and countdown timers
* Generating dynamic content with JavaScript
* Handling click events
* Updating the score and game state

## Running Locally

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into the project folder:

```bash
cd mini-projects/Bubble-game
```

Then open `index.html` in your browser.

## Project Structure

```text
Bubble-game/
├── index.html
├── style.css
├── script.js
└── ...
```
