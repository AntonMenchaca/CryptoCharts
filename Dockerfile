# its good practice to always specify your tag. AS builder will be the name of our first stage.
FROM node:14.17 AS builder

#sets our current image directory to be inside /app
#commands after this instruction will all happen in /app of the image
WORKDIR /app

#we are copying everything from inside our current file to the /app of our image
COPY . .

#We are using npm ci to install all dependencies with our package-lock json. This is faster then npm install and requires you to make sure that the package lock json is not inside our .dockerignore and it is up to date.
# we also run the webpack build command
RUN npm ci && npm run build

# From builder stage
FROM node:14.17-alpine

#Sets the user to a user called node. By default, Docker runs container as root which inside of the container can pose as a security issue. You would want to run the container as an unprivileged user wherever possible. The node images provide the node user for such purpose.
USER node

#We are doing a multi-stage build to minimize the amount of space the image will take up
#--from=builder is grabbing the result from the builder stage
# we are copy everything from /app from the previous stage into the current image
COPY --from=builder --chown=node:node /app .

#runs node on the index.js file in my server folder.
CMD [ "node", "server" ]