# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache bash curl

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

ENV NODE_ENV=production

CMD ["/wait-for-it.sh", "postgres:5432", "--", "node", "dist/main"]
