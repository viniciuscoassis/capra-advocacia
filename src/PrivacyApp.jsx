import capraLogo from "./assets/capra-advocacia-logo.png";

export default function PrivacyApp() {
  return (
    <>
      <header className="legal-header">
        <a className="legal-header__brand" href="/">
          <img className="header__logo-image" src={capraLogo} alt="Capra Advocacia — início" width="1472" height="1068" />
        </a>
        <a className="legal-header__back" href="/#contato">
          Voltar ao site
        </a>
      </header>

      <main className="legal-content">
        <p className="legal-content__eyebrow">Transparência no atendimento</p>
        <h1>Aviso de Privacidade</h1>
        <p className="legal-content__intro">
          Este aviso explica, de forma objetiva, como os dados informados no site são
          utilizados para iniciar o contato com a Capra Advocacia.
        </p>

        <section>
          <h2>Responsável pelo tratamento</h2>
          <p>
            Capra Advocacia, com atendimento profissional de Regiane Capra, OAB/MG
            114.383 e CRECI-MG 52.866, na Av. João Pinheiro, 137, sala 01, Centro,
            Poços de Caldas–MG, CEP 37701-387.
          </p>
        </section>

        <section>
          <h2>Dados e finalidade</h2>
          <p>
            O formulário solicita nome, telefone, assunto e um resumo da situação.
            Essas informações são utilizadas exclusivamente para organizar a
            solicitação, retornar o contato e realizar a triagem inicial do atendimento.
          </p>
        </section>

        <section>
          <h2>Como o formulário funciona</h2>
          <p>
            Os dados preenchidos não são enviados nem armazenados por um servidor
            próprio do site. A mensagem é montada no dispositivo do visitante e o
            WhatsApp é aberto para que ele decida se deseja enviá-la. Ao prosseguir no
            WhatsApp, o tratamento também estará sujeito aos termos e às práticas de
            privacidade da plataforma.
          </p>
          <p>
            Não envie documentos, senhas, informações financeiras ou outros dados
            sensíveis nesse primeiro contato.
          </p>
        </section>

        <section>
          <h2>Hospedagem e mensuração</h2>
          <p>
            O serviço de hospedagem pode registrar informações técnicas necessárias à
            segurança e ao funcionamento, como endereço IP, data, horário e navegador.
            O site poderá utilizar tecnologias de mensuração para avaliar campanhas
            publicitárias. Quando essas tecnologias forem ativadas, o aviso e os
            controles aplicáveis serão apresentados de acordo com a configuração
            adotada.
          </p>
        </section>

        <section>
          <h2>Compartilhamento e conservação</h2>
          <p>
            Os dados não são comercializados. Eles poderão ser tratados pelos
            provedores necessários ao atendimento, como hospedagem, WhatsApp e e-mail,
            e conservados pelo tempo necessário ao retorno solicitado, à prestação do
            serviço e ao cumprimento de obrigações legais ou profissionais.
          </p>
        </section>

        <section>
          <h2>Seus direitos e contato</h2>
          <p>
            Para solicitar informações, correção ou eliminação de dados, quando
            aplicável, entre em contato pelo e-mail{" "}
            <a href="mailto:re.capra@hotmail.com">re.capra@hotmail.com</a> ou pelo
            telefone <a href="tel:+5535991442912">(35) 99144-2912</a>.
          </p>
        </section>

        <p className="legal-content__updated">
          Última atualização: 28 de agosto de 2026.
        </p>
      </main>
    </>
  );
}
