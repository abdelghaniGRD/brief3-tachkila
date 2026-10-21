# Tachkila — Atlas FC Lineup Builder

Tachkila is a responsive web application for managing an amateur football squad and building a starting lineup in a 4-4-2 formation. It is being developed as a learning project focused on HTML, CSS, JavaScript DOM manipulation, event handling, form validation, and responsive design.

## Project status

The project is currently an early interface scaffold. The page has a header, a squad sidebar, a 12 × 9 CSS Grid area, and a small custom stylesheet. The player management and lineup interactions described below are planned work and are not implemented yet.

## Planned features

- Add, edit, and delete players with a name, shirt number, and role.
- Show players on the bench and assign them to compatible, vacant positions in a 4-4-2 formation.
- Return players to the bench and keep squad and pitch counts in sync.
- Validate player details, including unique shirt numbers.
- Save the squad and lineup in `localStorage` so they persist after refresh.
- Provide responsive layouts and accessible, clear feedback for user actions.

- Planification in jira:

Optional enhancements include filtering by role, automatic placement, highlighting a player's pitch position, and drag-and-drop placement.

## Roles and formation

The planned role groups are goalkeeper (GB), defender (DEF), midfielder (MIL), and attacker (ATT). The pitch will contain eleven positions: one goalkeeper, four defenders, four midfielders, and two attackers. A player can only occupy a vacant position that matches their role.

## Tech stack

- HTML5
- CSS3, including CSS Grid
- Tailwind CSS via its CDN
- Vanilla JavaScript using DOM APIs
- Browser `localStorage` for persistence (planned)

## Run locally

No build step or package installation is currently configured. Open `index.html` directly in a browser, or serve the project directory with any local static web server. An internet connection is needed for Tailwind CSS to load from its CDN.

## Project files

```text
.
├── images/       # Image assets used by the page
├── index.html    # Page structure and Tailwind CDN reference
├── index.js      # JavaScript entry point
├── style.css     # Custom CSS, including the field grid
└── README.md
```

## Development plan

The brief schedules the work over seven days: build the page structure and grid, add the player form and validation, implement placement and squad actions, then add persistence, responsive refinements, and optional features. The target submission includes a GitHub repository and a Vercel deployment.

## Project brief

The application is for Atlas FC coaches preparing a lineup. It aims to keep the player list, position assignments, and pitch display consistent while making routine lineup changes quick and intuitive.
