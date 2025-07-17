# Portfolio Website - Replit.md

## Overview

This is a portfolio website for Vidyapati Kumar, a PhD candidate in Mechanical Engineering specializing in AI-based biomechatronic systems. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to showcase research work, publications, patents, and professional achievements.

## User Preferences

Preferred communication style: Simple, everyday language.
GitHub Username: vk-1403
Deployment Target: GitHub Pages

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON responses
- **Development**: Hot reload with Vite middleware integration

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schema definitions
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL

## Key Components

### Client-Side Components
1. **Portfolio Sections**: Modular components for each section (About, Education, Research, Publications, Patents, Skills, Contact)
2. **UI Components**: Comprehensive Shadcn/ui component library including forms, buttons, navigation, toasts
3. **Navigation**: Fixed navigation with smooth scrolling between sections
4. **Responsive Design**: Mobile-first responsive layout with Tailwind breakpoints

### Server-Side Components
1. **API Routes**: Contact form submission and file download endpoints
2. **Storage Layer**: In-memory storage implementation with interface for future database integration
3. **Middleware**: Request logging, error handling, and CORS support
4. **Static Serving**: Vite integration for development and static file serving

### Shared Components
1. **Schema Definitions**: Shared TypeScript types and Zod validation schemas
2. **Database Models**: User model with Drizzle ORM integration

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation and business logic
3. **Data Storage**: Currently uses in-memory storage, designed for easy database integration
4. **Response Handling**: Standardized JSON responses with error handling
5. **UI Updates**: TanStack Query manages cache invalidation and UI updates

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, Tailwind CSS, Lucide React icons
- **Backend**: Express.js, TypeScript, tsx for development
- **Database**: Drizzle ORM, Neon Database adapter
- **Build Tools**: Vite, esbuild for production builds

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Validation**: Zod for runtime type validation
- **Forms**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns for date manipulation
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Asset Handling**: Static assets served from build directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with Node.js execution
- **Database**: Environment variable configuration for database URL

### Hosting Considerations
- **Static Assets**: Frontend served as static files
- **API Server**: Express server handles API routes and serves frontend
- **Database**: Serverless PostgreSQL through Neon Database
- **Replit Integration**: Configured for Replit hosting with development tools

### Scalability Features
- **Database Ready**: Drizzle ORM configured for PostgreSQL with migration support
- **Modular Architecture**: Clear separation allows for easy feature additions
- **Type Safety**: Full TypeScript coverage prevents runtime errors
- **Responsive Design**: Mobile-optimized for various screen sizes

The architecture prioritizes developer experience, type safety, and easy deployment while maintaining flexibility for future enhancements and database integration.