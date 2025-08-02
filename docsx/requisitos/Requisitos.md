# **Requisitos do Sistema UnB Navega**

## **Requisitos Funcionais**:
1. **Navegação Interna**: O sistema deve fornecer rotas detalhadas dentro do campus da UnB, incluindo salas de aula, auditórios, blocos e outros pontos de interesse.
2. **Integração com a Grade de Horários**: O sistema deve permitir que os alunos integrem suas grades de horários ao aplicativo e forneçam a melhor rota até a próxima aula, considerando o tempo de deslocamento.
3. **Exibição de Paradas de Ônibus**: O sistema deve exibir paradas de ônibus dentro e ao redor do campus, com informações de horários e estimativas de chegada dos ônibus.
4. **Acessibilidade**: O sistema deve ser acessível a usuários com deficiência, oferecendo modos de alto contraste e navegação simplificada.
5. **Sistema de Notificações**: O sistema deve enviar notificações para alertar os usuários sobre o início das aulas ou quando for o melhor momento para sair para a próxima aula.
6. **Integração com Google Maps API**: O sistema deve consumir a **Google Maps API** para fornecer rotas externas precisas ao campus e integrar a navegação com transporte público.
7. **Autenticação de Usuários**: O sistema deve garantir a segurança do acesso utilizando **Firebase** para autenticação de usuários.
8. **Funcionalidade de Pesquisa de Prédios**: O sistema deve permitir que os usuários pesquisem e visualizem pontos de interesse como prédios e salas, facilitando a navegação interna no campus.
9. **Integração com API de Transporte Público**: O sistema deve integrar dados de transporte público em tempo real utilizando APIs como **Moovit** ou **DFTrans**.

## **Requisitos Não Funcionais**:
1. **Desempenho**: O sistema deve ser otimizado para garantir que o tempo de resposta ao exibir mapas e informações em tempo real seja mínimo, não prejudicando a experiência do usuário.
2. **Escalabilidade**: O sistema deve ser capaz de lidar com um grande número de usuários simultâneos sem perda de desempenho, especialmente durante horários de pico no campus.
3. **Segurança**: O sistema deve garantir que as informações dos usuários e os dados do campus sejam protegidos de forma adequada, utilizando autenticação segura e criptografia.
4. **Usabilidade**: O sistema deve ser intuitivo e fácil de usar, com uma interface amigável tanto para alunos quanto para gestores e professores.
5. **Multiplataforma**: O sistema deve ser funcional em **Android** e **iOS**, garantindo que todos os usuários possam acessá-lo independentemente do dispositivo.

## **Tecnologias**:
- **Backend**: **Node.js**, **Express.js**
- **Frontend**: **React Native**
- **Banco de Dados**: **Firebase** (Firestore para dados em tempo real)
- **API de Transporte Público**: **Moovit API**, **DFTrans API**
- **Mapeamento Interno**: **MapTiler**
- **API de Navegação**: **Google Maps API**
- **Autenticação de Usuários**: **Firebase Authentication**
- **Notificações Push**: **Firebase Cloud Messaging**
- **Testes**: **Jest**, 
- **Deploy**: **Google Play**, **App Store**

---

## **Licenciamento**

O projeto será disponibilizado sob a licença **MIT**, permitindo que outras instituições públicas possam replicá-lo, adaptar e distribuir o código conforme necessário.

---
