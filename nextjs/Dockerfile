FROM node:20-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /app/nextjs

# Rebuild the source code and install dependencies in a single stage
FROM base AS builder
WORKDIR /app/nextjs

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install --force

# Copy the rest of the app files
COPY . .

# Dev image, copy all the files and run next
FROM base AS runner
WORKDIR /app/nextjs

# Copy node_modules from the builder stage
# COPY --from=builder /app/nextjs/node_modules ./node_modules
# Copy the rest of the app files from the builder stage
COPY --from=builder /app/nextjs/ .

# Set NODE_ENV to development
ENV NODE_ENV development

# Create user and group for security reasons
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# Change ownership of the /app/nextjs directory to the nextjs user
# RUN chown -R nextjs:nodejs /app/nextjs

# USER nextjs

ENV PORT 3000
ENV HOSTNAME localhost


EXPOSE 3000