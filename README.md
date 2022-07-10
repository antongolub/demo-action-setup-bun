# demo-action-setup-bun
> Testing repo to verify [action-setup-bun](https://github.com/antongolub/action-setup-bun) work

## CI
```yaml
name: CI
on: [push, pull_request]
jobs:
  first:
    name: First job
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Bun Runtime
        uses: antongolub/action-setup-bun@v1
        with:
          cache: true

      - name: Install deps (cache warmup)
        run: bun install
  second:
    name: Second job
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Bun Runtime
        uses: antongolub/action-setup-bun@v1
        with:
          cache: true

      - name: Install deps (from cache)
        run: bun install

      - name: Run script
        run: bun run test

```

## License
[MIT](LICENSE)
