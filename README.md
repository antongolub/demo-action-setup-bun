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

      - name: Setup Bun Runtime (1)
        uses: antongolub/action-setup-bun@v1
        with:
          cache: true
          bun-config: '{"install": {"production": true}}'

      - name: Install deps (cache warmup)
        run: bun install

      - name: Run script (1)
        run: bun index.js

      # https://github.com/actions/toolkit/issues/58
      - name: Setup Bun Runtime (2) again
        uses: antongolub/action-setup-bun@v1
        with:
          cache: true
          bun-config: '{}'

      - name: Install deps (2)
        run: bun install

      - name: Run script (2)
        run: bun index.js

  second:
    name: Second job
    needs: first
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
        run: |
          bun index.js
          bun index.ts
```

## License
[MIT](LICENSE)
