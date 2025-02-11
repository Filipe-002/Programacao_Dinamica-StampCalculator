# Stamp Calculator - Programação Dinâmica

## Informações do Aluno
| Matrícula  | Nome                             |
|------------|----------------------------------|
| 170140717 | Eduarda Rodrigues Tavares       |
| 211030747 | Filipe Carvalho da Silva        |

---

## Sobre o Projeto
Este projeto foi desenvolvido como uma ferramenta interativa para resolver o problema de encontrar o número mínimo de selos necessários para pagar um valor específico, dado um conjunto de selos disponíveis. A aplicação utiliza o algoritmo da mochila discreta (Coin Change Problem) com programação dinâmica para encontrar a solução ótima de forma eficiente.

### Funcionalidades
1. **Input para Valores dos Selos**: O usuário pode inserir um array de números representando os valores dos selos disponíveis, como `[1, 5, 16, 26, 34]`.
2. **Input para Valor a Ser Pago**: O usuário insere o valor total que deseja pagar (exemplo: 55).
3. **Botão para Calcular**: Um botão que dispara o cálculo para encontrar a solução ótima.
4. **Exibição dos Selos Usados**: O número mínimo de selos é mostrado junto com os selos exatos usados para atingir o valor total.

---

## Como Executar o Projeto

### Pré-requisitos
Para executar o projeto, você precisará de:
- Node.js (versão 14 ou superior)
- NPM (geralmente incluído com o Node.js)
- React (instalado automaticamente com o projeto)

### Passo a Passo para Execução

1. **Clonar o Repositório**:
   - Abra o terminal e clone o repositório com o comando:
      ```bash
      git clone https://github.com/Filipe-002/Programacao_Dinamica-StampCalculator.git
      ```
   - Navegue até a pasta do projeto com:
     ```bash
     cd stamp-calculator
     ```

2. **Instalar Dependências**:
   - No diretório do projeto, instale as dependências com:
     ```bash
     npm install
     ```

3. **Iniciar o Projeto**:
   - Execute o comando para iniciar o servidor de desenvolvimento:
     ```bash
     npm start
     ```
   - O projeto estará disponível em `http://localhost:3000`.

### Como Usar a Aplicação

1. **Inserir Valores dos Selos**
   - No campo de entrada, insira os valores dos selos disponíveis (exemplo: `[1, 5, 16, 26, 34]`).

2. **Inserir Valor a Ser Pago**
   - No campo de entrada, insira o valor total que deseja pagar (exemplo: `55`).

3. **Calcular**
   - Clique no botão "Calcular" para encontrar o número mínimo de selos necessários e as soluções intermediárias.

4. **Visualizar Resultado**
   - A tabela mostrará as soluções intermediárias, como uma matriz dinâmica, e o número mínimo de selos necessários.

5. **Verificar Selos Usados**
   - A aplicação exibirá os selos exatos usados para atingir o valor total.

---

## Tecnologias Utilizadas
- **React**: Para a interface interativa e implementação da lógica de cálculo.
- **JavaScript**: Para a lógica de programação dinâmica do algoritmo.
- **HTML/CSS**: Para estilização e estrutura da interface.

## Considerações
Este projeto oferece uma solução prática para o problema do "Coin Change", demonstrando como problemas de otimização podem ser resolvidos usando programação dinâmica. A aplicação também serve como uma ferramenta educativa, permitindo que os usuários compreendam o processo de cálculo de uma maneira visual.

## Demonstração em Vídeo
Para mais detalhes, confira a [demonstração em vídeo do projeto](https://youtu.be/ONQnzjMTrw0).
