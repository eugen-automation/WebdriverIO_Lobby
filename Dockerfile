FROM node:18-alpine

RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont


ENV CHROME_BIN=/usr/bin/chromium-browser
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true


WORKDIR /app


COPY package*.json ./


RUN npm ci


COPY . .


RUN npm run build 2>/dev/null || echo "No build script found"


CMD ["npm", "run", "e:headless"]