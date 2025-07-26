FROM node:18-alpine

# Instalează dependențe pentru Chrome
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Setează variabila de mediu pentru Chrome
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Creează directorul de lucru
WORKDIR /app

# Copiază package.json și package-lock.json
COPY package*.json ./

# Instalează dependențele
RUN npm ci

# Copiază restul codului
COPY . .

# Compilează TypeScript dacă e necesar
RUN npm run build 2>/dev/null || echo "No build script found"

# Rulează testele cu capabilities pentru headless
CMD ["npm", "run", "e:docker"]