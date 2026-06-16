import type { Metadata } from "next";

export const revalidate = 3600;

// URL do sistema (app Next.js em conexaodanca.art.br). O site institucional
// vive no domínio .com e aponta para o sistema por URL absoluta.
const SISTEMA = "https://conexaodanca.art.br";

export const metadata: Metadata = {
  title: "Conexão Dança — Escola de Dança",
  description:
    "Escola de dança para todas as idades em Salinópolis/PA. Ballet, jazz, hip hop, contemporâneo e mais. Portal do responsável, web loja, bilheteria e Café Conexão.",
  openGraph: {
    title: "Conexão Dança — Escola de Dança",
    description:
      "Arte, técnica e comunidade. Conheça as aulas, espetáculos e o Café Conexão.",
    type: "website",
  },
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
.cd-site{--roxo:#8C52FF;--roxo-esc:#5b2bb0;--rosa:#ff5ca8;--lilas:#f3edff;--lilas-2:#efe4ff;--tinta:#1c1430;--muted:#6b6080;--preto:#120a22;--grad:linear-gradient(110deg,#8C52FF 0%,#b15cff 45%,#ff5ca8 100%);--radius:22px;--maxw:1180px;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:var(--tinta);line-height:1.6;-webkit-font-smoothing:antialiased}
.cd-site *{box-sizing:border-box;margin:0;padding:0}
.cd-site h1,.cd-site h2,.cd-site h3{font-family:'Fraunces',Georgia,serif;font-weight:600;line-height:1.1;letter-spacing:-.01em}
.cd-site a{text-decoration:none;color:inherit}
.cd-site .wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.cd-site .btn{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:999px;font-weight:600;font-size:15px;cursor:pointer;border:none;transition:.2s;white-space:nowrap}
.cd-site .btn-grad{background:var(--grad);color:#fff;box-shadow:0 10px 24px rgba(140,82,255,.35)}
.cd-site .btn-grad:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(140,82,255,.45)}
.cd-site .btn-ghost{background:rgba(255,255,255,.14);color:#fff;border:1.5px solid rgba(255,255,255,.5)}
.cd-site .btn-ghost:hover{background:rgba(255,255,255,.25)}
.cd-site .btn-out{background:#fff;color:var(--roxo-esc);border:1.5px solid var(--lilas-2)}
.cd-site .btn-out:hover{border-color:var(--roxo);color:var(--roxo)}
.cd-site .eyebrow{display:inline-block;font-weight:700;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--roxo);margin-bottom:14px}
.cd-site .sec{padding:96px 0}
.cd-site .sec h2{font-size:clamp(30px,4vw,46px)}
.cd-site .lead{color:var(--muted);font-size:18px;max-width:620px}
.cd-site header.nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.86);backdrop-filter:blur(14px);border-bottom:1px solid #efe7ff}
.cd-site .nav-inner{display:flex;align-items:center;justify-content:space-between;height:74px}
.cd-site .brand{display:flex;align-items:center;gap:11px;font-family:'Fraunces',serif;font-weight:600;font-size:21px}
.cd-site .brand .mark{width:42px;height:42px;border-radius:13px;background:var(--grad);display:grid;place-items:center;color:#fff;font-size:20px}
.cd-site .brand img{height:42px;width:auto;border-radius:10px}
.cd-site .navlinks{display:flex;gap:30px;align-items:center}
.cd-site .navlinks a{font-weight:500;font-size:15px;color:#473a63}
.cd-site .navlinks a:hover{color:var(--roxo)}
.cd-site .nav-cta{display:flex;gap:10px;align-items:center}
@media(max-width:920px){.cd-site .navlinks{display:none}.cd-site .nav-cta .hide-sm{display:none}}
.cd-site .hero{position:relative;min-height:88vh;display:flex;align-items:center;color:#fff;overflow:hidden}
.cd-site .hero-bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1950&q=80') center/cover}
.cd-site .hero-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(35,12,70,.92) 0%,rgba(91,43,176,.72) 45%,rgba(255,92,168,.45) 100%)}
.cd-site .hero-inner{position:relative;z-index:2;padding:70px 0}
.cd-site .hero h1{font-size:clamp(40px,6.4vw,76px);max-width:14ch;margin-bottom:22px}
.cd-site .hero h1 em{font-style:italic;color:#ffd6ec}
.cd-site .hero p{font-size:20px;max-width:50ch;color:#f0e9ff;margin-bottom:34px}
.cd-site .hero-cta{display:flex;gap:14px;flex-wrap:wrap}
.cd-site .hero-stats{display:flex;gap:40px;margin-top:54px;flex-wrap:wrap}
.cd-site .hero-stats .n{font-family:'Fraunces',serif;font-size:38px;font-weight:600}
.cd-site .hero-stats .l{font-size:14px;color:#e7ddff;opacity:.9}
.cd-site .acessos{margin-top:-60px;position:relative;z-index:5}
.cd-site .acessos-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.cd-site .acard{background:#fff;border:1px solid #efe7ff;border-radius:var(--radius);padding:26px 22px;box-shadow:0 18px 44px rgba(60,30,120,.10);transition:.2s;display:flex;flex-direction:column;gap:10px}
.cd-site .acard:hover{transform:translateY(-6px);box-shadow:0 26px 56px rgba(60,30,120,.18)}
.cd-site .acard .ic{width:50px;height:50px;border-radius:14px;display:grid;place-items:center;font-size:24px;color:#fff}
.cd-site .acard h3{font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:18px}
.cd-site .acard p{font-size:14px;color:var(--muted)}
.cd-site .acard .go{margin-top:auto;font-weight:600;color:var(--roxo);font-size:14px}
@media(max-width:920px){.cd-site .acessos-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.cd-site .acessos-grid{grid-template-columns:1fr}}
.cd-site .mod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px}
.cd-site .mcard{border-radius:var(--radius);overflow:hidden;position:relative;height:330px;color:#fff;display:flex;align-items:flex-end;cursor:pointer}
.cd-site .mcard img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:.5s}
.cd-site .mcard:hover img{transform:scale(1.07)}
.cd-site .mcard::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(18,8,34,.86),rgba(18,8,34,.05) 65%)}
.cd-site .mcard .cap{position:relative;z-index:2;padding:24px}
.cd-site .mcard .cap h3{font-size:25px}
.cd-site .mcard .cap p{font-size:14px;color:#e9def8;opacity:.92}
@media(max-width:920px){.cd-site .mod-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.cd-site .mod-grid{grid-template-columns:1fr}}
.cd-site .eventos{background:var(--lilas)}
.cd-site .ev-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:42px}
.cd-site .evcard{background:#fff;border:1px solid #ece2ff;border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column}
.cd-site .evcard .ph{height:210px;position:relative}
.cd-site .evcard .ph img{width:100%;height:100%;object-fit:cover}
.cd-site .evcard .date{position:absolute;top:16px;left:16px;background:#fff;border-radius:14px;padding:8px 14px;text-align:center;box-shadow:0 6px 16px rgba(0,0,0,.12)}
.cd-site .evcard .date .d{font-family:'Fraunces',serif;font-size:24px;font-weight:600;color:var(--roxo);line-height:1}
.cd-site .evcard .date .m{font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:600}
.cd-site .evcard .body{padding:24px;display:flex;flex-direction:column;gap:10px;flex:1}
.cd-site .evcard .body h3{font-size:23px}
.cd-site .evcard .meta{font-size:14px;color:var(--muted);display:flex;gap:16px;flex-wrap:wrap}
.cd-site .evcard .body .btn{margin-top:auto;align-self:flex-start}
@media(max-width:760px){.cd-site .ev-grid{grid-template-columns:1fr}}
.cd-site .news-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:42px}
.cd-site .ncard{border:1px solid #ece2ff;border-radius:var(--radius);overflow:hidden;background:#fff;transition:.2s}
.cd-site .ncard:hover{transform:translateY(-5px);box-shadow:0 18px 40px rgba(60,30,120,.12)}
.cd-site .ncard .ph{height:180px}.cd-site .ncard .ph img{width:100%;height:100%;object-fit:cover}
.cd-site .ncard .body{padding:20px}
.cd-site .ncard .tag{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--rosa)}
.cd-site .ncard h3{font-size:19px;margin:8px 0;font-family:'Plus Jakarta Sans';font-weight:700}
.cd-site .ncard p{font-size:14px;color:var(--muted)}
@media(max-width:920px){.cd-site .news-grid{grid-template-columns:1fr}}
.cd-site .insta{background:var(--preto);color:#fff}
.cd-site .insta .row{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap}
.cd-site .ig-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:36px}
.cd-site .ig-grid a{aspect-ratio:1;border-radius:14px;overflow:hidden;position:relative}
.cd-site .ig-grid img{width:100%;height:100%;object-fit:cover;transition:.4s}
.cd-site .ig-grid a:hover img{transform:scale(1.1)}
@media(max-width:760px){.cd-site .ig-grid{grid-template-columns:repeat(3,1fr)}}
.cd-site .cafe-inner{display:grid;grid-template-columns:1.05fr 1fr;gap:54px;align-items:center}
.cd-site .cafe-img{border-radius:28px;overflow:hidden;height:420px}
.cd-site .cafe-img img{width:100%;height:100%;object-fit:cover}
@media(max-width:860px){.cd-site .cafe-inner{grid-template-columns:1fr}.cd-site .cafe-img{height:300px}}
.cd-site .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:42px}
.cd-site .tcard{text-align:center}
.cd-site .tcard .ph{aspect-ratio:1;border-radius:22px;overflow:hidden;margin-bottom:14px}
.cd-site .tcard .ph img{width:100%;height:100%;object-fit:cover}
.cd-site .tcard h3{font-family:'Plus Jakarta Sans';font-weight:700;font-size:17px}
.cd-site .tcard p{font-size:14px;color:var(--roxo);font-weight:500}
@media(max-width:860px){.cd-site .team-grid{grid-template-columns:repeat(2,1fr)}}
.cd-site .contato{background:var(--lilas)}
.cd-site .ct-inner{display:grid;grid-template-columns:1fr 1fr;gap:40px}
.cd-site .ct-card{background:#fff;border:1px solid #ece2ff;border-radius:var(--radius);padding:32px}
.cd-site .ct-item{display:flex;gap:14px;align-items:flex-start;margin-bottom:20px}
.cd-site .ct-item .ic{width:44px;height:44px;border-radius:12px;background:var(--lilas-2);color:var(--roxo);display:grid;place-items:center;font-size:20px;flex-shrink:0}
.cd-site .ct-item b{display:block;font-size:15px}
.cd-site .ct-item span{font-size:14px;color:var(--muted)}
.cd-site .map{border-radius:var(--radius);overflow:hidden;min-height:340px;border:1px solid #ece2ff}
.cd-site .map iframe{width:100%;height:100%;min-height:340px;border:0}
@media(max-width:760px){.cd-site .ct-inner{grid-template-columns:1fr}}
.cd-site .cta-final{background:var(--grad);color:#fff;text-align:center}
.cd-site .cta-final h2{font-size:clamp(30px,4.4vw,50px);max-width:18ch;margin:0 auto 18px}
.cd-site .cta-final p{font-size:19px;color:#f3eaff;max-width:48ch;margin:0 auto 30px}
.cd-site footer{background:var(--preto);color:#cbbce8;padding:64px 0 30px}
.cd-site .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:36px}
.cd-site footer h4{color:#fff;font-family:'Plus Jakarta Sans';font-size:15px;margin-bottom:16px;letter-spacing:.04em}
.cd-site footer a{display:block;font-size:14px;color:#b6a6d8;padding:5px 0}
.cd-site footer a:hover{color:#fff}
.cd-site .foot-bottom{border-top:1px solid rgba(255,255,255,.1);margin-top:40px;padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;color:#8d7eb0}
.cd-site .soc{display:flex;gap:12px;margin-top:14px}
.cd-site .soc a{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.08);display:grid;place-items:center;color:#fff;font-size:18px;padding:0}
.cd-site .soc a:hover{background:var(--roxo)}
@media(max-width:860px){.cd-site .foot-grid{grid-template-columns:1fr 1fr}}
`;

const BODY = `
<header class="nav"><div class="wrap nav-inner">
  <a href="#topo" class="brand"><img src="/logo-conexao.png" alt="Conexão Dança" /> Conexão Dança</a>
  <nav class="navlinks">
    <a href="#modalidades">Modalidades</a><a href="#eventos">Eventos</a><a href="#noticias">Notícias</a><a href="#cafe">Café</a><a href="#equipe">Equipe</a><a href="#contato">Contato</a>
  </nav>
  <div class="nav-cta">
    <a href="${SISTEMA}/portal/login" class="btn btn-out hide-sm">Portal do Responsável</a>
    <a href="${SISTEMA}/login" class="btn btn-grad">Entrar no Sistema</a>
  </div>
</div></header>

<section class="hero" id="topo"><div class="hero-bg"></div><div class="wrap hero-inner">
  <span class="eyebrow" style="color:#ffd6ec">Escola de Dança • Salinópolis/PA</span>
  <h1>O movimento que <em>conecta</em> corpo, arte e família.</h1>
  <p>Ballet, jazz, hip hop, contemporâneo e muito mais. Aulas para todas as idades, do baby class ao avançado — num espaço feito para dançar, criar e pertencer.</p>
  <div class="hero-cta"><a href="#modalidades" class="btn btn-grad">Conheça as aulas</a><a href="#contato" class="btn btn-ghost">Agende uma aula experimental</a></div>
  <div class="hero-stats"><div><div class="n">10+</div><div class="l">anos de história</div></div><div><div class="n">12</div><div class="l">modalidades</div></div><div><div class="n">300+</div><div class="l">alunos por temporada</div></div><div><div class="n">2</div><div class="l">grandes espetáculos/ano</div></div></div>
</div></section>

<section class="wrap acessos"><div class="acessos-grid">
  <a href="${SISTEMA}/login" class="acard"><span class="ic" style="background:linear-gradient(135deg,#8C52FF,#b15cff)">⚙</span><h3>Sistema</h3><p>Acesso da equipe, secretaria e administração.</p><span class="go">Entrar →</span></a>
  <a href="${SISTEMA}/portal/login" class="acard"><span class="ic" style="background:linear-gradient(135deg,#ff5ca8,#ff8ac0)">♥</span><h3>Portal do Responsável</h3><p>Faturas, mensalidades, dependentes e comunicados.</p><span class="go">Acessar portal →</span></a>
  <a href="${SISTEMA}/webloja" class="acard"><span class="ic" style="background:linear-gradient(135deg,#6a3df5,#9a5cff)">🛍</span><h3>Web Loja</h3><p>Figurinos, calçados e produtos oficiais da escola.</p><span class="go">Ir às compras →</span></a>
  <a href="${SISTEMA}/ingressos" class="acard"><span class="ic" style="background:linear-gradient(135deg,#ff7a3d,#ff5ca8)">🎟</span><h3>Bilheteria</h3><p>Ingressos dos espetáculos, direto e sem fila.</p><span class="go">Comprar ingresso →</span></a>
</div></section>

<section class="sec wrap" id="modalidades">
  <span class="eyebrow">Modalidades</span><h2>Encontre a sua dança</h2>
  <p class="lead">Turmas divididas por idade e nível, com professores especializados e metodologia própria.</p>
  <div class="mod-grid">
    <div class="mcard"><img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" alt="Ballet"><div class="cap"><h3>Ballet Clássico</h3><p>Baby class, infantil, juvenil e adulto</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80" alt="Jazz"><div class="cap"><h3>Jazz Dance</h3><p>Técnica, expressão e palco</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=800&q=80" alt="Hip Hop"><div class="cap"><h3>Hip Hop</h3><p>Cultura urbana e coreografia</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80" alt="Contemporâneo"><div class="cap"><h3>Contemporâneo</h3><p>Criação e linguagem do corpo</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?auto=format&fit=crop&w=800&q=80" alt="Baby Class"><div class="cap"><h3>Baby Class</h3><p>Primeiros passos, a partir de 3 anos</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1583244532610-2a234e7c3e84?auto=format&fit=crop&w=800&q=80" alt="Danças Urbanas"><div class="cap"><h3>Danças Urbanas</h3><p>Street, K-pop e freestyle</p></div></div>
  </div>
</section>

<section class="sec eventos" id="eventos"><div class="wrap">
  <span class="eyebrow">Eventos & Espetáculos</span><h2>Próximos espetáculos</h2>
  <p class="lead">Compre seu ingresso direto pela bilheteria — sem passar pela loja, sem fila no dia.</p>
  <div class="ev-grid">
    <div class="evcard"><div class="ph"><img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=900&q=80" alt="Brasilidades"><div class="date"><div class="d">20</div><div class="m">Jun</div></div></div><div class="body"><h3>Brasilidades — Mostra Anual</h3><div class="meta"><span>📍 Teatro Conexão</span><span>🕕 18h30</span></div><p style="font-size:15px;color:var(--muted)">Uma viagem pelas danças e ritmos do Brasil, com todas as turmas no palco.</p><a href="${SISTEMA}/ingressos/brasilidades" class="btn btn-grad">🎟 Comprar ingresso</a></div></div>
    <div class="evcard"><div class="ph"><img src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?auto=format&fit=crop&w=900&q=80" alt="Gala"><div class="date"><div class="d">14</div><div class="m">Dez</div></div></div><div class="body"><h3>Gala de Fim de Ano</h3><div class="meta"><span>📍 Teatro Conexão</span><span>🕕 19h00</span></div><p style="font-size:15px;color:var(--muted)">O encerramento da temporada com os grandes números do ano e homenagens.</p><a href="${SISTEMA}/ingressos/gala-fim-de-ano" class="btn btn-out">Em breve · avise-me</a></div></div>
  </div>
</div></section>

<section class="sec wrap" id="noticias">
  <span class="eyebrow">Notícias de dança</span><h2>Fique por dentro</h2>
  <p class="lead">Novidades da escola, dicas dos professores e o que está acontecendo no mundo da dança.</p>
  <div class="news-grid">
    <article class="ncard"><div class="ph"><img src="https://images.unsplash.com/photo-1495791185843-c73f2269f669?auto=format&fit=crop&w=700&q=80" alt=""></div><div class="body"><span class="tag">Escola</span><h3>Matrículas abertas para a temporada 2026</h3><p>Garanta a vaga da sua turma preferida. Novas modalidades chegando.</p></div></article>
    <article class="ncard"><div class="ph"><img src="https://images.unsplash.com/photo-1490725263030-1f0521cec05c?auto=format&fit=crop&w=700&q=80" alt=""></div><div class="body"><span class="tag">Bastidores</span><h3>Os bastidores de Brasilidades</h3><p>Meses de ensaio para uma noite inesquecível. Veja como foi a preparação.</p></div></article>
    <article class="ncard"><div class="ph"><img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=80" alt=""></div><div class="body"><span class="tag">Dicas</span><h3>5 alongamentos para quem dança ballet</h3><p>A rotina ideal antes da aula, recomendada pelas professoras.</p></div></article>
  </div>
</section>

<section class="sec insta"><div class="wrap">
  <div class="row"><div><span class="eyebrow" style="color:#ff8ac0">@conexaodanca.ltda</span><h2 style="color:#fff;font-size:clamp(28px,4vw,42px)">Siga a gente no Instagram</h2></div><a href="https://instagram.com/conexaodanca.ltda" class="btn btn-grad">Seguir no Instagram</a></div>
  <div class="ig-grid"><!--IG_GRID--></div>
</div></section>

<section class="sec wrap" id="cafe"><div class="cafe-inner">
  <div><span class="eyebrow">Café Conexão</span><h2>Um cafezinho enquanto a aula acontece</h2><p class="lead" style="margin-bottom:24px">O espaço de convivência da escola. Enquanto as crianças dançam, os responsáveis relaxam com café, lanches e companhia. Pais e alunos podem usar a conta interna e acompanhar tudo pelo portal.</p><a href="${SISTEMA}/cafe/cardapio" class="btn btn-grad">Ver o cardápio</a></div>
  <div class="cafe-img"><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80" alt="Café"></div>
</div></section>

<section class="sec wrap" id="equipe">
  <span class="eyebrow">Nossa equipe</span><h2>Professores que inspiram</h2><p class="lead">Um time apaixonado por dança e por gente.</p>
  <div class="team-grid">
    <div class="tcard"><div class="ph"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80" alt=""></div><h3>Glenda</h3><p>Direção & Ballet</p></div>
    <div class="tcard"><div class="ph"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" alt=""></div><h3>Lucas</h3><p>Hip Hop & Urbanas</p></div>
    <div class="tcard"><div class="ph"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80" alt=""></div><h3>Marina</h3><p>Jazz & Contemporâneo</p></div>
    <div class="tcard"><div class="ph"><img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=500&q=80" alt=""></div><h3>Gabrielle</h3><p>Baby Class & Coach</p></div>
  </div>
</section>

<section class="sec contato" id="contato"><div class="wrap">
  <span class="eyebrow">Contato & Localização</span><h2>Venha dançar com a gente</h2>
  <div class="ct-inner" style="margin-top:38px">
    <div class="ct-card">
      <div class="ct-item"><span class="ic">📍</span><div><b>Endereço</b><span>Salinópolis/PA</span></div></div>
      <div class="ct-item"><span class="ic">📞</span><div><b>Telefone / WhatsApp</b><span>(91) 9 0000-0000</span></div></div>
      <div class="ct-item"><span class="ic">✉</span><div><b>E-mail</b><span>contato@conexaodanca.com</span></div></div>
      <div class="ct-item"><span class="ic">🕐</span><div><b>Horário</b><span>Seg a Sex, 8h–21h · Sáb, 8h–13h</span></div></div>
      <a href="https://wa.me/5591900000000" class="btn btn-grad" style="margin-top:8px">Falar no WhatsApp</a>
    </div>
    <div class="map"><iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Salin%C3%B3polis,PA&output=embed"></iframe></div>
  </div>
</div></section>

<section class="sec cta-final"><div class="wrap">
  <h2>Sua próxima dança começa aqui</h2><p>Agende uma aula experimental gratuita e sinta a energia da Conexão Dança.</p>
  <a href="#contato" class="btn btn-ghost" style="border-color:#fff">Quero experimentar</a>
</div></section>

<footer><div class="wrap">
  <div class="foot-grid">
    <div><a href="#topo" class="brand" style="color:#fff;margin-bottom:14px"><span class="mark">✦</span> Conexão Dança</a><p style="font-size:14px;max-width:34ch">Escola de dança para todas as idades. Arte, técnica e comunidade desde 2014.</p><div class="soc"><a href="https://instagram.com/conexaodanca.ltda">⌾</a><a href="https://wa.me/5591900000000">✆</a><a href="mailto:contato@conexaodanca.com">✉</a></div></div>
    <div><h4>Navegar</h4><a href="#modalidades">Modalidades</a><a href="#eventos">Eventos</a><a href="#noticias">Notícias</a><a href="#cafe">Café</a><a href="#equipe">Equipe</a></div>
    <div><h4>Acessos</h4><a href="${SISTEMA}/login">Sistema</a><a href="${SISTEMA}/portal/login">Portal do Responsável</a><a href="${SISTEMA}/webloja">Web Loja</a><a href="${SISTEMA}/ingressos">Bilheteria</a><a href="${SISTEMA}/cafe/cardapio">Cardápio do Café</a></div>
    <div><h4>Contato</h4><a href="#contato">Salinópolis/PA</a><a href="tel:+5591900000000">(91) 9 0000-0000</a><a href="mailto:contato@conexaodanca.com">contato@conexaodanca.com</a></div>
  </div>
  <div class="foot-bottom"><span>© 2026 Conexão Dança. Todos os direitos reservados.</span><span>Feito com ♥ para quem dança.</span></div>
</div></footer>
`;

const IG_FALLBACK_GRID = `<a href="https://instagram.com/conexaodanca.ltda"><img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=400&q=70" alt=""></a>
    <a href="https://instagram.com/conexaodanca.ltda"><img src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=400&q=70" alt=""></a>
    <a href="https://instagram.com/conexaodanca.ltda"><img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=400&q=70" alt=""></a>
    <a href="https://instagram.com/conexaodanca.ltda"><img src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=70" alt=""></a>
    <a href="https://instagram.com/conexaodanca.ltda"><img src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=400&q=70" alt=""></a>
    <a href="https://instagram.com/conexaodanca.ltda"><img src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?auto=format&fit=crop&w=400&q=70" alt=""></a>`;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function fetchInstagramGrid(): Promise<string> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const igId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  if (!token || !igId) return IG_FALLBACK_GRID;
  try {
    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
    const url = `https://graph.facebook.com/v23.0/${igId}/media?fields=${fields}&limit=6&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return IG_FALLBACK_GRID;
    const json = await res.json();
    const items: any[] = Array.isArray(json?.data) ? json.data : [];
    if (items.length === 0) return IG_FALLBACK_GRID;
    return items
      .map((it) => {
        const img = it.media_type === "VIDEO" ? it.thumbnail_url : it.media_url;
        if (!img) return "";
        const alt = esc(String(it.caption ?? "Post do Instagram da Conexão Dança").slice(0, 120));
        const link = it.permalink || "https://instagram.com/conexaodanca.ltda";
        return `<a href="${link}" target="_blank" rel="noopener noreferrer"><img src="${img}" alt="${alt}" loading="lazy"></a>`;
      })
      .filter(Boolean)
      .join("\n");
  } catch {
    return IG_FALLBACK_GRID;
  }
}

export default async function HomePage() {
  const igGrid = await fetchInstagramGrid();
  const body = BODY.replace("<!--IG_GRID-->", igGrid);
  return (
    <div className="cd-site">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
