# PostgreSQL Docker Setup Guide

## Quick Start

### 1. Start PostgreSQL with Docker Compose
```bash
# From project root
docker-compose up -d
```

This will:
- Pull the official PostgreSQL 16 Alpine image
- Create a container named `personal-library-db`
- Expose it on `localhost:5432`
- Create the database automatically
- Store data in a Docker volume for persistence

### 2. Verify Connection
```bash
docker-compose logs postgres
```

You should see a message like:
```
postgres_1  | database system is ready to accept connections
```

### 3. Configure Backend

In your `libraryservice/.env`, set:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/personal_library"
```

### 4. Test Connection with psql (Optional)

If you have `psql` installed locally:
```bash
psql -h localhost -U postgres -d personal_library
```

Or use Docker:
```bash
docker exec -it personal-library-db psql -U postgres -d personal_library
```

## Useful Commands

**Stop the database:**
```bash
docker-compose down
```

**Stop but keep data:**
```bash
docker-compose stop
```

**Restart:**
```bash
docker-compose start
```

**View logs:**
```bash
docker-compose logs postgres -f
```

**Fresh start (delete everything):**
```bash
docker-compose down -v
docker-compose up -d
```

## Environment Variables

Customize in `docker-compose.yml`:
- `POSTGRES_USER` - Default: postgres
- `POSTGRES_PASSWORD` - Default: postgres  
- `POSTGRES_DB` - Default: personal_library

Or create a `.env` file at project root and reference it.

## Why Docker Compose for PostgreSQL?

✅ No system installation needed
✅ Works on Mac/Linux/Windows
✅ Easy to reset/backup
✅ Production-like environment
✅ Team consistency
✅ No port conflicts
