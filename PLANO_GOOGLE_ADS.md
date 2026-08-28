# Plano Inicial de Google Ads — Capra Advocacia / Regiane Capra

**Versão:** 2026-08-25  
**Objetivo:** validar demanda qualificada por advocacia imobiliária com um caminho simples entre pesquisa, página, WhatsApp e triagem.

## Decisão de marca e conta

Se `Capra Advocacia` for uma sociedade regularmente registrada e a operação pertencer ao escritório:

- Conta do Google Ads, Perfil da Empresa, domínio e faturamento em nome da **Capra Advocacia**.
- Regiane aparece nos anúncios e na página como profissional responsável, com `OAB/MG 114.383`.
- A Evo acessa a conta do Google Ads pela MCC, sem receber senha ou titularidade.

Se a sociedade ou a titularidade não estiver confirmada:

- Criar os ativos em nome de **Regiane Capra**.
- Usar apenas o nome profissional e a inscrição OAB comprovados.
- Migrar a arquitetura institucional somente depois da validação documental.

O Conselho Federal da OAB admite Google Ads para tornar públicas informações profissionais, desde que a publicidade seja moderada e respeite o Provimento 205/2021. A aquisição de palavras-chave deve responder a uma busca iniciada pelo potencial cliente; anúncios ostensivos em vídeo não entram neste piloto.

Fontes oficiais:

