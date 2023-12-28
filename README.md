# API Blip Trigger

Esta API fornece um endpoint para acionar mensagens para um chatbot usando a plataforma Blip. Permite enviar mensagens com templates um determinado número de telefone.

## Pré-requisitos

- Node.js instalado
- Conta Blip com acesso API
- Arquivo de configuração (`config/keys.js`) contendo as chaves necessárias

## Configurar

1. Clone este repositório.
2. Instale dependências com `npm install`.
3. Configure o arquivo de configuração (`config/keys.js`) com as chaves necessárias:
   - `prefixo`: Prefixo da empresa no Blip.
   - `routerBotKey`: Chave para acessar o bot do roteador.

## Uso

### Endpoint

- **GET /trigger**

#### Corpo da solicitação

```json
{
  "template": "string",
  "parameters": "string",
  "phone": "string"
}
```

template: O nome do modelo aprovado na plataforma blip da mensagem a ser enviada.


parameters: Nome do destinatario.


phone: Número de telefone para o qual a mensagem será enviada.

## Detalhes do terminal

O endpoint /triggeraceita uma solicitação POST com os parâmetros necessários.

Ele envia uma mensagem para o número de telefone especificado usando a plataforma Blip.

No envio bem-sucedido, ele retorna uma 200 OKresposta com um objeto JSON contendo status: "success".

Se ocorrer um erro, ele retornará uma 400 Bad Requestresposta com um objeto JSON contendo error.

## Colaboradores
Israel Lopes

Sinta-se à vontade para contribuir bifurcando o repositório e criando solicitações pull para melhorias ou correções de bugs.