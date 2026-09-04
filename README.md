# Web Tools

A lightweight browser-based toolkit for common developer tasks.

The application provides UUID utilities and a word abbreviation tool in a compact React interface. It is fully client-side: no backend, authentication, or external API is required.

[Live demo](https://hedgerock.github.io/tools/)

## Features

### UUID Toolkit

- Generate UUID versions `v1`, `v4`, `v6`, and `v7`
- Display `NIL` and `MAX` UUID constants
- Validate a UUID entered by the user
- Detect the version of a valid UUID
- Copy generated values with one click
- Save generated UUIDs in local history

### Word Abbreviation

- Convert long words to developer-style abbreviations
- Example: `Kubernetes` → `k8s`
- Preserve the first and last characters while replacing middle characters with their count
- Copy the generated abbreviation
- Save useful abbreviations in history

### User Experience

- Open, hide, and expand individual tools
- Persist tool layout and operation history in `localStorage`
- View contextual information for available operations
- Use reusable controls and shared UI components across tools

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite 7 |
| State management | Redux Toolkit, React Redux |
| UUID handling | `uuid` |
| Styling | CSS |
| Code quality | ESLint |
| Deployment | GitHub Pages |

## Architecture

```text
React application
      │
      ▼
Redux Toolkit store
      │
      ├── Tool visibility and layout state
      └── Tool operation history
      │
      ▼
Reusable tool components, hooks, contexts, and HOCs
      │
      ▼
Browser localStorage
```

The project separates UI components, business logic hooks, shared utilities, Redux state, reusable higher-order components, and TypeScript types.

## Project Structure
```text
src/
├── components/
│   ├── tools/              # UUID and abbreviation tools
│   ├── toolIcons/          # Tool navigation controls
│   └── utilityComponents/  # Shared tool components
├── constants/              # Tool configuration and static data
├── hoc/                    # Reusable higher-order components
├── hooks/                  # Shared React hooks
├── redux/                  # Redux Toolkit store and slices
├── types/                  # Shared TypeScript types
├── ui/                     # Reusable UI primitives
└── utils/                  # localStorage and formatting helpers
```

## Run Locally

### Prerequisites
- Node.js 20 or newer
- npm
  
### Installation
```bash
git clone https://github.com/Hedgerock/tools.git
cd tools
npm install
```

### Development Server
```bash
npm run dev
```

Open the local URL provided by Vite, usually http://localhost:5173.

### Production Build
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Deployment
The application is configured for GitHub Pages.
```bash
npm run build
npm run deploy
```

The production build is published from the dist directory.

## What This Project Demonstrates
- React and TypeScript development
- Component composition and reusable UI architecture
- State management with Redux Toolkit
- Custom hooks and React Context
- Client-side persistence with localStorage
- Vite-based development and production builds
- GitHub Pages deployment

## Author
Dmytro Vasyliev — Java / Full-stack Developer
- GitHub: [Hedgerock](https://github.com/Hedgerock)
- LinkedIn: [dmitro-vasyliev-215334236](https://www.linkedin.com/in/dmitro-vasyliev-215334236/)
- Telegram: [@Hedgerock](https://t.me/Hedgerock)