- [Provimento 205/2021 do Conselho Federal da OAB](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)
- [Decisão do Conselho Federal da OAB sobre Google Ads](https://www.oab.org.br/noticia/61649/orgao-especial-decide-que-advocacia-pode-utilizar-ferramenta-google-ads)
- [Políticas do Google Ads](https://support.google.com/adspolicy/answer/6008942?hl=pt-BR)

## Guardrail comercial

O site institucional pode apresentar todas as áreas de atuação. A campanha não deve anunciar tudo ao mesmo tempo.

### Decisão do primeiro ciclo

- Não anunciar apenas `advogado`, `advocacia` ou todas as áreas do escritório: a intenção é ampla demais e tende a consumir orçamento com contatos pouco aderentes.
- Não depender somente de `advogado imobiliário poços de caldas`: é a palavra mais óbvia, mas pode ter pouco volume local.
- Usar uma campanha local com três grupos próximos da mesma intenção: procura pela profissional, análise antes de comprar/vender e contratos imobiliários.
- Manter a página institucional abrangente, mas fazer cada anúncio levar o visitante à parte da página que corresponde à busca.

Primeiro teste recomendado:

> Análise jurídica e documental antes da compra, venda ou assinatura de contrato imobiliário.

É um problema com intenção clara, urgência real e ligação direta com a proposta de `clareza antes da assinatura`. Leilões, locações, organização patrimonial e assessoria para corretores entram em campanhas próprias somente depois de haver dados ou prioridade comercial confirmada.

## Como o Google Ads funciona neste projeto

1. Uma pessoa pesquisa um problema ou profissional no Google.
2. Se a pesquisa, o local e as palavras-chave forem compatíveis, o anúncio entra em um leilão.
3. O Google considera lance, concorrência, relevância do anúncio e experiência da página para decidir a exibição e a posição.
4. Em campanha de Pesquisa com cobrança por clique, o orçamento é consumido quando alguém clica, não apenas quando o anúncio aparece.
5. O visitante acessa o site e pode enviar o formulário ou abrir o WhatsApp.
6. A campanha registra a conversão digital; a equipe registra se houve conversa qualificada, consulta e contratação.

O Google Ads não garante clientes. Ele compra acesso a pessoas que já demonstraram intenção; a mensagem, a página, a triagem e a velocidade de resposta determinam quanto dessa intenção vira oportunidade comercial.

## Pré-requisitos

1. Confirmar nome publicitário permitido, OAB, endereço, CRECI, WhatsApp, e-mail e áreas efetivamente atendidas.
2. Definir quem responde os contatos, em quanto tempo e quais informações qualificam uma consulta.
3. Cliente manter titularidade da conta, meio de pagamento e verificação do anunciante.
4. Vincular Perfil da Empresa e Google Ads quando os ativos estiverem corretos.
5. Publicar política de privacidade antes de instalar tags de publicidade.
6. Configurar Google Tag Manager ou Google tag somente depois de existir o ID da conta.

## Campanha piloto

### Configuração

- Tipo: **Pesquisa**.
- Local: Poços de Caldas e região de atendimento presencial; separar atendimento online quando a abrangência jurídica estiver confirmada.
- Idioma: português.
- Rede de Display: desativada no início.
- Parceiros de pesquisa: desativados no primeiro ciclo para leitura mais limpa.
- Estratégia inicial: maximizar cliques com limite de CPC ou CPC manual enquanto não houver volume confiável de conversões; migrar para maximizar conversões apenas com mensuração válida.
- Orçamento de hipótese: `R$ 40–60/dia` por 30 dias, pago diretamente pela cliente. Ajustar após volume de busca, CPC real e capacidade de atendimento.

Nome sugerido: `Pesquisa | Advocacia Imobiliária | Poços de Caldas`.

Na configuração avançada de local, começar com **presença** — pessoas que estão ou costumam estar na região atendida — para evitar pagar por curiosos distantes. Ampliar para pessoas interessadas em Poços de Caldas somente se a análise dos contatos mostrar utilidade.

### Grupos de anúncios

1. **Advocacia imobiliária local**
   - `advogado imobiliário poços de caldas`
   - `advogada imobiliária poços de caldas`
   - `advocacia imobiliária poços de caldas`
2. **Análise antes da compra ou venda**
   - `análise jurídica compra de imóvel`
   - `advogado para compra de imóvel`
   - `análise documentos imóvel advogado`
3. **Contrato imobiliário**
   - `advogado contrato compra e venda imóvel`
   - `revisão contrato imobiliário`
   - `elaboração contrato de imóvel`

Começar com correspondência exata e de frase. Termos amplos entram somente após revisar consultas reais.

### Negativas iniciais

`grátis`, `gratuito`, `modelo`, `pdf`, `curso`, `faculdade`, `concurso`, `vaga`, `emprego`, `estágio`, `salário`, `defensoria`, `jusbrasil`, `o que é`, `segunda via`, `cartório telefone`.

Revisar os termos de pesquisa pelo menos duas vezes por semana no primeiro mês.

## Direção dos anúncios

Exemplo informativo:

**Título:** Advocacia Imobiliária em Poços de Caldas  
**Título:** Regiane Capra — OAB/MG 114.383  
**Título:** Análise de Documentos e Contratos  
**Descrição:** Orientação jurídica em negociações imobiliárias, contratos e análise documental. Atendimento presencial e online. Conheça as áreas de atuação.

Evitar:

- Promessas, garantias ou insinuação de resultado.
- Superlativos, comparação com outros profissionais e autoengrandecimento.
- Preços, descontos, gratuidade ou chamadas mercantilistas.
- Casos concretos, resultados de clientes ou exposição de processos.
- Urgência artificial, medo e frases como `não perca seu imóvel`.
- Usar `especialista` sem título ou qualificação que sustente essa apresentação.

## Página e conversão

Para lançamento, o site institucional pode receber o tráfego. Depois dos primeiros termos e conversas, criar uma página específica para o serviço vencedor.

Conversões:

- **Primária inicial:** formulário concluído e encaminhado ao WhatsApp.
- **Secundária:** clique direto no WhatsApp.
- **Resultado comercial real:** conversa qualificada, consulta agendada e contratação registradas no CRM.

O site já dispara eventos internos `generate_lead` para formulário e clique direto. Esses eventos ainda precisam ser conectados ao Google Tag Manager/Google Ads quando os IDs forem fornecidos. O Google permite medir ações no site, cliques e chamadas como conversões: [orientação oficial](https://support.google.com/google-ads/answer/1722054?hl=pt-BR).

### Decisão de implementação da mensuração — 2026-08-28

Usar o **Google Tag Manager**, sob titularidade da Capra Advocacia, porque o site já separa os eventos pela camada de dados e o contêiner permitirá revisar e publicar alterações sem editar o site a cada nova tag.

Configurar no Google Ads:

1. `Lead | Formulário para WhatsApp`
   - Evento: `generate_lead` com `lead_channel = whatsapp_form`.
   - Categoria: lead enviado.
   - Otimização: **principal**.
   - Contagem: **uma** por clique no anúncio.
2. `Contato | WhatsApp direto`
   - Evento: `generate_lead` com `lead_channel = whatsapp_direct`.
   - Categoria: contato.
   - Otimização: **secundária**, somente observação.
   - Contagem: **uma** por clique no anúncio.

Não contar abertura de mapa, rota, rolagem ou visualização de página como lead. Essas ações podem ser observadas separadamente no futuro, mas não devem ensinar o algoritmo a buscar interações sem intenção comercial.

No Google Tag Manager:

- Instalar a Tag do Google e o Vinculador de conversões em todas as páginas.
- Criar uma variável de camada de dados para `lead_channel`.
- Criar dois acionadores de evento personalizado `generate_lead`, filtrados pelo canal.
- Associar cada acionador à etiqueta de conversão e ao rótulo correspondente do Google Ads.
- Implementar o aviso de cookies e o modo de consentimento antes de ativar tags publicitárias.
- Validar rejeição e aceitação no modo de visualização/Tag Assistant antes de publicar o contêiner.

Configurar o sufixo de URL final dos anúncios para que a mensagem do formulário preserve a origem:

`utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}`

O clique no WhatsApp representa intenção, não comprova mensagem enviada. Conversa qualificada, consulta e contratação continuam sendo resultados off-line; quando houver volume e processo estável, integrar esses resultados ao Google Ads a partir do CRM.

## Atendimento e aprendizado

Registrar para cada contato:

- Termo ou campanha de origem.
- Assunto principal.
- Localidade.
- Qualificado ou não.
- Consulta agendada.
- Contratado e valor, quando aplicável.
- Motivo de perda.

Revisão semanal:

1. Termos de pesquisa e negativas.
2. Custo por conversa e por conversa qualificada.
3. Tempo de resposta no WhatsApp.
4. Assuntos com maior urgência, capacidade e valor.
5. Ajustes de página, anúncio e qualificação.

## Roteiro dos primeiros 30 dias

### Antes de ativar

- Confirmar titular da conta, nome publicitário, contatos e região atendida.
- Publicar a página e a política de privacidade.
- Testar formulário, WhatsApp e medição de conversões.
- Preparar uma resposta inicial e uma triagem curta para a Regiane não perder contatos por demora.

### Dias 1–7

- Ativar somente a campanha de Pesquisa local.
- Conferir diariamente se há gasto anormal, termos evidentemente irrelevantes ou falhas de contato.
- Não interpretar clique como lead: validar no WhatsApp quais contatos realmente chegaram.

### Dias 8–21

- Revisar termos de pesquisa duas vezes por semana e ampliar as negativas.
- Comparar os três grupos pelo número e custo de conversas qualificadas, não apenas pelo volume de cliques.
- Ajustar anúncios e página para as dúvidas reais recebidas.

### Dias 22–30

- Escolher a intenção vencedora e concentrar nela o orçamento.
- Pausar termos que gastaram sem produzir conversas úteis.
- Decidir entre manter, corrigir ou ampliar o piloto com base em custo por conversa qualificada, consultas e contratações.
- Criar uma página dedicada somente se os dados mostrarem um serviço vencedor; não atrasar o primeiro teste para construir várias páginas.

## Critério para expandir

Criar a segunda campanha apenas quando a primeira gerar leitura comercial suficiente ou quando a Regiane definir outra prioridade explícita. Leilões e assessoria recorrente para corretores são boas candidatas a testes separados; não devem ser misturadas com compra e venda na mesma mensagem.
