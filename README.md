# Whats The Time :timer_clock:

## Introduction :rocket:
This is a fun little React game I made. The objective is to click stop before the timer runs out and get as close to the timer running out as possible. Best of luck.

## Prerequisites :memo:
- Docker :whale:

## Running :running:

To build the docker image, cd in to the whats-the-time directory and run:

```bash
docker compose build
```

Now it should be ready to run.

To run the image, simply use the Docker command:

```bash
docker compose up
```

This will launch the container and map it to port 8000 on your machine. The local server can be accessed at [http://localhost:8000](http://localhost:8000).

## Stopping :raised_hand:

Press Ctrl + c to stop (yes, its Ctrl + c even on Mac :apple:)