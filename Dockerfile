# --- Stage 1: Build the Vite app ---
FROM node:24-alpine AS build

WORKDIR /app

#Install dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm ci

# Copy the rest of the source
COPY . .

# Build the app
RUN npm run build


# --- Stage 2: Serve with NGINX ---
FROM nginx:1.28-alpine

# Copy built assets from builder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
