Repro

1. Clone this
2. `npx wrangler@latest deploy`
3. Observe the warning, even though service bindings are not experimental:

```
➜  src git:(main) ✗ npx wrangler@latest deploy
 ⛅️ wrangler 3.9.1
------------------
▲ [WARNING] Processing wrangler.toml configuration:

    - "services" fields are experimental and may change or break at any time.


Your worker has access to the following bindings:
- Services:
  - FOO: hello-world-service-binding-target
Total Upload: 0.25 KiB / gzip: 0.20 KiB
```