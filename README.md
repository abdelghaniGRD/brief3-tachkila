- Presentation link: https://www.figma.com/deck/QrBP9C1ML8JZdtFcHieENO
- Vercel link: https://vercel.com/abdelghanigrds-projects/tachkila/7HZTYci6vLDwwv7AQKAzZz7WB4RV
- github repo: https://github.com/abdelghaniGRD/brief3-tachkila

# Tachkila — Atlas FC Lineup Builder

Tachkila is a browser-based squad and lineup builder for Atlas FC. It presents an amateur football squad beside a 4-4-2 pitch, with player roles and positions shown on the field.

## Current status

The project is a learning prototype. The interface and JavaScript implement a first pass at adding and editing players, assigning role-compatible field slots, changing assignments, and deleting players. Player data currently lives only in JavaScript memory and resets when the page reloads. The prototype still needs refinement before it can be treated as a complete or production-ready lineup tool.

## Current features

- Add players with a name, role, and shirt number.
- Validate names and shirt numbers in the player form.
- Choose from goalkeeper, defender, midfielder, and attacker roles.
- Assign players to the 11 positions in the 4-4-2 formation.
- Edit or delete players and move them between compatible slots.
- View the squad list and pitch layout in the browser.

## Planned improvements

- Persist the squad and lineup with `localStorage`.
- Improve validation so names with spaces and common punctuation work, and validate consistently while editing.
- Correct edge cases in assignment, deletion, and squad count updates.
- Refine responsive layouts, accessibility, and user feedback.
- Consider optional role filters, automatic placement, and drag-and-drop.

## Formation and roles

The 4-4-2 pitch has eleven positions: one goalkeeper, four defenders, four midfielders, and two attackers. Players are grouped by role and should be assigned only to an open position for that role.

| Role       | Pitch positions |
| ---------- | --------------- |
| Goalkeeper | GB              |
| Defender   | DG, DC, DC, DD  |
| Midfielder | MG, MC, MC, MD  |
| Attacker   | BU, BU          |

## Technology

- HTML5
- CSS3 and CSS Grid
- Tailwind CSS via its CDN
- Vanilla JavaScript and browser DOM APIs
- `localStorage` is planned but not yet implemented

## Run locally

No build step or package installation is configured. Open `index.html` in a browser, or serve the project directory with a local static web server. An internet connection is needed to load Tailwind CSS from its CDN.

## Files

```text
.
├── images/       # Image assets
├── index.html    # Page structure and Tailwind CDN reference
├── index.js      # Player form, validation, list, and pitch interactions
├── style.css     # Custom pitch grid styles
└── README.md
```

## Development plan

The brief outlines a seven-day build covering the page structure and pitch, player form and validation, lineup actions, persistence, and responsive refinements. The target submission includes a GitHub repository and Vercel deployment.

Jira planning board: [Tachkila project board](https://gouroudabdelghani.atlassian.net/jira/software/projects/SCRUM/boards/1?filter=&groupBy=none&atlOrigin=eyJpIjoiNWQ1MzY1Njk3ZDgzNDNkMWJkOTVlZGU4NGJhNmFlNGIiLCJwIjoiaiJ9)
