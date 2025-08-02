# Backlog do Produto

| Prioridade | User Story                                                                                                                                | Tipo de Requisito             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 🚨 **Alta** | Como aluno, quero ver a rota mais rápida para minha próxima aula, para otimizar meu tempo no campus.                                    | Funcional                      |
| ⚠️ **Média** | Como gestor, quero garantir que as informações sobre transporte público sejam precisas e em tempo real, para melhor auxiliar os alunos. | Funcional                     |
| 🚨 **Alta** | Como aluno, quero ver as paradas de ônibus dentro e ao redor do campus, para planejar melhor meu trajeto até a UnB.                      | Funcional                     |
| 🚨 **Alta** | Como coordenador de curso, quero que os alunos integrem suas grades de horários ao aplicativo, para facilitar a navegação.               | Funcional                     |
| 🚨 **Alta** | Como professor, quero ver a localização das salas de aula e auditórios, para planejar a logística das minhas aulas.                      | Funcional                     | 
| 🚨 **Alta** | Como desenvolvedor, quero permitir que os alunos visualizem pontos de interesse dentro do campus (salas, auditórios, etc.), para facilitar a navegação. | Funcional      |
| 🚨 **Alta** | Como gestor, quero que o aplicativo tenha uma interface intuitiva e acessível, para que todos os usuários possam usá-lo facilmente.      | Funcional                     |
| 🚨 **Alta** | Como gestor, quero que o aplicativo ofereça rotas acessíveis para pessoas com deficiência, para garantir inclusão no campus.             | Funcional                     |
| ⚠️ **Média** | Como aluno, quero ser notificado sobre o horário de início da minha próxima aula, para não me atrasar.                                  | Funcional                     |
| ⚠️ **Média** | Como aluno, quero visualizar uma lista de pontos de interesse, como banheiros e bebedouros, para facilitar minha locomoção no campus.   | Funcional                     | 
| 🚨 **Alta** | Como desenvolvedor, quero integrar o sistema com o **Google Maps API** para fornecer as rotas externas precisas, melhorando a navegação no campus. | Funcional           |
| 🚨 **Alta** | Como desenvolvedor, quero implementar um sistema de autenticação de usuários com **Firebase**, para garantir segurança no uso do aplicativo. | Não funcional (segurança) |
| 🚨 **Alta** | Como desenvolvedor, quero criar a API para integração com dados de transporte público em tempo real, para oferecer informações úteis aos usuários. | Funcional           |
| 🚨 **Alta** | Como desenvolvedor, quero garantir que o aplicativo seja multiplataforma, para rodar tanto em **Android** quanto em **iOS**.             | Funcional                     |
| ⚠️ **Média** | Como desenvolvedor, quero implementar a documentação completa para facilitar o uso do sistema por novos colaboradores.                  | Não funcional (documentação)  |
| ⚠️ **Média** | Como desenvolvedor, quero criar testes automatizados para o aplicativo, para garantir que o sistema funcione corretamente.              | Não funcional (qualidade)     | 
| 🚨 **Baixa** | Como gestor público, quero ver dados e relatórios sobre o uso do campus para tomar decisões sobre acessibilidade e sustentabilidade.    | Funcional                     | 

---

## **Tecnologias Principais**:
- **React Native**: Framework multiplataforma para o desenvolvimento de aplicativos nativos para **Android** e **iOS**.
- **JavaScript/TypeScript**: Linguagens de programação utilizadas no React Native, com foco em alta performance e manutenção.
- **Firebase**: Sistema de autenticação, banco de dados em tempo real e notificações push.
- **Google Maps API**: Para fornecimento de rotas externas e localização precisa dentro do campus.
- **Moovit API / DFTrans API**: Para integração com dados de transporte público em tempo real.
- **Redux**: Para gerenciamento de estado global no aplicativo.
- **MapTiler**: Para o mapeamento interno do campus e criação de mapas personalizados.
- **Jest**: Para testes unitários e de integração do aplicativo.


# 🗺️ Story Map - Projeto UnB Navega

