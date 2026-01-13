# Short number documentation

- Documentation for [short-number](https://github.com/short-number/short-number) package
- Online [here](https://short-number.github.io/)

## Development
### With Container Engine
#### Build an Image
To build an image, navigate to the root of the project and run this command.

With Podman:
```bash
podman-compose build
```

With Docker:
```bash
docker compose build
```

#### Run the Container
To run a container, navigate to the root of the project and run this command.

With Podman:
```bash
podman-compose up -d
```

With Docker:
```bash
docker compose up -d
```

You can visit `http://localhost:3000` to see your documentation.

#### Enter the Container
To enter inside of the container, run this command.

With Podman:
```bash
podman-compose exec app sh
```

With Docker:
```bash
docker compose exec app sh
```

You'll be able to run NPM commands inside of the container. Don't run `npm run dev` because it's already running when you created a container.

#### Destroy the Container
Run this command to stop and delete the containers.

With Podman:
```bash
podman-compose down
```

With Docker:
```bash
docker compose down
```

### NPM Commands
#### Install Dependencies
```bash
npm i
```

#### Watch File Changes
```bash
npm run dev
```

Navigate to `http://localhost:5173` to see your documentation if you run the project locally. If you use container engine, visit `http://localhost:3000`.
