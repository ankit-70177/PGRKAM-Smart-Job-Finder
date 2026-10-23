# PGRKAM Smart Job Finder

A desktop-based job discovery application built with **React, Vite, and Electron**. PGRKAM Smart Job Finder provides a simple dashboard where candidates can explore job opportunities, save jobs, manage their skills, view skill-match percentages, and discover training programs.

This academic project demonstrates desktop application development and job discovery workflows inspired by the Punjab Ghar Ghar Rozgar and Karobar Mission (PGRKAM) employment platform.

## Features

- **Job Search:** Search opportunities by job title, company name, or location.
- **Category Filters:** Filter opportunities by employment type, including full-time jobs and internships.
- **Saved Jobs:** Bookmark jobs and view or remove saved opportunities.
- **Job Details:** View job information, employment type, location, salary, and required skills.
- **Candidate Skills Profile:** Add and remove skills from a candidate profile.
- **Skill Matching:** Calculate a rule-based percentage match between candidate skills and job requirements.
- **Location Filtering:** Filter sample job opportunities by city.
- **Skill Development:** Browse sample training programs with links to external learning resources.
- **Job Alerts:** Display an in-app demonstration alert containing job information.
- **Local Storage:** Store saved jobs and candidate skills in the application's browser storage.
- **Desktop Interface:** Run the React application inside an Electron desktop window.
- **Single-Command Startup:** Start the frontend development server and Electron application from the project root using one command.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript | Application logic and interactivity |
| Vite | Frontend development server and build tool |
| Electron | Desktop application framework |
| HTML5 | Application structure |
| CSS3 | Styling and responsive layouts |
| Browser Local Storage | Local persistence for saved jobs and candidate skills |
| Node.js and npm | JavaScript runtime and package management |
| concurrently | Running development processes together |
| wait-on | Waiting for the frontend server before launching Electron |
| Git and GitHub | Version control and project collaboration |

## Project Structure

```text
PGRKAM-Smart-Job-Finder/
├── electron/
│   ├── main.js
│   └── preload.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── JobCard.jsx
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure above describes the main project files. Some files or folders may vary depending on the latest implementation.*

## Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) — preferably an active LTS version.
- npm — included with Node.js.
- [Git](https://git-scm.com/) — for cloning the repository.

Verify your installation:

```bash
node -v
npm -v
git --version
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ankit-70177/PGRKAM-Smart-Job-Finder.git
cd PGRKAM-Smart-Job-Finder
```

### 2. Install root dependencies

From the project root, run:

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Install the development process utilities

If they are not already listed in the root `package.json`, install:

```bash
npm install --save-dev concurrently wait-on
```

These utilities allow the frontend and Electron application to start together.

## Run the Application

### Start with one command

Open a terminal in the project's root directory and run:

```bash
npm start
```

This command should:

1. Start the React frontend using Vite.
2. Wait until the frontend server is available at `http://localhost:5173`.
3. Launch the Electron desktop window.
4. Display the application inside the desktop window.

Keep the terminal running while using the application. Press `Ctrl + C` in the terminal to stop the development processes.

### Root `package.json` configuration

For one-command startup, ensure your root `package.json` contains the following script:

```json
{
  "main": "electron/main.js",
  "scripts": {
    "start": "concurrently -k \"npm run dev --prefix frontend\" \"wait-on http://localhost:5173 && electron .\""
  }
}
```

**Important:** This is the relevant configuration, not necessarily your entire `package.json`. Preserve your existing dependencies and any other scripts. The Vite port and the URL loaded in `electron/main.js` must match.

## Development Workflow

The project uses separate frontend and desktop-process code.

- **Frontend:** React components and pages are located in `frontend/src/`.
- **Electron main process:** `electron/main.js` creates and manages the desktop window.
- **Electron preload:** `electron/preload.js` exposes selected desktop capabilities to the frontend through a controlled bridge.
- **Styling:** Application styles are maintained in the frontend CSS files.
- **Persistence:** Saved jobs and candidate skills are stored locally using browser Local Storage.

After making frontend changes, Vite can update the interface during development. Restart the application if changes to Electron's main-process configuration require it.

## How the Application Works

1. Candidates open the desktop application.
2. They search and filter the available sample job listings.
3. They open job details to review information about an opportunity.
4. They save interesting jobs for later reference.
5. They manage their skills and view rule-based job-match percentages.
6. They explore sample training programs to identify potential learning opportunities.
7. They can test the in-app job alert demonstration.

## Current Limitations

- Job listings and training programs use illustrative sample data.
- Job listings use illustrative sample data. Apply Now opens the general PGRKAM private-jobs page and does not guarantee a direct application link for each sample vacancy.
- Location filtering uses predefined cities rather than live GPS coordinates.
- Skill matching is rule-based and does not use a trained machine-learning model.
- Job alerts currently use an in-app demonstration alert; automatic live vacancy notifications are not implemented.
- User data is stored locally rather than in a remote database.
- The application does not currently provide authenticated candidate or employer accounts.
- A production backend and integration with official government employment data are not yet implemented.

## Future Improvements

- Integrate verified job listings and official government employment services.
- Add secure candidate and employer authentication.
- Implement GPS-based opportunity discovery.
- Develop a backend API and database for job listings and user profiles.
- Add personalized job recommendations.
- Implement automated notifications for new and relevant vacancies.
- Improve skill matching using more advanced recommendation techniques.
- Add testing, validation, and production-ready error handling.

## Project Purpose

PGRKAM Smart Job Finder is an academic prototype developed to demonstrate desktop application development using React, Vite, and Electron. It brings together essential job discovery features in a desktop interface and provides a foundation for future integration with real employment services.

## Author

**Ankit Kumar**

GitHub: [ankit-70177](https://github.com/ankit-70177)

## Disclaimer

This project is an academic prototype inspired by the PGRKAM employment platform. It is not an official PGRKAM application and is not affiliated with or endorsed by the Government of Punjab. Job listings, salaries, training programs, and application links shown in the prototype may be illustrative rather than real.
