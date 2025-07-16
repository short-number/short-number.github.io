# Short number documentation

- Documentation for [short-number](https://github.com/short-number/short-number) package
- Online [here](https://short-number.github.io/)

## Development
### With Container Engine
> [!NOTE]
> If you use [🐳 Docker](https://app.docker.com/) instead of [🦦 Podman](https://podman.io/), just replace `podman-compose` with `docker compose`, and `podman` with `docker` in code examples below.

#### Build an Image
To build an image, navigate to the root of the project and run this command:
```bash
podman-compose build
```

#### Copy `node_modules` Locally
If you need to copy `node_modules` directory from the container to your local machine, run this command:
```bash
podman cp short-number-docs:/app/node_modules .
```

> [!NOTE]
> `node_modules` is excluded from using volume in [compose.yml](compose.yml) file, that's why you need to copy it manually. It's done to prevent your local modules to be copied to Linux container, since it can create incompatibility issues between operating systems if you don't use Linux.

#### Run the Container
To run a container, navigate to the root of the project and run this command:
```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see your documentation.

#### Enter the Container
To enter inside of the container, run this command:
```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container. Don't run `npm run dev` because it's already running when you created a container.

#### Destroy the Container
Run this command to stop and delete the containers:
```bash
podman-compose down
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
