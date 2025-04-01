# FreelanceGuys Pro - Frontend

This repository contains the frontend application for FreelanceGuys Pro, focusing on the landing page, pricing, and contact sections.

The project has been streamlined to remove backend dependencies and unused frontend packages, providing a lighter base for development.

## Tech Stack

*   **Framework:** React (via Vite)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** Shadcn/UI (using Radix UI primitives)
*   **Routing:** React Router DOM
*   **Package Manager:** Yarn 4 (with PnP linker)

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   Yarn 4 (Classic Yarn 1.x might work but PnP setup is preferred)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/WizKid1968/freelance-guys.git
    cd freelance-guys
    ```
2.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
3.  Install dependencies:
    ```bash
    yarn install
    ```

### Running the Development Server

1.  From the `frontend` directory, run:
    ```bash
    yarn dev
    ```
2.  Open your browser and navigate to the URL provided (usually `http://localhost:5173`).

## Project Structure

*   `frontend/src/pages/`: Contains the main page components (App, Contact, Pricing).
*   `frontend/src/components/`: Shared UI components.
*   `frontend/src/extensions/shadcn/`: Shadcn UI component implementations.
*   `frontend/src/lib/`: Utility functions.
*   `frontend/src/router.tsx`: Main router setup.
*   `frontend/src/user-routes.tsx`: Specific route definitions.
*   `frontend/tailwind.config.js`: Tailwind CSS configuration.
*   `frontend/vite.config.ts`: Vite build configuration.
