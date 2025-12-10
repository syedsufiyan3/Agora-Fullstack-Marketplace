# Agora Fullstack Marketplace

### Directory Structure


Agora-Fullstack-Marketplace/
├── client/                     # Frontend Application (Vite + React + TS)
│   ├── src/
│   │   ├── features/           # Feature-based architecture (Domain logic)
│   │   │   ├── auth/           # Login, Register, Protected Routes
│   │   │   ├── products/       # Product listings, details, search
│   │   │   ├── cart/           # Cart state and management
│   │   │   └── orders/         # Checkout and order history
│   │   ├── shared/             # Reusable utilities across features
│   │   │   ├── components/     # Atomic UI components (Buttons, Inputs)
│   │   │   ├── hooks/          # Global hooks (useTheme, useWindowSize)
│   │   │   └── api/            # Axios/Fetch instances & interceptors
│   │   ├── lib/                # Third-party config (Firebase, Stripe, etc.)
│   │   └── tests/              # Client-side integration/E2E tests
│   └── package.json
│
├── server/                     # Backend API (Node/Express/Nest)
│   ├── src/
│   │   ├── modules/            # Domain-driven design modules
│   │   │   ├── auth/           # Auth controllers, services, DTOs
│   │   │   ├── products/       # Product business logic
│   │   │   └── orders/         # Order processing logic
│   │   ├── shared/             # Shared backend utilities
│   │   │   ├── middleware/     # Error handling, Auth guards, Logging
│   │   │   ├── utils/          # Helper functions
│   │   │   └── types/          # Shared interfaces/Zod schemas
│   │   └── app.ts              # Entry point
│   ├── prisma/                 # Database Schema & Migrations
│   └── tests/                  # Backend unit & integration tests
│
└── docs/                       # Project Documentation
    ├── architecture.md         # High-level system design
    └── api-contracts.md        # API specification (Swagger/OpenAPI)