# 1. Base image
FROM node:18-alpine

# 2. Working directory
WORKDIR /usr/src/app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy rest of the app
COPY . .

# 5. Build the app
RUN npm run build

# 6. Default command
CMD ["node", "dist/main"]

# 7. Expose port
EXPOSE 3000
