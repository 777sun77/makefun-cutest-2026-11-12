# cutest-picture-01

A cream kitten in a knitted strawberry hat hugs a sleepy chick.

The repository includes the picture as `entry.png` (JPEG-encoded). The
program copies those original bytes to `/output/entry.png` by default.

Run with Node 22:

```sh
node main.ts
```

To choose another output directory, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output directory is created if needed. The program rejects source pictures
larger than 1 MiB and performs no network access.
