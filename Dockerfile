FROM node:20
USER root
ENV _vs=1 
ENV NODE_OPTIONS=--openssl-legacy-provider
#
CMD ["yarn", "storybook"]