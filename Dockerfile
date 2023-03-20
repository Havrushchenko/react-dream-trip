FROM node:12
WORKDIR /Users/volodya/Desktop/projects/react-dream-trip
RUN npm install
CMD ["npm", "start"]