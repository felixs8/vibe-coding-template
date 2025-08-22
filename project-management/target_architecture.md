# Architecture

## Tech Stack

- Frontend: React with TailwindCSS
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT
- Deployment: Docker + Kubernetes

## High-level Components

- Web frontend serving React app
- REST API backend
- Database schema with books, users, and orders
- Payment service integration

## Data Flows / APIs

1. User requests book list from frontend.
2. Frontend queries `/api/books`.
3. Backend queries PostgreSQL and returns JSON.
4. Payment requests go from backend to provider.

## Risks and Constraints

- Payment provider integration may introduce latency.
- Scalability for catalog search needs to be validated.

## Open Questions

- Should we use GraphQL instead of REST?
- Should we add caching in front of the DB?
