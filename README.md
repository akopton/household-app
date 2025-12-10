# 🏠 Household App

A modern household management application built with Next.js, Prisma, and NextAuth.

## 📋 Project Overview

This application helps users manage household tasks, members, and activities. Built as a monorepo with pnpm workspaces.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (Credentials + OAuth)
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Language**: TypeScript

## 📁 Project Structure

```
household-app/
├── apps/
│   └── web/              # Main Next.js application
│       ├── src/
│       │   ├── app/      # App router pages
│       │   ├── components/
│       │   ├── lib/      # Utilities
│       │   └── types/    # TypeScript definitions
│       └── prisma/       # Database schema
├── packages/
│   └── shared/           # Shared utilities
└── README.md
```

## ✅ Completed Features

### Authentication System

- [x] User registration with email and password
- [x] Password hashing with bcryptjs (12 rounds)
- [x] Login with email OR username
- [x] JWT-based sessions
- [x] Profile management (username, display name)
- [x] Protected routes and API endpoints
- [x] Session management with NextAuth

### Database Schema

- [x] User model with authentication fields
- [x] Household model
- [x] Task model
- [x] Prisma client configuration
- [x] Database migrations setup

### API Endpoints

- [x] `POST /api/auth/register` - User registration
- [x] `POST /api/auth/[...nextauth]` - NextAuth endpoints
- [x] `PATCH /api/user/profile` - Update user profile

### UI Components

- [x] Registration form
- [x] Login form (planned)
- [x] Dashboard page
- [x] Profile settings (planned)

## 🚧 In Progress

- [ ] Login page UI
- [ ] Profile settings page
- [ ] Dashboard layout and navigation

## 📝 Planned Features

### Core Features

- [ ] Household creation and management
- [ ] Invite members to household
- [ ] Task creation and assignment
- [ ] Task completion tracking
- [ ] Task scheduling and recurring tasks
- [ ] Notifications system

### User Features

- [ ] User avatar upload
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Account settings page
- [ ] Activity log

### Household Features

- [ ] Multiple households per user
- [ ] Household roles (owner, admin, member)
- [ ] Household settings
- [ ] Member management
- [ ] Leave/delete household

### Task Features

- [ ] Task categories
- [ ] Task priority levels
- [ ] Task due dates and reminders
- [ ] Task comments
- [ ] Task history
- [ ] Task templates

### Advanced Features

- [ ] Real-time updates (WebSockets/Server-Sent Events)
- [ ] Mobile responsive design
- [ ] Dark mode
- [ ] Export data (CSV, PDF)
- [ ] Analytics dashboard
- [ ] Integration with calendar apps

### Future Plans

- [ ] Mobile app

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- PostgreSQL database

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd household-app

# Install dependencies
pnpm install

# Set up environment variables
cd apps/web
cp .env.example .env.local
# Edit .env.local with your database URL and secrets

# Generate Prisma client
pnpm prisma generate

# Run database migrations
pnpm prisma db push

# Start development server
pnpm dev
```

### Environment Variables

Create `apps/web/.env.local`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/household_app"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

## 📊 Database Schema

### Current Models

**User**

- id, email, password, username, name
- timestamps (createdAt, updatedAt)

**Household**

- id, name, ownerId
- timestamps

**Task**

- id, name, householdId, dueDate
- timestamps

## 🔐 Authentication Flow

1. **Registration**: Email + Password → Hash → Create User → Auto-login
2. **Login**: Email/Username + Password → Verify → JWT Session
3. **Profile Update**: Set username/name → Validate → Update DB

## 📈 Development Progress

### Sprint 1 (Completed)

- ✅ Project setup and configuration
- ✅ Database schema design
- ✅ Authentication system implementation
- ✅ Basic user registration and login

### Sprint 2 (Current)

- 🔄 Complete authentication UI
- 🔄 Dashboard layout
- 🔄 Profile management

### Sprint 3 (Planned)

- Household creation and management
- Member invitation system
- Basic task CRUD operations

## 🧪 Testing

```bash
# Run tests (when implemented)
pnpm test

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## 📝 Development Notes

### Recent Changes

- **2025-12-10**: Implemented NextAuth with Credentials provider
- **2025-12-10**: Added user registration and profile update APIs
- **2025-12-10**: Created dashboard page with authentication

### Known Issues

- [ ] Need to implement login page UI
- [ ] Profile settings form needs to be created
- [ ] Email verification not yet implemented

### Technical Decisions

- **JWT Sessions**: Chose JWT over database sessions for better performance and scalability
- **bcrypt**: Using 12 rounds for password hashing (strong security)

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

Private project - All rights reserved

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated**: December 10, 2025
