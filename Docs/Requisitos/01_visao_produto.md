# 📊 UnB Navega - Serviço de Navegação Interna da UnB

## Visão do Produto

O **UnB Navega** é um aplicativo móvel inovador desenvolvido para facilitar a mobilidade dos estudantes dentro do campus da **Universidade de Brasília (UnB)**. Seu objetivo principal é fornecer uma solução eficiente para a navegação interna e externa do campus, além de integrar funcionalidades úteis que aprimoram o dia a dia acadêmico dos estudantes. O aplicativo oferece rotas detalhadas dentro da universidade, integração com a grade de horários de aula e informações de transporte público em tempo real.

Com a proposta de tornar a navegação mais fácil e precisa, o **UnB Navega** vai além do Google Maps, permitindo que os alunos encontrem locais como salas de aula, auditórios, blocos, e outros pontos de interesse, além de sugerir o melhor trajeto para cada situação.

### Funcionalidades Principais:
- **Navegação Interna e Externa**: Oferece rotas passo a passo, incluindo detalhes sobre passarelas, elevadores e túneis, além de fornecer navegação externa precisa com o Google Maps.
- **Integração com Horários Acadêmicos**: Permite que os estudantes sincronizem suas grades de aulas com o app e recebam sugestões de rotas até sua próxima aula.
- **Informações de Transporte Público**: Exibe paradas de ônibus dentro e ao redor da universidade, com dados de chegada em tempo real.
- **Acessibilidade e Sustentabilidade**: Foco em tornar o campus mais acessível a todos os usuários e promover a utilização eficiente dos recursos e espaços.

---

## Missão

A missão do **UnB Navega** é proporcionar aos estudantes da Universidade de Brasília uma solução inteligente e eficiente para a navegação e mobilidade dentro do campus. Através de uma interface intuitiva e funcionalidades inovadoras, buscamos otimizar o tempo dos alunos, melhorar sua experiência no ambiente acadêmico e contribuir para uma universidade mais acessível, sustentável e conectada.

---

## Problemática

A **Universidade de Brasília** (UnB), como muitos outros grandes campi universitários, enfrenta desafios relacionados à **mobilidade interna** e **acesso às informações**. Muitos estudantes se perdem dentro do campus, especialmente em áreas internas complexas como o ICC, auditórios e laboratórios. Além disso, a falta de integração entre horários de aulas e a localização das salas causa transtornos para quem precisa se deslocar rapidamente de um local a outro.

Outro ponto crítico é o **transporte público**. A falta de informações em tempo real sobre horários e localização de ônibus, principalmente para os alunos que dependem desse meio de transporte, gera ineficiência e frustração, tornando o deslocamento mais longo e incômodo.

---

## Proposta de Solução

O **UnB Navega** resolve esses problemas ao integrar diversas funcionalidades em uma única plataforma:

- **Navegação precisa e inteligente**: Oferecendo rotas passo a passo para ambientes internos e externos do campus, incluindo pontos como salas de aula, laboratórios, auditórios, escadas, elevadores, passarelas e túneis.
- **Integração com horários de aulas**: Sincronizando a grade de horários dos alunos para mostrar rotas até a próxima aula e enviando alertas de horários e sugestões de deslocamento.
- **Transporte público em tempo real**: Exibindo informações sobre as paradas de ônibus dentro e ao redor da universidade, com horários e tempo estimado de chegada dos ônibus.
- **Acessibilidade**: A interface será pensada para ser inclusiva, garantindo que estudantes com deficiências visuais ou motoras possam usar o aplicativo sem dificuldades.

---

## Diferenciais

- **Mapa interno detalhado**: Diferente do Google Maps, que não oferece mapas internos detalhados de universidades, o **UnB Navega** possui mapeamento detalhado de áreas como o ICC, auditórios, salas e outros espaços, ajudando o aluno a se orientar com precisão.
- **Integração com a grade de horários**: O app oferece a capacidade de integrar a grade de horários do aluno, otimizando o tempo e sugerindo o melhor horário para sair de um ponto a outro no campus.
- **Informações de transporte público em tempo real**: Ao integrar com as APIs de transporte público, o app fornece dados atualizados sobre as paradas de ônibus e o tempo de chegada dos veículos.
- **Foco na acessibilidade**: Com funcionalidades como alto contraste, leitura de textos e navegação simplificada, o app se destaca por ser acessível para todos os usuários.

---

## Impacto Esperado

