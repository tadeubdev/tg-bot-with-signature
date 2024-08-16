# Projeto Bot de Pagamento

Este projeto é um bot de Telegram que facilita a geração de links de pagamento e a verificação de pagamentos.

## Funcionalidades

- Geração de links de pagamento personalizados.
- Envio de mensagens com links de pagamento.
- Verificação de status de pagamento.

## Dependências

- [Node.js](https://nodejs.org/)
- [Telegraf](https://telegraf.js.org/)

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    BOT_TOKEN=seu_token_do_bot
    MOCK_PAYMENT_LINK=https://mockpayment.com/pay
    ```

## Execução

1. Inicie o bot:
    ```sh
    node app.js
    ```

## Uso

### Geração de Link de Pagamento

O bot gera um link de pagamento quando recebe uma `callback_query` com o canal selecionado (`vip1` ou `vip2`). O link é enviado ao usuário no formato:

```
Clique no link para realizar o pagamento: https://mockpayment.com/pay?channel=vip1&user=123456789
```

### Verificação de Pagamento

O bot responde ao comando `/checkpayment` simulando a verificação do pagamento. Se o pagamento for bem-sucedido, uma mensagem de confirmação é enviada ao usuário.
