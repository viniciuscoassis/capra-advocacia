# Site — Capra Advocacia / Regiane Capra

Landing page em React para a advocacia imobiliária de Regiane Capra, em Poços de Caldas–MG.

## Visualização local

Dentro deste diretório:

```bash
npm install
npm run dev -- --port 4174
```

Abrir `http://localhost:4174`.

## Arquivos

- `index.html`: entrada do site React e metadados da página inicial.
- A seção final de localização contém mapa incorporado, rota externa e confirmação de atendimento pelo WhatsApp.
- `privacidade.html`: entrada React do aviso de privacidade.
- `src/App.jsx`: componentes, navegação, formulário e contatos.
- `src/PrivacyApp.jsx`: conteúdo do aviso de privacidade.
- `src/useSiteMotion.js`: animações GSAP integradas ao ciclo de vida do React.
- `src/site-data.js`: áreas de atuação, etapas do método e públicos.
- `style.css`: identidade visual, layout e responsividade.
- `regiane.jpg`: retrato profissional usado na seção Sobre.
- `fonts/`: fontes locais e licenças OFL.
- `IDENTIDADE_VISUAL.md`: arquitetura de marca, paleta e regras visuais.
- `PLANO_GOOGLE_ADS.md`: plano de aquisição e limites éticos.

## Dados confirmados em 2026-08-28

- Marca de lançamento: `Capra Advocacia`, com Regiane Capra como autoridade visível.
- WhatsApp e telefone: `+55 35 99144-2912`.
- E-mail: `re.capra@hotmail.com`.
- Endereço: Av. João Pinheiro, 137, sala 01, Centro, Poços de Caldas–MG, CEP 37701-387.

## Configurações ainda pendentes

- CRECI da Regiane.
- Abrangência do atendimento online.
- Revisão do aviso de privacidade pela Regiane antes da publicação.
- Domínio e hospedagem públicos.
- Identificadores do Google Tag Manager/Google Ads.

O formulário não envia dados a um servidor. Ele monta uma mensagem no dispositivo do visitante e abre o WhatsApp. Os eventos `generate_lead` ficam disponíveis no `dataLayer` para conexão futura com a mensuração.

## Build de produção

```bash
npm run build
npm run preview -- --port 4174
```

O build gera `dist/index.html` e `dist/privacidade.html`. O repositório Git independente usa o remoto `git@github.com:viniciuscoassis/capra-advocacia.git`.

## Layout

- Desktop: o hero usa a altura visível como mínimo e reduz a tipografia em telas baixas.
- Mobile: o hero usa altura natural, sem cortar conteúdo.
- As demais seções crescem conforme o conteúdo; não há altura fixa de viewport.
