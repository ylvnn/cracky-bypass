# Key Authentication Bypass (Reverse Engineering)

Documentação técnica do processo de engenharia reversa, descriptografia e remoção do sistema de autenticação de um script para navegador (Tampermonkey) voltado ao jogo Krunker.

## Visão Geral

O projeto consistiu na análise de um arquivo JavaScript ofuscado que utilizava carregamento dinâmico, criptografia de payload e um sistema de bloqueio baseado em visualização de anúncios (Key Auth). O objetivo foi extrair o código-fonte original na memória, adaptar o ambiente para executá-lo localmente e substituir o módulo de autenticação por um bypass, resultando em um userscript limpo e funcional.

## Divisão de Trabalho

**1. Autor Original do Script** (crackyio)
- Desenvolveu a interface do cheat e a lógica de funcionamento.
- Implementou a ofuscação em Base64 com criptografia XOR.
- Adicionou uma verificação de integridade (hash FNV-1a) para impedir alterações diretas no arquivo.
- Criou o módulo `CrackyAccess`, responsável por gerenciar links rotativos do BSTLR, validar a exibição de vídeos no YouTube e impedir o carregamento do menu principal caso a chave (Key Auth) não fosse confirmada.

**2. Operador** (ylvnn)
- Manteve o processo prático de testes e execução.
- Identificou o array de links presente no objeto de configuração.
- Executou os scripts de extração e contornou os limites de tokens de outras Inteligências Artificiais, permitindo o download completo do arquivo.
- Realizou a edição manual: removeu o bloco original `CrackyAccess` e substituiu pelo objeto falso de bypass.
- Analisou os dados para identificar a falha de execução no carregamento e aplicou uma correção, resultando na inicialização bem-sucedida do cheat.
- Forneceu métodos para contornar bloqueios de segurança do navegador (Trusted Types) durante a extração

**3. Inteligência Artificial (chat.deepseek.com)**
- Analisou o arquivo ofuscado e identificou o algoritmo de criptografia (XOR com deslocamento e FNV-1a).
- Construiu um ambiente simulado (Sandbox) em Node.js com stubs para objetos do navegador (`CanvasRenderingContext2D`, `location`, `document`, etc.), permitindo que o script original rodasse e descriptografasse a si mesmo sem falhar por falta de APIs.
- Forneceu métodos para contornar bloqueios de segurança do navegador (Trusted Types) durante a extração.
- Desenvolveu o objeto de Bypass (`CrackyAccess`), mapeando as funções necessárias (`boot`, `isUnlocked`, `keyValid`, etc.) para que o segundo bloco de inicialização do código não falhasse e abrisse o menu sem as verificações de segurança.

## Processo de Execução

1. **Extração:** O script original foi executado em um ambiente Node.js projetado para interceptar o processo de descriptografia, capturando o código-fonte limpo em texto puro (arquivo `.js`).
2. **Refatoração:** No arquivo extraído, o bloco de autenticação (`cracky-access`) foi deletado e substituído por um objeto falso.
3. **Ajuste de Dependências:** A primeira execução do arquivo desofuscado no navegador falhou no carregamento da interface. O log de erro do console apontou uma dependência ausente no objeto falso (a função `isUnlocked`).
4. **Correção:** O objeto de bypass foi atualizado com as funções de validação necessárias, forçando o retorno correto para todas as checagens de acesso.
5. **Finalização:** O código foi instalado no Tampermonkey e executado no jogo, ignorando o gate e carregando o menu do cheat.

## Resultado Final

O arquivo final roda sem realizar requisições ao YouTube ou ao BSTLR, não exibe a tela de bloqueio de Key Auth e ignora a verificação de integridade original do autor. O menu do cheat é inicializado diretamente ao abrir a página do jogo.