# När kommer glassbilen?

Kolla när glassbilen kommer, i din terminal.

0. pnpm install
1. Skriv in din latitud och longitud i filen .env (med `lat=nn.nnnnnn` och `long=nn.nnnnn` på var sin rad).
2. Kör node main.js

# Installera som kommando

0. pnpm install
1. npm link
2. source .env (med `export lat=nn.nnnnnn` etc i filen)
3. skriv `glassbilen`

## Roadmap/todo

- [x] Gör programmet installerbart och möjligt att köra som ett kommando
- [ ] Gör en snygg glassbil i ascii art och ta med (för den som vill)
- [ ] Acceptera flaggor (`--no-ascii-art`)
