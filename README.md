# När kommer glassbilen?

Kolla när glassbilen kommer, i din terminal.

0. pnpm install
1. Skriv in din latitud och longitud i filen .env.template (med `lat=nn.nnnnnn` och `long=nn.nnnnn` på var sin rad) och byt namn på den till `.env`.
2. Kör node main.js

# Installera som kommando

0. pnpm install
1. npm link
2. source .env (med `export lat=nn.nnnnnn` etc i filen)
3. skriv `glassbilen`

## Todo

- [x] Gör programmet installerbart och möjligt att köra som ett kommando
- [x] Gör en snygg glassbil i ascii art och ta med (för den som vill)
- [x] Acceptera flaggor (`--ascii`)
- [x] Exempelfil för .env
- [ ] Fixa så att miljövariabelgrejorna funkar smidigt