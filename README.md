## API simples em express

### Instalando

`yarn` para instalar dependências

`yarn dev` para iniciar o servidor

### Rotas

##### `baseUrl`: `/api`

- GET /clients - Lista todos os clientes
- POST /clients - Cria um novo cliente

`{ "name": "Cliente 1", }`

- GET /product - Lista todos os produtos
- POST /product - Cria um novo produto

`{ "isActive":true, "currentQuantity": 10 }`

- GET /order - Lista todos os pedidos
- POST /order - Cria um novo pedido

`{ "clientId": 1, "products": [ { "productId": 1, "quantity": 10 } ] }`

### Regras aplicadas

- Não é possível criar um pedido cujo ID do cliente não exista
- Não é possível criar um pedido com produtos que não existam
- Não é possível criar um pedido com produtos que não tenham estoque suficiente
- Não é possível criar um pedido sem informar pelo menos um produto
