FROM node:20
ENV NODE_OPTIONS=--openssl-legacy-provider
CMD ["yarn", "storybook"]