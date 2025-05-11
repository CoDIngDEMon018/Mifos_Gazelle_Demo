# Build stage: compile React demo
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Build the production bundle
COPY . .
RUN npm run build

# Production stage: serve with Nginx
FROM nginx:alpine
# Dockerfile
# Add security headers to Nginx
COPY nginx-security-headers.conf /etc/nginx/conf.d/security-headers.conf
# Copy built assets
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx config to proxy /api calls
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
