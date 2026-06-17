import type { Metadata } from "next";
import AgendaExperimental from "./AgendaExperimental";

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
.cd-site .hero-selos{display:flex;gap:14px;margin-top:48px;flex-wrap:wrap}
.cd-site .selo{display:flex;align-items:center;gap:11px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);border-radius:15px;padding:13px 17px;backdrop-filter:blur(6px);max-width:320px}
.cd-site .selo .si{font-size:21px;flex-shrink:0;line-height:1}
.cd-site .selo b{display:block;font-size:14px;color:#fff;font-weight:700;line-height:1.2}
.cd-site .selo span{font-size:12px;color:#e7ddff;line-height:1.3}
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
.cd-site .evcard .ph.evph{background:var(--grad);display:grid;place-items:center}
.cd-site .evcard .ph.evph .evph-ic{font-size:64px;filter:drop-shadow(0 6px 14px rgba(0,0,0,.25))}
.cd-site .evcard .fest{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--rosa)}
.cd-site .evcard .meta span{display:inline-flex;align-items:center;gap:6px}
.cd-site .ev-note{margin-top:26px;font-size:14px;color:var(--muted)}
.cd-site .ev-note a{color:var(--roxo);font-weight:600;text-decoration:underline}
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
.cd-site .valores-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:42px}
.cd-site .vcard{background:#fff;border:1px solid #efe7ff;border-radius:var(--radius);padding:28px 24px;box-shadow:0 14px 34px rgba(60,30,120,.07)}
.cd-site .vcard .vic{font-size:30px;display:block;margin-bottom:12px}
.cd-site .vcard h3{font-family:'Plus Jakarta Sans';font-weight:700;font-size:18px;margin-bottom:8px}
.cd-site .vcard p{font-size:14px;color:var(--muted)}
@media(max-width:860px){.cd-site .valores-grid{grid-template-columns:1fr}}
.cd-site .director{background:var(--lilas)}
.cd-site .dir-inner{display:grid;grid-template-columns:.8fr 1.2fr;gap:46px;align-items:center}
.cd-site .dir-ph{aspect-ratio:4/5;border-radius:26px;overflow:hidden;background:var(--lilas-2);display:grid;place-items:center;color:var(--roxo);font-size:64px;box-shadow:0 20px 50px rgba(60,30,120,.14)}
.cd-site .dir-ph img{width:100%;height:100%;object-fit:cover}
.cd-site .director .role{color:var(--roxo);font-weight:600;margin:6px 0 16px;display:block;font-size:15px}
.cd-site .director p{color:#4a3d68;font-size:16px;margin-bottom:12px;max-width:60ch}
@media(max-width:760px){.cd-site .dir-inner{grid-template-columns:1fr}.cd-site .dir-ph{max-width:320px}}
.cd-site .apoiadores{background:var(--preto);color:#fff}
.cd-site .apoiadores .lead{color:#cbbce8}
.cd-site .apoio-destaque{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:var(--radius);padding:34px;margin-top:36px}
.cd-site .badge{display:inline-block;background:var(--grad);color:#fff;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:6px 13px;border-radius:999px;margin-bottom:14px}
.cd-site .apoio-destaque h3{font-size:30px;margin-bottom:10px}
.cd-site .apoio-destaque p{color:#cbbce8;max-width:64ch;font-size:16px}
.cd-site .apoio-cta{margin-top:26px;color:#cbbce8;font-size:16px}
.cd-site .apoio-cta a{color:#fff;text-decoration:underline}
.cd-site .embreve{margin-top:42px;border:1.5px dashed #d9ccf5;border-radius:var(--radius);padding:48px 24px;text-align:center;color:var(--muted)}
.cd-site .embreve b{display:block;font-family:'Fraunces',serif;font-size:24px;color:var(--tinta);margin-bottom:8px;font-weight:600}
.cd-site .painel{background:linear-gradient(135deg,#2a1655,#1c1430);color:#fff}
.cd-site .painel .lead{color:#cbbce8}
.cd-site .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}
.cd-site .stat{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:26px 18px;text-align:center}
.cd-site .stat .num{font-family:'Fraunces',serif;font-size:46px;font-weight:600;background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
.cd-site .stat .lbl{font-size:13px;color:#cbbce8;margin-top:8px}
@media(max-width:760px){.cd-site .stats-row{grid-template-columns:repeat(2,1fr)}}
.cd-site .hoje-box{margin-top:34px;background:rgba(140,82,255,.14);border:1px solid rgba(140,82,255,.4);border-radius:18px;padding:22px 24px}
.cd-site .hoje-box h3{font-family:'Plus Jakarta Sans';font-size:17px;margin-bottom:12px;color:#fff;font-weight:700}
.cd-site .chips{display:flex;gap:10px;flex-wrap:wrap}
.cd-site .chip{background:rgba(255,255,255,.1);border-radius:999px;padding:7px 15px;font-size:13px;color:#fff}
.cd-site .chip.off{color:#9d8fc0}
.cd-site .grade-wk{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:30px}
.cd-site .gcol{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px;min-height:96px}
.cd-site .gcol.today{border-color:var(--roxo);background:rgba(140,82,255,.12)}
.cd-site .gcol h4{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#cbbce8;margin-bottom:10px;font-weight:700}
.cd-site .gcol .gi{font-size:12.5px;color:#e7ddff;padding:4px 0;border-top:1px solid rgba(255,255,255,.07)}
.cd-site .painel .atualizado{margin-top:22px;font-size:12px;color:#8d7eb0}
@media(max-width:760px){.cd-site .grade-wk{grid-template-columns:repeat(2,1fr)}}
.cd-site .agendar{background:var(--lilas)}
.cd-site .ag-form{margin-top:34px;max-width:760px;position:relative}
.cd-site .ag-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.cd-site .ag-grid label{display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600;color:#473a63}
.cd-site .ag-grid .ag-full{grid-column:1/-1}
.cd-site .ag-grid input,.cd-site .ag-grid select,.cd-site .ag-grid textarea{font-family:inherit;font-size:15px;font-weight:400;padding:12px 14px;border:1.5px solid #e3d7fb;border-radius:12px;background:#fff;color:var(--tinta);width:100%}
.cd-site .ag-grid input:focus,.cd-site .ag-grid select:focus,.cd-site .ag-grid textarea:focus{outline:none;border-color:var(--roxo)}
.cd-site .ag-hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}
.cd-site .ag-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:20px}
.cd-site .ag-actions .btn[disabled]{opacity:.6;cursor:default}
.cd-site .ag-erro{color:#c0392b;font-size:14px;margin-top:14px}
.cd-site .ag-nota{font-size:12.5px;color:var(--muted);margin-top:14px;max-width:60ch}
.cd-site .ag-ok{margin-top:34px;background:#fff;border:1px solid #e3d7fb;border-radius:var(--radius);padding:40px;text-align:center;max-width:620px}
.cd-site .ag-ok-ic{width:60px;height:60px;border-radius:50%;background:var(--grad);color:#fff;font-size:30px;display:grid;place-items:center;margin:0 auto 16px}
.cd-site .ag-ok h3{font-size:24px;margin-bottom:8px}
.cd-site .ag-ok p{color:var(--muted);font-size:15px}
.cd-site .ag-ok a{color:var(--roxo);font-weight:600}
@media(max-width:620px){.cd-site .ag-grid{grid-template-columns:1fr}}
`;

const BODY = `
<header class="nav"><div class="wrap nav-inner">
  <a href="#topo" class="brand"><img src="/logo-conexao.png" alt="Conexão Dança" /> Conexão Dança</a>
  <nav class="navlinks">
    <a href="#sobre">Sobre</a><a href="#modalidades">Modalidades</a><a href="#eventos">Eventos</a><a href="#cafe">Café</a><a href="#equipe">Direção</a><a href="#contato">Contato</a>
  </nav>
  <div class="nav-cta">
    <a href="${SISTEMA}/portal/login" class="btn btn-out hide-sm">Portal do Responsável</a>
    <a href="${SISTEMA}/login" class="btn btn-grad">Entrar no Sistema</a>
  </div>
</div></header>

<section class="hero" id="topo"><div class="hero-bg"></div><div class="wrap hero-inner">
  <span class="eyebrow" style="color:#ffd6ec">Centro de formação artística e cultural • Salinópolis/PA</span>
  <h1>O movimento que <em>conecta</em> corpo, arte e família.</h1>
  <p>Dançar é formar corpo, mente e caráter. Em cada aula — do ballet ao hip hop, para todas as idades — nascem disciplina, expressão e autoconfiança que acompanham o aluno pela vida inteira. Tudo com metodologias certificadas internacionalmente e o coração na cultura amazônica.</p>
  <div class="hero-cta"><a href="#modalidades" class="btn btn-grad">Conheça as aulas</a><a href="#agendar" class="btn btn-ghost">Agende uma aula experimental</a></div>
  <div class="hero-selos">
    <div class="selo"><span class="si">🎓</span><div><b>Metodologias certificadas</b><span>Vaganova · Jazz For Fun · Hip-Hop IDMUS</span></div></div>
    <div class="selo"><span class="si">🌍</span><div><b>Chancela do CID / UNESCO</b><span>Conselho Internacional de Dança</span></div></div>
    <div class="selo"><span class="si">⭐</span><div><b>Reconhecimento nacional</b><span>Referência em formação artística no Pará</span></div></div>
  </div>
</div></section>

<section class="wrap acessos"><div class="acessos-grid">
  <a href="${SISTEMA}/login" class="acard"><span class="ic" style="background:linear-gradient(135deg,#8C52FF,#b15cff)">⚙</span><h3>Sistema</h3><p>Acesso da equipe, secretaria e administração.</p><span class="go">Entrar →</span></a>
  <a href="${SISTEMA}/portal/login" class="acard"><span class="ic" style="background:linear-gradient(135deg,#ff5ca8,#ff8ac0)">♥</span><h3>Portal do Responsável</h3><p>Faturas, mensalidades, dependentes e comunicados.</p><span class="go">Acessar portal →</span></a>
  <a href="${SISTEMA}/webloja" class="acard"><span class="ic" style="background:linear-gradient(135deg,#6a3df5,#9a5cff)">🛍</span><h3>Web Loja</h3><p>Figurinos, calçados e produtos oficiais da escola.</p><span class="go">Ir às compras →</span></a>
  <a href="__BILHETERIA__" class="acard"><span class="ic" style="background:linear-gradient(135deg,#ff7a3d,#ff5ca8)">🎟</span><h3>Bilheteria</h3><p>Ingressos dos espetáculos, direto e sem fila.</p><span class="go">Comprar ingresso →</span></a>
</div></section>

<section class="sec wrap sobre" id="sobre">
  <span class="eyebrow">O movimento Conexão Dança</span><h2>Mais que uma escola, um movimento</h2>
  <p class="lead">Somos um centro de formação artística e cultural em Salinópolis, no coração da Amazônia. Formamos bailarinos, fortalecemos a cultura paraense e usamos a dança como instrumento de inclusão social e transformação — levando arte e oportunidade a diferentes comunidades da nossa cidade e região.</p>
  <div class="valores-grid">
    <div class="vcard"><span class="vic">🩰</span><h3>Formação de excelência</h3><p>Metodologias reconhecidas internacionalmente — Vaganova, Jazz For Fun e o Hip-Hop do IDMUS — com o selo do CID, Conselho Internacional de Dança da UNESCO.</p></div>
    <div class="vcard"><span class="vic">🤝</span><h3>Inclusão e protagonismo</h3><p>Mais de 40 alunos em situação de vulnerabilidade têm acesso gratuito à formação artística e ao reconhecimento internacional.</p></div>
    <div class="vcard"><span class="vic">🌿</span><h3>Cultura amazônica</h3><p>Valorizamos a identidade paraense e a arte como vetor de desenvolvimento humano, turismo e economia criativa.</p></div>
  </div>
</section>

<!--PAINEL-->

<section class="sec wrap" id="modalidades">
  <span class="eyebrow">Modalidades</span><h2>Encontre a sua dança</h2>
  <p class="lead">Turmas divididas por idade e nível, com metodologias reconhecidas internacionalmente — Vaganova no Ballet, Jazz For Fun e o Hip-Hop do IDMUS — e o selo do CID, Conselho Internacional de Dança da UNESCO.</p>
  <div class="mod-grid">
    <div class="mcard"><img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80" alt="Ballet"><div class="cap"><h3>Ballet Clássico</h3><p>Metodologia Vaganova · do baby class ao adulto</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80" alt="Jazz"><div class="cap"><h3>Jazz Dance</h3><p>Método Jazz For Fun · técnica e palco</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=800&q=80" alt="Hip Hop"><div class="cap"><h3>Hip Hop</h3><p>Cultura urbana com o IDMUS · coreografia</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80" alt="Contemporâneo"><div class="cap"><h3>Contemporâneo</h3><p>Criação e linguagem do corpo</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?auto=format&fit=crop&w=800&q=80" alt="Baby Class"><div class="cap"><h3>Baby Class</h3><p>Primeiros passos, a partir de 3 anos</p></div></div>
    <div class="mcard"><img src="https://images.unsplash.com/photo-1583244532610-2a234e7c3e84?auto=format&fit=crop&w=800&q=80" alt="Danças Urbanas"><div class="cap"><h3>Danças Urbanas</h3><p>Street, K-pop e freestyle</p></div></div>
  </div>
</section>

<section class="sec eventos" id="eventos"><div class="wrap">
  <span class="eyebrow">Eventos & Espetáculos</span><h2>Próximos espetáculos</h2>
  <p class="lead">Espetáculos, mostras e festivais ao longo do ano. Os ingressos são vendidos direto pela bilheteria — sem passar pela loja, sem fila no dia.</p>
  <!--EVENTOS-->
</div></section>

<section class="sec wrap" id="noticias">
  <span class="eyebrow">Notícias de dança</span><h2>Fique por dentro</h2>
  <p class="lead">Novidades da escola, bastidores e ações do movimento Conexão Dança.</p>
  <div class="embreve"><b>Conteúdo novo a caminho</b>Em breve, notícias, bastidores e histórias por aqui. Por enquanto, o dia a dia da escola está no nosso Instagram, logo abaixo.</div>
</section>

<section class="sec insta"><div class="wrap">
  <div class="row"><div><span class="eyebrow" style="color:#ff8ac0">@conexaodanca.ltda</span><h2 style="color:#fff;font-size:clamp(28px,4vw,42px)">Siga a gente no Instagram</h2></div><a href="https://instagram.com/conexaodanca.ltda" class="btn btn-grad">Seguir no Instagram</a></div>
  <div class="ig-grid"><!--IG_GRID--></div>
</div></section>

<section class="sec wrap" id="cafe"><div class="cafe-inner">
  <div><span class="eyebrow">Café Conexão</span><h2>Um cafezinho enquanto a aula acontece</h2><p class="lead" style="margin-bottom:24px">O espaço de convivência da escola. Enquanto as crianças dançam, os responsáveis relaxam com café, lanches e companhia. Pais e alunos podem usar a conta interna e acompanhar tudo pelo portal.</p><a href="${SISTEMA}/cafe/cardapio" class="btn btn-grad">Ver o cardápio</a></div>
  <div class="cafe-img"><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80" alt="Café"></div>
</div></section>

<section class="sec director" id="equipe"><div class="wrap">
  <span class="eyebrow">Direção</span><h2>Gabrielle Ribeiro</h2>
  <div class="dir-inner" style="margin-top:30px">
    <div class="dir-ph">GR</div>
    <div>
      <span class="role">Diretora Geral · Artista, coreógrafa e empreendedora cultural</span>
      <p>À frente da Conexão Dança, Gabrielle é reconhecida nacionalmente na comunidade da dança e é membro fundadora do CID — Conselho Internacional de Dança da UNESCO, seção Belém, e do Colegiado de Dança do Pará.</p>
      <p>Com ampla experiência em gestão de projetos, produção artística e formação cultural, lidera um trabalho que une excelência técnica, inclusão social e valorização da cultura amazônica.</p>
      <p style="color:var(--muted);font-size:14px">Conheça em breve todo o time de professores que faz a Conexão Dança acontecer.</p>
    </div>
  </div>
</div></section>

<section class="sec apoiadores" id="apoiadores"><div class="wrap">
  <span class="eyebrow" style="color:#ff8ac0">Apoiadores</span><h2 style="color:#fff">Quem caminha com a gente</h2>
  <p class="lead">Parcerias que tornam possível levar dança, formação e oportunidade a mais gente.</p>
  <div class="apoio-destaque"><span class="badge">Patrocinador Oficial</span><h3>GAV Resorts</h3><p>Uma das maiores redes de multipropriedades do Brasil e parceira dos nossos projetos sociais — viabilizando formação artística gratuita para mais de 40 alunos em situação de vulnerabilidade, com acesso ao reconhecimento internacional do CID/UNESCO.</p></div>
  <p class="apoio-cta">Sua empresa também pode fazer parte desse movimento. <a href="#contato">Seja um apoiador</a>.</p>
</div></section>

<section class="sec contato" id="contato"><div class="wrap">
  <span class="eyebrow">Contato & Localização</span><h2>Venha dançar com a gente</h2>
  <div class="ct-inner" style="margin-top:38px">
    <div class="ct-card">
      <div class="ct-item"><span class="ic">📍</span><div><b>Endereço</b><span>Viela Joaquim Távora, 44 — Bairro Novo, Salinópolis-PA · CEP 66.050-080</span></div></div>
      <div class="ct-item"><span class="ic">📞</span><div><b>Telefone / WhatsApp</b><span>(91) 98602-3030</span></div></div>
      <div class="ct-item"><span class="ic">✉</span><div><b>E-mail</b><span>contato@conexaodanca.com</span></div></div>
      <div class="ct-item"><span class="ic">🕐</span><div><b>Horário</b><span>Seg a Sex, 8h–21h · Sáb, 8h–13h</span></div></div>
      <a href="https://wa.me/5591986023030" class="btn btn-grad" style="margin-top:8px">Falar no WhatsApp</a>
    </div>
    <div class="map"><iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Viela+Joaquim+T%C3%A1vora+44+Bairro+Novo+Salin%C3%B3polis+PA&output=embed"></iframe></div>
  </div>
</div></section>

<section class="sec cta-final"><div class="wrap">
  <h2>Sua próxima dança começa aqui</h2><p>Agende uma aula experimental gratuita e sinta a energia da Conexão Dança.</p>
  <a href="#agendar" class="btn btn-ghost" style="border-color:#fff">Quero experimentar</a>
</div></section>

<!--AGENDAR-->

<footer><div class="wrap">
  <div class="foot-grid">
    <div><a href="#topo" class="brand" style="color:#fff;margin-bottom:14px"><span class="mark">✦</span> Conexão Dança</a><p style="font-size:14px;max-width:34ch">Centro de formação artística e cultural em Salinópolis-PA. Dança, inclusão e cultura amazônica.</p><div class="soc"><a href="https://instagram.com/conexaodanca.ltda">⌾</a><a href="https://wa.me/5591986023030">✆</a><a href="mailto:contato@conexaodanca.com">✉</a></div></div>
    <div><h4>Navegar</h4><a href="#sobre">Sobre</a><a href="#modalidades">Modalidades</a><a href="#eventos">Eventos</a><a href="#cafe">Café</a><a href="#equipe">Direção</a><a href="#apoiadores">Apoiadores</a></div>
    <div><h4>Acessos</h4><a href="${SISTEMA}/login">Sistema</a><a href="${SISTEMA}/portal/login">Portal do Responsável</a><a href="${SISTEMA}/webloja">Web Loja</a><a href="__BILHETERIA__">Bilheteria</a><a href="${SISTEMA}/cafe/cardapio">Cardápio do Café</a></div>
    <div><h4>Contato</h4><a href="#contato">Viela Joaquim Távora, 44 — Salinópolis-PA</a><a href="tel:+5591986023030">(91) 98602-3030</a><a href="mailto:contato@conexaodanca.com">contato@conexaodanca.com</a></div>
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

const DIAS_ORDEM = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const EVENTOS_FALLBACK = `<div class="embreve"><b>Próximos espetáculos em breve</b>Estamos preparando a próxima agenda. Acompanhe por aqui e pelo nosso Instagram.</div>`;

type EventoItem = {
  titulo?: string;
  evento?: string;
  data?: string;
  dia?: string;
  mes?: string;
  dataLabel?: string;
  hora?: string;
  local?: string;
  cidade?: string;
  slug?: string;
  edicaoSlug?: string;
};

type SistemaRender = { painel: string; eventos: string; bilheteriaUrl: string };

// Lê os dados públicos do sistema (conexaodanca.art.br) numa única chamada:
// painel ao vivo (números/grade) + eventos à venda (bilheteria). Se o sistema
// não responder, o painel some e a seção de eventos cai no "em breve".
async function fetchSistema(): Promise<SistemaRender> {
  const fallback: SistemaRender = { painel: "", eventos: EVENTOS_FALLBACK, bilheteriaUrl: "#eventos" };
  try {
    const res = await fetch("https://conexaodanca.art.br/api/public/stats", {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return fallback;
    const d: any = await res.json();
    if (!d || typeof d.alunos !== "number") return fallback;

    // ---------- Painel ao vivo ----------
    const grade: Array<{ dia: string; modalidade: string }> = Array.isArray(d.grade) ? d.grade : [];
    const hoje = String(d.hoje || "");
    const hojeMods = Array.from(new Set(grade.filter((g) => g.dia === hoje).map((g) => g.modalidade)));
    const hojeHtml = hojeMods.length
      ? hojeMods.map((m) => `<span class="chip">${esc(m)}</span>`).join("")
      : `<span class="chip off">Sem aulas hoje</span>`;
    const cols = DIAS_ORDEM.map((dia) => {
      const mods = Array.from(new Set(grade.filter((g) => g.dia === dia).map((g) => g.modalidade)));
      const items = mods.length
        ? mods.map((m) => `<div class="gi">${esc(m)}</div>`).join("")
        : `<div class="gi" style="color:#7a6ca3">—</div>`;
      return `<div class="gcol${dia === hoje ? " today" : ""}"><h4>${dia}</h4>${items}</div>`;
    }).join("");
    const nMod = Array.isArray(d.modalidades) ? d.modalidades.length : 0;
    const painel = `<section class="sec painel" id="painel"><div class="wrap">
  <span class="eyebrow" style="color:#ff8ac0">A escola agora</span><h2 style="color:#fff">A Conexão Dança, ao vivo</h2>
  <p class="lead">Direto do nosso sistema — números reais que se atualizam sozinhos.</p>
  <div class="stats-row">
    <div class="stat"><div class="num">${d.alunos}</div><div class="lbl">alunos ativos</div></div>
    <div class="stat"><div class="num">${d.bolsistas}</div><div class="lbl">bolsistas do movimento</div></div>
    <div class="stat"><div class="num">${d.turmasAtivas}</div><div class="lbl">turmas ativas</div></div>
    <div class="stat"><div class="num">${nMod}</div><div class="lbl">modalidades</div></div>
  </div>
  <div class="hoje-box"><h3>Hoje na Conexão Dança</h3><div class="chips">${hojeHtml}</div></div>
  <div class="grade-wk">${cols}</div>
  <p class="atualizado">Leitura automática do sistema da escola, atualizada a cada 30 min.</p>
</div></section>`;

    // ---------- Eventos à venda (bilheteria) ----------
    const eventosArr: EventoItem[] = Array.isArray(d.eventos) ? d.eventos : [];
    if (!eventosArr.length) {
      return { painel, eventos: EVENTOS_FALLBACK, bilheteriaUrl: "#eventos" };
    }
    const resolved = eventosArr.map((ev) => {
      const slug = String(ev.slug || "");
      const url = slug ? `${SISTEMA}/ingressos/${encodeURIComponent(slug)}` : "#eventos";
      return { ev, url };
    });
    const cards = resolved
      .map(({ ev, url }) => {
        const meta = [
          ev.dataLabel ? `<span>📅 ${esc(String(ev.dataLabel))}</span>` : "",
          ev.hora ? `<span>🕐 ${esc(String(ev.hora))}h</span>` : "",
          ev.local ? `<span>📍 ${esc(String(ev.local))}</span>` : "",
        ].join("");
        return `<article class="evcard">
      <div class="ph evph"><div class="date"><div class="d">${esc(String(ev.dia ?? ""))}</div><div class="m">${esc(String(ev.mes ?? ""))}</div></div><span class="evph-ic">🎭</span></div>
      <div class="body">${ev.evento ? `<span class="fest">${esc(String(ev.evento))}</span>` : ""}<h3>${esc(String(ev.titulo ?? "Espetáculo"))}</h3><div class="meta">${meta}</div><a href="${url}" class="btn btn-grad">🎟 Comprar ingresso</a></div>
    </article>`;
      })
      .join("");
    // Dados estruturados (Schema.org) — ajuda o Google a exibir os espetáculos.
    const ldData = resolved.map(({ ev, url }) => ({
      "@context": "https://schema.org",
      "@type": "DanceEvent",
      name: `${ev.titulo ?? "Espetáculo"}${ev.evento ? ` — ${ev.evento}` : ""}`,
      startDate: ev.data ? (ev.hora ? `${ev.data}T${ev.hora}:00-03:00` : ev.data) : undefined,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: ev.local || "Conexão Dança",
        address: ev.cidade || "Salinópolis, PA",
      },
      organizer: { "@type": "Organization", name: "Conexão Dança", url: "https://conexaodanca.com" },
      offers: { "@type": "Offer", url, availability: "https://schema.org/InStock" },
    }));
    const ld = `<script type="application/ld+json">${JSON.stringify(ldData).replace(/</g, "\\u003c")}</script>`;
    const eventos = `<div class="ev-grid">${cards}</div><p class="ev-note">Ingressos pela bilheteria oficial da Conexão Dança — pagamento por Pix ou cartão, com entrega imediata por e-mail.</p>${ld}`;

    const edicaoSlug = String(eventosArr[0].edicaoSlug || "");
    const firstSlug = String(eventosArr[0].slug || "");
    const bilheteriaUrl = edicaoSlug
      ? `${SISTEMA}/ingressos/edicao/${encodeURIComponent(edicaoSlug)}`
      : firstSlug
        ? `${SISTEMA}/ingressos/${encodeURIComponent(firstSlug)}`
        : "#eventos";

    return { painel, eventos, bilheteriaUrl };
  } catch {
    return fallback;
  }
}

export default async function HomePage() {
  const [igGrid, sistema] = await Promise.all([
    fetchInstagramGrid(),
    fetchSistema(),
  ]);
  const body = BODY.replace("<!--IG_GRID-->", igGrid)
    .replace("<!--PAINEL-->", sistema.painel)
    .replace("<!--EVENTOS-->", sistema.eventos)
    .split("__BILHETERIA__")
    .join(sistema.bilheteriaUrl);
  const [agPre, agPost = ""] = body.split("<!--AGENDAR-->");
  return (
    <div className="cd-site">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: agPre }} />
      <AgendaExperimental />
      <div dangerouslySetInnerHTML={{ __html: agPost }} />
    </div>
  );
}
