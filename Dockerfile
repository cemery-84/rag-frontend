# --- Stage 1: Build the Vite app ---
FROM node:18-alpine AS builder

WORKDIR /app

#Install dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the source
COPY . .

# Build the app
RUN npm run build


# --- Stage 2: Serve with NGINX ---
FROM nginx:1.25-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a basic nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]