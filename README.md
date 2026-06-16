# Conexão Dança — Site institucional (conexaodanca.com)

Site público da escola Conexão Dança (Salinópolis/PA). Separado do sistema
administrativo, que vive em **conexaodanca.art.br** (outro repositório:
`conexao-danca-sistema`). Este site só linka pro sistema por URL absoluta.

## Stack
- **Next.js 15** (App Router) + React 19, TypeScript.
- Uma única página (`app/page.tsx`) — landing institucional com seções: hero,
  acessos rápidos, modalidades, eventos/espetáculos, notícias, **mural do Instagram**,
  Café, equipe e contato.
- O HTML/CSS da página é injetado via `dangerouslySetInnerHTML` (uma string só),
  e usa `<img>` puro (sem `next/image`) — por isso não precisa configurar
  `remotePatterns` no `next.config`.

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Variáveis de ambiente (mural do Instagram)
Copie `.env.example` para `.env.local` e preencha:

| Variável | Valor |
|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | Token permanente do System User do Meta (NÃO commitar) |
| `INSTAGRAM_BUSINESS_ACCOUNT_ID` | `17841461232701146` |

Sem essas variáveis, o mural cai num **fallback** com 6 fotos de exemplo (não quebra).

## Como o mural do Instagram funciona
- `app/page.tsx` → função `fetchInstagramGrid()` chama, no servidor (ISR, `revalidate=3600`):
  `GET https://graph.facebook.com/v23.0/{INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=...&limit=6`
- Pega os 6 posts mais recentes (imagem + legenda + link) e monta a grade.
- Atualiza a cada 1 hora.

**Origem do token (configuração no Meta — já feita):**
- Portfólio empresarial "Conexão Dança LTDa" (Business Manager, mesmo do WhatsApp). business_id `1400250981030805`.
- App "Conexao Danca Sistema" (app_id `1299144212331596`) com casos de uso "Instagram" + "Página".
- Página do Facebook "Conexão Dança Salinas" (id `323649194168734`) conectada ao Instagram **@conexaodanca.ltda** (IG Business id `17841461232701146`).
- System User com acesso à Página → gera token permanente (`instagram_basic` + `pages_show_list`).
- Pra gerar/rotacionar token: business.facebook.com → Usuários do sistema → Gerar token.

## Deploy na Vercel
1. Suba este repositório no GitHub (repo novo, ex.: `conexaodanca-site`).
2. Vercel → Add New → Project → importe o repo.
3. Em Settings → Environment Variables (Production), adicione `INSTAGRAM_ACCESS_TOKEN` e `INSTAGRAM_BUSINESS_ACCOUNT_ID`.
4. Deploy.

## Apontar o domínio conexaodanca.com
O DNS do domínio é gerenciado no **Microsoft 365** (admin.microsoft.com → Definições → Domínios → conexaodanca.com → Registos DNS). Hoje o site aponta pra **Wix**.

Para apontar pra Vercel, troque **SÓ 2 registros** (a Vercel mostra os valores exatos ao adicionar o domínio no projeto; padrão abaixo):

| Registro | Hoje (Wix) | Trocar para (Vercel) |
|---|---|---|
| `A` · `@` | `23.236.62.147` | `76.76.21.21` |
| `CNAME` · `www` | `www2.wixdns.net` | `cname.vercel-dns.com` |

⚠️ **NÃO mexer** nos registros de e-mail (senão o e-mail da escola para): `MX`, `TXT` SPF (`v=spf1...`), `TXT _dmarc`, `TXT/CNAME *._domainkey` (DKIM), `CNAME autodiscover`, `TXT MS=...`, e os `NS`.

## Placeholders a trocar (conteúdo de exemplo)
Tudo em `app/page.tsx`:
- **Endereço/telefone/WhatsApp**: hoje "Salinópolis/PA" e telefone fictício `(91) 9 0000-0000` / `wa.me/5591900000000` — colocar os reais.
- **Fotos** das modalidades, eventos, notícias, Café e equipe: hoje são do Unsplash (genéricas) — trocar por fotos reais (colocar em `public/` e referenciar, ou usar URLs).
- **Equipe**: nomes/fotos dos professores reais.
- **Espetáculos**: os slugs `/ingressos/brasilidades` e `/ingressos/gala-fim-de-ano` precisam bater com os slugs reais cadastrados na bilheteria do sistema.
- **Logo**: `public/logo-conexao.png` (já incluído).
- **Mapa**: o iframe do Google Maps aponta pra "Salinópolis,PA" genérico — pode trocar pelo endereço exato.

## Link com o sistema
A constante `SISTEMA` no topo de `app/page.tsx` (`https://conexaodanca.art.br`) define pra onde vão os botões de Sistema, Portal, Web Loja, Bilheteria e Café. Se o sistema mudar de domínio, é só trocar ali.
