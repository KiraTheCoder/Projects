FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]



# In our Dockerfile, we first use a lightweight Node.js image. Next, we set the working directory of the Docker container to be /app. Next, we copy all our existing files from the current directory to the /app directory in the container. We then install the required dependencies and expose port 5000. Lastly, we run the command npm start when the Docker container starts.