<table style="width: 100%; border: 1px solid black; border-collapse: collapse;">
  <thead>
    <tr style="height: 43px; border: 1px solid black;">
      <th style="width: 15%; text-align: center; font-weight: bold; height: 43px; border: 1px solid black;">Epics</th>
      <th style="width: 15%; text-align: center; font-weight: bold; height: 43px; border: 1px solid black;">Features</th>
      <th style="width: 35%; text-align: center; font-weight: bold; height: 43px; border: 1px solid black;">User Stories</th>
      <th style="width: 35%; text-align: center; font-weight: bold; height: 43px; border: 1px solid black;">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3" style="text-align: center; writing-mode: vertical-lr; border: 1px solid black;">Navegação no Campus</td>
      <td rowspan="2" style="text-align: center; border: 1px solid black;">Feature 1.1: Rota para próxima aula</td>
      <td style="border: 1px solid black;">Como aluno, quero ver a rota mais rápida para minha próxima aula, para otimizar meu tempo no campus.</td>
      <td style="border: 1px solid black;">Fornece a rota mais rápida para o aluno, otimizando o tempo entre as aulas.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como aluno, quero ver as paradas de ônibus dentro e ao redor do campus, para planejar melhor meu trajeto até a UnB.</td>
      <td style="border: 1px solid black;">Permite que o aluno visualize as paradas de ônibus ao redor do campus, ajudando no planejamento do trajeto.</td>
    </tr>
    <tr>
      <td style="text-align: center; border: 1px solid black;">Feature 1.2: Localização das salas</td>
      <td style="border: 1px solid black;">Como professor, quero ver a localização das salas de aula e auditórios, para planejar a logística das minhas aulas.</td>
      <td style="border: 1px solid black;">Facilita a localização das salas de aula e auditórios para planejamento logístico de professores.</td>
    </tr>
    <tr>
      <td rowspan="4" style="text-align: center; writing-mode: vertical-lr; border: 1px solid black;">Interface e Acessibilidade</td>
      <td rowspan="2" style="text-align: center; border: 1px solid black;">Feature 2.1: Interface acessível</td>
      <td style="border: 1px solid black;">Como gestor, quero que o aplicativo tenha uma interface intuitiva e acessível, para que todos os usuários possam usá-lo facilmente.</td>
      <td style="border: 1px solid black;">Desenvolve uma interface de fácil navegação para todos os usuários.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como gestor, quero que o aplicativo ofereça rotas acessíveis para pessoas com deficiência, para garantir inclusão no campus.</td>
      <td style="border: 1px solid black;">Implementa rotas acessíveis, assegurando a inclusão de pessoas com deficiência no campus.</td>
    </tr>
    <tr>
      <td rowspan="2" style="text-align: center; border: 1px solid black;">Feature 2.2: Notificações e alertas</td>
      <td style="border: 1px solid black;">Como aluno, quero ser notificado sobre o horário de início da minha próxima aula, para não me atrasar.</td>
      <td style="border: 1px solid black;">Envia notificações para que o aluno não perca a próxima aula.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como aluno, quero visualizar uma lista de pontos de interesse, como banheiros e bebedouros, para facilitar minha locomoção no campus.</td>
      <td style="border: 1px solid black;">Exibe pontos de interesse como banheiros e bebedouros para facilitar a mobilidade do aluno.</td>
    </tr>
    <tr>
      <td rowspan="3" style="text-align: center; writing-mode: vertical-lr; border: 1px solid black;">Integração com APIs</td>
      <td rowspan="2" style="text-align: center; border: 1px solid black;">Feature 3.1: Integração com API Google Maps</td>
      <td style="border: 1px solid black;">Como desenvolvedor, quero integrar o sistema com o Google Maps API para fornecer as rotas externas precisas, melhorando a navegação no campus.</td>
      <td style="border: 1px solid black;">Integra o Google Maps para exibir as rotas externas ao campus com precisão.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como desenvolvedor, quero criar a API para integração com dados de transporte público em tempo real, para oferecer informações úteis aos usuários.</td>
      <td style="border: 1px solid black;">Desenvolve a integração com APIs de transporte público para fornecer dados em tempo real sobre os ônibus.</td>
    </tr>
    <tr>
      <td style="text-align: center; border: 1px solid black;">Feature 3.2: Autenticação e segurança</td>
      <td style="border: 1px solid black;">Como desenvolvedor, quero implementar um sistema de autenticação de usuários com Firebase, para garantir segurança no uso do aplicativo.</td>
      <td style="border: 1px solid black;">Implementa um sistema seguro de login utilizando o Firebase.</td>
    </tr>
    <tr>
      <td rowspan="3" style="text-align: center; writing-mode: vertical-lr; border: 1px solid black;">Funcionalidades Técnicas</td>
      <td rowspan="2" style="text-align: center; border: 1px solid black;">Feature 4.1: Desenvolvimento multiplataforma</td>
      <td style="border: 1px solid black;">Como desenvolvedor, quero garantir que o aplicativo seja multiplataforma, para rodar tanto em Android quanto em iOS.</td>
      <td style="border: 1px solid black;">Garante que o aplicativo funcione em ambas as plataformas, Android e iOS.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como desenvolvedor, quero criar testes automatizados para o aplicativo, para garantir que o sistema funcione corretamente.</td>
      <td style="border: 1px solid black;">Implementa testes automatizados para garantir a qualidade do código e a funcionalidade do sistema.</td>
    </tr>
    <tr>
      <td style="text-align: center; border: 1px solid black;">Feature 4.2: Documentação</td>
      <td style="border: 1px solid black;">Como desenvolvedor, quero implementar a documentação completa para facilitar o uso do sistema por novos colaboradores.</td>
      <td style="border: 1px solid black;">Cria a documentação completa do sistema para fácil onboarding de novos desenvolvedores.</td>
    </tr>
    <tr>
      <td rowspan="2" style="text-align: center; writing-mode: vertical-lr; border: 1px solid black;">Monitoramento e Relatórios</td>
      <td rowspan="2" style="text-align: center; border: 1px solid black;">Feature 5.1: Relatórios sobre uso do campus</td>
      <td style="border: 1px solid black;">Como gestor público, quero ver dados e relatórios sobre o uso do campus para tomar decisões sobre acessibilidade e sustentabilidade.</td>
      <td style="border: 1px solid black;">Fornece relatórios detalhados sobre o uso do campus, ajudando na tomada de decisões sobre acessibilidade e sustentabilidade.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como coordenador de curso, quero ver estatísticas de uso dos espaços acadêmicos (salas, auditórios, etc.), para otimizar a gestão dos recursos.</td>
      <td style="border: 1px solid black;">Exibe dados sobre o uso dos espaços acadêmicos, ajudando na gestão eficiente dos recursos.</td>
    </tr>
  </tbody>
</table>


---
# Funcionalidades Prioritárias
- Desenvolvimento de mapeamento interno.
- Integração com Google Maps para navegação externa.
- Integração com Apps de Ônibus.
- Desenvolvimento de Banco de Dados para grade horária.
