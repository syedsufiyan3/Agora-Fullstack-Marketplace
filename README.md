# Agora-Fullstack-Marketplace 

## Rough Architecture

ecommerce-platform/
├── client/                 # Vite + React + TS
│   ├── src/
│   │   ├── features/       # Feature-based, not folder-type
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   ├── cart/
│   │   │   └── orders/
│   │   ├── shared/         # Reusable across features
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── api/
│   │   └── lib/            # Config, utils
│   └── tests/
├── server/
│   ├── src/
│   │   ├── modules/        # Domain-driven
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   └── orders/
│   │   ├── shared/
│   │   │   ├── middleware/
│   │   │   ├── utils/
│   │   │   └── types/
│   │   └── app.ts
│   ├── prisma/
│   └── tests/
└── docs/
    ├── architecture.md
    └── api-contracts.md