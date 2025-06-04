# Default ReactJS Project

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm start              # Start development server with Vite
npm run debug          # Start with HMR debugging
```

### Building

```bash
npm run build          # Build for production
npm run build-profile  # Build with profiling enabled
npm run start:prod     # Build and serve production bundle
```

### Testing & Preview

```bash
npm test               # Preview the built application
npm run test:generators # Test code generators
```

---

## 📜 Available Scripts

### 🔧 Development Scripts

| Script       | Command              | Description                          |
| ------------ | -------------------- | ------------------------------------ |
| `start`      | `npm start`          | Start development server with Vite   |
| `debug`      | `npm run debug`      | Start development with HMR debugging |
| `test`       | `npm test`           | Preview the built application        |
| `start:prod` | `npm run start:prod` | Build and serve production bundle    |

### 🏗️ Build Scripts

| Script                   | Command                          | Description                                      |
| ------------------------ | -------------------------------- | ------------------------------------------------ |
| `build`                  | `npm run build`                  | Build for production with TypeScript compilation |
| `build-profile`          | `npm run build-profile`          | Build with bundle analyzer profiling             |
| `prebuild`               | Automatic                        | Generate build version before building           |
| `generate-build-version` | `npm run generate-build-version` | Generate build version file                      |

### 🧪 Testing & Quality Scripts

| Script            | Command                   | Description                            |
| ----------------- | ------------------------- | -------------------------------------- |
| `test:generators` | `npm run test:generators` | Test the code generators               |
| `checkTs`         | `npm run checkTs`         | Type check TypeScript without emitting |

### 🔍 Linting & Code Quality

| Script     | Command            | Description                   |
| ---------- | ------------------ | ----------------------------- |
| `lint`     | `npm run lint`     | Lint source code with ESLint  |
| `lint:fix` | `npm run lint:fix` | Lint and auto-fix source code |
| `lint:css` | `npm run lint:css` | Lint CSS files with Stylelint |
| `eslint`   | `npm run eslint`   | Base ESLint command           |
| `prettify` | `npm run prettify` | Format code with Prettier     |

### ⚙️ Code Generation

| Script     | Command            | Description                                      |
| ---------- | ------------------ | ------------------------------------------------ |
| `generate` | `npm run generate` | Generate components, containers, etc. using Plop |

### 📦 Release & Version Management

| Script        | Command             | Description                                |
| ------------- | ------------------- | ------------------------------------------ |
| `release`     | `npm run release`   | Create a new release with standard-version |
| `preversion`  | Automatic           | Run checks before version bump             |
| `version`     | Automatic           | Generate build version and stage files     |
| `postversion` | Automatic           | Push changes and tags to repository        |
| `changelog`   | `npm run changelog` | Generate changelog                         |

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t react-app .
```

### Run Container

```bash
docker run -it -p 80:80 -d --name react-app react-app
```

---

## 🛠️ Tech Stack

### Core Technologies

- **TypeScript** - Type-safe development
- **React 18.2.0** - Component-based UI framework
- **Redux Toolkit** - Modern Redux state management
- **Redux Saga** - Side effect management
- **Vite** - Fast build tool and development server

### Styling & UI

- **Styled Components** - CSS-in-JS styling
- **Ant Design** - React UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Sanitize.css** - CSS reset

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Plop** - Code generator
- **TypeScript** - Static type checking

### Testing & Quality

- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities
- **Stylelint** - CSS linting

### Additional Features

- **React Router** - Client-side routing
- **React i18next** - Internationalization
- **React Helmet** - Document head management
- **Axios** - HTTP client
- **React Dropzone** - File upload
- **FontFaceObserver** - Web font loading

---

## 📁 Project Structure

```
src/
├── app/                 # Redux store configuration
├── components/          # Reusable components
├── containers/          # Connected components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── locales/            # Internationalization files
└── styles/             # Global styles
```

---

## 🔧 Code Generation

Generate new components, containers, or other code structures:

```bash
npm run generate
```

This will start an interactive CLI to help you create:

- React components
- Redux containers
- Saga files
- And more...

---

## 📝 License

This project is licensed under the MIT license.
For more information see `LICENSE.md`.

---

<sub><i>Keywords: TypeScript, React.js, Redux, Vite, Hot Reloading, ESNext, Babel, react-router, ServiceWorker, styled-components, redux-saga, Docker, Nginx, Ant Design, Tailwind CSS</i></sub>