- **Redução do tempo de deslocamento**: Os estudantes poderão se deslocar mais rapidamente dentro da universidade, utilizando rotas mais curtas e eficientes, economizando tempo entre as aulas e atividades.
- **Melhoria na qualidade de vida**: A integração de funcionalidades como transporte público em tempo real e a eliminação de frustrações com a navegação interna ajudará a reduzir o estresse diário dos alunos.
- **Sustentabilidade**: Ao promover o uso de transporte público e otimizar o uso dos recursos no campus, o **UnB Navega** contribui para um campus mais sustentável e eficiente.
- **Inclusão e acessibilidade**: Com foco em tornar o campus acessível a todos, o app cria um ambiente acadêmico mais inclusivo, ajudando estudantes com deficiências a se movimentarem com mais facilidade.
- **Facilidade de uso**: O design intuitivo e simples ajudará os estudantes a adotar rapidamente a ferramenta no seu dia a dia acadêmico, tornando-se um recurso essencial para a sua rotina.

---

## Tecnologias Sugeridas

A seguir, as tecnologias recomendadas para o desenvolvimento do **UnB Navega**, levando em consideração a necessidade de compatibilidade multiplataforma, dados em tempo real e integração com APIs externas.

### **Front-End (Aplicativo Móvel)**:
- **React Native**: Framework multiplataforma que permite o desenvolvimento de aplicativos nativos para **Android** e **iOS** com um único código base, aproveitando a biblioteca React.
- **JavaScript/TypeScript**: Linguagens utilizadas no React Native, proporcionando flexibilidade e alta performance para o desenvolvimento do aplicativo.
- **Redux**: Para gerenciamento de estado global e integração eficiente com a navegação e os dados do aplicativo.

### **Back-End**:
- **Node.js** com **Express.js**: Para o desenvolvimento da API RESTful, que gerenciará as integrações com bancos de dados, horários de aulas e transporte público.
- **Firebase**: Para autenticação de usuários, banco de dados em tempo real (Firestore) e envio de notificações push.
- **MongoDB**: Banco de dados NoSQL, ideal para armazenar dados não estruturados como localização de pontos de interesse e informações de transporte público.

### **Mapeamento e Navegação**:
- **Google Maps API**: Para a navegação externa do campus, incluindo rotas e localização.
- **MapTiler**: Para o mapeamento interno do campus, com a criação de mapas personalizados da universidade.

### **Integração com Transporte Público**:
- **Moovit API** ou **DFTrans API**: Para integrar informações de transporte público em tempo real, fornecendo horários e estimativas de chegada dos ônibus.

### **Notificações e Alertas**:
- **Firebase Cloud Messaging (FCM)**: Para enviar notificações push sobre horários de aulas, alertas de transporte público e lembretes de rotas.

### **Acessibilidade**:
- **React Native Accessibility**: Para garantir que o app seja acessível a usuários com necessidades especiais, com suporte a leitura de tela, alto contraste e navegação simplificada.

### **Segurança**:
- **OAuth 2.0**: Para garantir uma autenticação segura e moderna, permitindo acesso controlado ao sistema.
- **JWT (JSON Web Tokens)**: Para autenticação de usuários e comunicação segura entre o app e o servidor.

---

## Colaboradores

| Papel                    | Responsáveis                                      | Atividades Principais                                                                          |
|--------------------------|---------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Stakeholder**           | Eric Gomes                                        | Validação dos requisitos e avaliação dos resultados                                            |
| **UI/UX Designer**        | Mayra Lithuania                                   | Identidade Visual e Experiência de Usuário                                                     |
| **FrontEnd**              | Mayra Lithuania                                   | Desenvolvimento da identidade visual, telas e experiência de usuário                           |
| **BackEnd**               | Gabriel Maciel                                    | Desenvolvimento de Funcionalidades, integrações com APIs e Comunicação com Banco de Dados      |
| **Data Specialist**       | Guilherme Flyan                                   | Preparação de Arquitetura, desenvolvimento de Banco de Dados e Segurança do Sistema            |
| **QA Tester**             | Luana Medeiros                                    | Desenvolvimento e automação de testes, construção do Pipeline e priorização de funcionalidades |
| **Usuários**              | Estudantes, professores e coordenadores da UnB    | Consumo de aplicativo, devolutivas de experiências e avaliação de desempenho                   |

---

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/EricAraujoBsB">
        <img src="../assets/colabs/Eric_Gomes.jpeg" width="33%;" alt="Eric Gomes"/><br>
        <sub><b>Eric Gomes de Araujo</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Lithuania0">
        <img src="../assets/colabs/Mayra_Lithuania.jpeg" width="33%;" alt="Mayra Lithuania"/><br>
        <sub><b>Mayra Lithuania</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/GFlyan">
        <img src="../assets/colabs/Guilherme_Flyan.jpeg" width="33%;" alt="Guilherme Flyan"/><br>
        <sub><b>Guilherme Flyan</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/gabegmbr">
        <img src="../assets/colabs/Gabriel_Maciel.jpeg" width="50%;" alt="Gabriel Maciel"/><br>
        <sub><b>Gabriel Maciel</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/luaMedeiros">
        <img src="../assets/colabs/Lua_Medeiros.png" width="50%;" alt="Lua Medeiros"/><br>
        <sub><b>Lua Medeiros</b></sub>
      </a>
    </td>
  </tr>
</table>
