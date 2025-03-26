# Mellifera - Simple TODO App

Mellifera is a straightforward TODO application for managing your daily tasks. While offering some additional features, at its core this is a simple task management tool designed with a clean and intuitive interface.

## About the Business

Mellifera is primarily a TODO app that helps you:

- Organize and track your pending tasks
- Create simple checklists
- Prioritize your activities
- Enjoy a clean interface with light/dark mode support

The application focuses on simplicity and ease of use, providing just what you need for basic task management without unnecessary complexity.

## Technologies Used

### Frontend
- **React** (v18.2.0): JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for more robust development
- **Vite**: Fast build tool for modern development
- **React Router** (v6.22.3): Routing for React applications
- **Tailwind CSS**: Utility-first CSS framework for rapid responsive design
- **React Icons**: Icon library for React

### Technical Features
- Component-based architecture
- State management with Context API
- Communication with RESTful API
- Support for dark/light mode
- Responsive design

### Development Tools
- ESLint: Linter to identify and report patterns in JavaScript/TypeScript code
- Prettier: Code formatter to maintain consistency
- TypeScript: For static typing and better development
- PostCSS: Tool for transforming CSS with JS plugins

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Configure environment variables (copy .env.example to .env)
4. Start the development server:
   ```
   yarn dev
   ```

## Available Scripts

- `yarn dev`: Starts the development server
- `yarn build`: Compiles the application for production
- `yarn lint`: Runs the linter to check code quality
- `yarn preview`: Previews the production version locally

## Project Structure

The project follows an organized structure with a clear separation of responsibilities:

- `/src/components`: Reusable components
- `/src/pages`: Page components
- `/src/context`: React contexts for state management
- `/src/interfaces`: TypeScript type definitions
- `/src/api`: Services for backend communication
- `/src/hooks`: Custom hooks
- `/src/utils`: Common utilities
- `/src/routers`: Route configuration