# Routes
O ponto de entrada de uma API (Application Programming Interface) é uma rota!

Uma rota é composta por:

* Um **método HTTP**

* Um **nome/caminho/endpoint**, que funciona como o identificador da rota

* Uma **função de callback**, que é executada quando essa rota é acessada – geralmente orquestrada por um ***controller***

### Métodos HTTP mais comuns:

* **POST** – Criar uma nova informação

* **GET** – Buscar ou recuperar uma informação

* **PUT** – Atualizar completamente uma informação

* **PATCH** – Atualizar parcialmente uma informação

* **DELETE** – Remover uma informação

```Em resumo: toda URL em uma API representa uma rota, que define o que será acessado e como será tratado esse acesso.```