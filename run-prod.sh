yarn install --frozen-lockfile

# tsc outputs type definitions to dist-types/ in the repo root, which are then consumed by the build
yarn tsc

# Build all packages and in the end bundle them all up into the packages/backend/dist folder.
yarn build

# Run docker-compose
docker-compose up