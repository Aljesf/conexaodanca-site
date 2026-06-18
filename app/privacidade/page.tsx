import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Conexão Dança",
  description:
    "Política de Privacidade da Conexão Dança LTDA, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PoliticaDePrivacidadePage() {
  const atualizadoEm = "18 de junho de 2026";

  return (
    <main
      style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "48px 20px 80px",
        color: "#1f2937",
        lineHeight: 1.7,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Política de Privacidade
      </h1>
      <p style={{ color: "#6b7280", marginTop: 0 }}>
        Conexão Dança LTDA — CNPJ 38.004.122/0001-29
        <br />
        Última atualização: {atualizadoEm}
      </p>

      <p>
        A Conexão Dança (&quot;nós&quot;) respeita a sua privacidade e está
        comprometida com a proteção dos dados pessoais de alunos, responsáveis,
        colaboradores e visitantes, em conformidade com a Lei nº 13.709/2018 (Lei
        Geral de Proteção de Dados — LGPD).
      </p>

      <h2 style={h2}>1. A quem esta política se aplica</h2>
      <p>
        Esta política se aplica ao site conexaodanca.com, ao nosso sistema de
        gestão escolar e aos nossos canais de atendimento, incluindo o WhatsApp.
      </p>

      <h2 style={h2}>2. Dados que coletamos</h2>
      <ul>
        <li>
          Dados de identificação e contato do aluno e/ou responsável: nome,
          telefone, e-mail.
        </li>
        <li>Dados do aluno: turma, frequência e informações pedagógicas.</li>
        <li>
          Dados financeiros: mensalidades, pagamentos e histórico de cobrança.
        </li>
        <li>
          Dados de comunicação: mensagens trocadas com a escola, inclusive por
          WhatsApp.
        </li>
        <li>Dados de navegação: cookies e informações técnicas do site.</li>
      </ul>

      <h2 style={h2}>3. Para que usamos seus dados</h2>
      <ul>
        <li>Gestão da matrícula e da vida escolar do aluno.</li>
        <li>
          Comunicação com responsáveis (avisos, lembretes e atendimento),
          inclusive por WhatsApp.
        </li>
        <li>Emissão de cobranças e controle financeiro.</li>
        <li>Cumprimento de obrigações legais e regulatórias.</li>
        <li>Melhoria dos nossos serviços.</li>
      </ul>

      <h2 style={h2}>4. Base legal do tratamento</h2>
      <p>
        Tratamos seus dados com base em: execução de contrato, cumprimento de
        obrigação legal, legítimo interesse e, quando aplicável, consentimento
        (por exemplo, para o envio de comunicações por WhatsApp).
      </p>

      <h2 style={h2}>5. Comunicação por WhatsApp</h2>
      <p>
        Utilizamos a Plataforma do WhatsApp Business, operada pela Meta, para nos
        comunicar com responsáveis e alunos. Ao iniciar ou manter conversa conosco
        pelo WhatsApp, você concorda com o tratamento das mensagens para fins de
        atendimento e comunicação escolar. Você pode solicitar a interrupção dessas
        comunicações a qualquer momento, respondendo &quot;SAIR&quot; ou entrando em
        contato pelos nossos canais.
      </p>

      <h2 style={h2}>6. Compartilhamento de dados</h2>
      <p>Não vendemos seus dados. Podemos compartilhá-los com:</p>
      <ul>
        <li>Provedores de pagamento, para processar cobranças.</li>
        <li>
          Meta Platforms, para viabilizar a comunicação por WhatsApp.
        </li>
        <li>
          Provedores de tecnologia e hospedagem, para operar nossos sistemas.
        </li>
        <li>Autoridades públicas, quando exigido por lei.</li>
      </ul>
      <p>
        Esses parceiros tratam os dados conforme suas próprias políticas e apenas
        na medida necessária para a prestação dos serviços.
      </p>

      <h2 style={h2}>7. Cookies</h2>
      <p>
        Nosso site pode usar cookies para funcionamento e melhoria da experiência.
        Você pode gerenciá-los nas configurações do seu navegador.
      </p>

      <h2 style={h2}>8. Armazenamento, segurança e retenção</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger seus dados.
        Mantemos os dados pelo tempo necessário às finalidades descritas e às
        obrigações legais; depois disso, eles são eliminados ou anonimizados.
      </p>

      <h2 style={h2}>9. Seus direitos (LGPD)</h2>
      <p>
        Você pode, a qualquer momento: confirmar a existência de tratamento;
        acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar
        anonimização, bloqueio ou eliminação; solicitar portabilidade; revogar o
        consentimento; e obter informações sobre os compartilhamentos. Para
        exercer esses direitos, use o contato abaixo.
      </p>

      <h2 style={h2}>10. Dados de crianças e adolescentes</h2>
      <p>
        Tratamos dados de alunos menores de idade no melhor interesse deles, com o
        consentimento e sob a responsabilidade de seus pais ou responsáveis legais.
      </p>

      <h2 style={h2}>11. Alterações nesta política</h2>
      <p>
        Podemos atualizar esta política periodicamente. A versão vigente estará
        sempre nesta página, com a respectiva data de atualização.
      </p>

      <h2 style={h2}>12. Contato</h2>
      <p>
        Para dúvidas ou para exercer seus direitos, fale com a gente:
        <br />
        E-mail: <a href="mailto:contato@conexaodanca.com">contato@conexaodanca.com</a>
        <br />
        Conexão Dança LTDA — CNPJ 38.004.122/0001-29
      </p>
    </main>
  );
}

const h2: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  marginTop: 32,
  marginBottom: 8,
};
