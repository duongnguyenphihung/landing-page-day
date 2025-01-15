# Stage 1: Development dependencies
FROM node:20-alpine AS development-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# Stage 2: Production dependencies
FROM node:20-alpine AS production-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Stage 3: Build application
FROM node:20-alpine AS build-env
WORKDIR /app
COPY --from=development-dependencies-env /app /app
RUN npm run build

# Stage 4: Run application
FROM node:20-alpine
WORKDIR /app
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
COPY package.json package-lock.json ./

# Expose port for server
EXPOSE 3000

# Command to run the server
CMD ["npm", "run", "start"]
