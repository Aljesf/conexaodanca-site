"use client";

import { useState } from "react";

const MODALIDADES = [
  "Ballet Clássico",
  "Jazz Dance",
  "Dança Contemporânea",
  "Hip Hop",
  "Karatê e Kobudô",
  "Ainda não sei",
];
const WHATSAPP = "5591986023030";
const WPP_HREF = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Tenho interesse em uma aula experimental na Conexão Dança.",
)}`;

export default function AgendaExperimental() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    const fd = new FormData(e.currentTarget);
    if (String(fd.get("website") || "").trim()) return; // honeypot

    const nome = String(fd.get("nome") || "").trim();
    const telefone = String(fd.get("telefone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    if (!nome) return setErro("Informe o nome.");
    if (!telefone && !email) return setErro("Informe um telefone ou e-mail para contato.");

    setEnviando(true);
    try {
      const res = await fetch("https://conexaodanca.art.br/api/public/captacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          telefone,
          email,
          dataNascimento: fd.get("dataNascimento"),
          modalidade: fd.get("modalidade"),
          mensagem: fd.get("mensagem"),
          responsavelNome: fd.get("responsavelNome"),
          responsavelTelefone: fd.get("responsavelTelefone"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (data?.ok) setEnviado(true);
      else setErro(data?.erro || "Não foi possível enviar agora. Tente pelo WhatsApp.");
    } catch {
      setErro("Não foi possível enviar agora. Tente pelo WhatsApp.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="sec agendar" id="agendar">
      <div className="wrap">
        <span className="eyebrow">Aula experimental</span>
        <h2>Venha experimentar</h2>
        <p className="lead">
          Deixe seus dados e a nossa equipe entra em contato pra combinar sua aula experimental gratuita.
        </p>

        {enviado ? (
          <div className="ag-ok">
            <div className="ag-ok-ic">✓</div>
            <h3>Recebemos seu interesse!</h3>
            <p>
              Nossa equipe vai falar com você em breve pra combinar a aula experimental. Quer adiantar?{" "}
              <a href={WPP_HREF} target="_blank" rel="noopener noreferrer">
                Chama no WhatsApp
              </a>
              .
            </p>
          </div>
        ) : (
          <form className="ag-form" onSubmit={onSubmit}>
            <div className="ag-grid">
              <label>
                Nome do aluno(a)*
                <input name="nome" required maxLength={120} autoComplete="name" />
              </label>
              <label>
                WhatsApp / Telefone
                <input name="telefone" inputMode="tel" maxLength={30} placeholder="(91) 9____-____" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" maxLength={160} autoComplete="email" />
              </label>
              <label>
                Data de nascimento
                <input name="dataNascimento" type="date" />
              </label>
              <label className="ag-full">
                Modalidade de interesse
                <select name="modalidade" defaultValue="">
                  <option value="">Selecione (opcional)</option>
                  {MODALIDADES.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Responsável (se for menor)
                <input name="responsavelNome" maxLength={120} />
              </label>
              <label>
                Telefone do responsável
                <input name="responsavelTelefone" inputMode="tel" maxLength={30} />
              </label>
              <label className="ag-full">
                Mensagem (opcional)
                <textarea name="mensagem" rows={3} maxLength={500} />
              </label>
            </div>

            <input name="website" className="ag-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            {erro && <p className="ag-erro">{erro}</p>}

            <div className="ag-actions">
              <button type="submit" className="btn btn-grad" disabled={enviando}>
                {enviando ? "Enviando…" : "Enviar interesse"}
              </button>
              <a href={WPP_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-out">
                Prefere antecipar? WhatsApp
              </a>
            </div>

            <p className="ag-nota">
              Ao enviar, você concorda em ser contatado pela Conexão Dança. A data da aula experimental é
              combinada com a nossa equipe.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
