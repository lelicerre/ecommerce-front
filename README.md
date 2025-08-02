# 💸 Transferências Financeiras - Frontend

Interface web desenvolvida em **Angular 19** para agendamento e controle de transferências financeiras. Permite cadastro, visualização e exclusão de transferências com validações inteligentes.

## 🧰 Tecnologias

- Angular 19
- TypeScript
- Bootstrap 5
- SCSS
- RxJS
- Angular Reactive Forms

## ⚙️ Instalação

\`\`\`bash
git clone https://github.com/seu-usuario/frontend-transferencias.git
cd frontend-transferencias
npm install
npm run start
\`\`\`

Acesse em: [http://localhost:4200](http://localhost:4200)

## 🧪 Funcionalidades

- ✅ Cadastro de Transferências
- ✅ Validações Inteligentes (contas e valores)
- ✅ Máscaras e Formatação
- ✅ Preenchimento Automático para testes
- ✅ Extrato de transferências
- ✅ Botão de Deletar
- ✅ Comunicação HTTP com API backend

## 🔗 Backend

A API de backend deve estar rodando localmente:

- URL base: \`http://localhost:8081/transferencias\`
- Métodos:
  - \`GET /transferencias\`
  - \`POST /transferencias\`
  - \`DELETE /transferencias\`

## 🧪 Como Testar

1. Cadastre transferências válidas e visualize no extrato.
2. Teste validações com dados incorretos (datas, contas, valores).
3. Confirme a comunicação com backend (GET/POST/DELETE).

## 🎨 Design

Interface responsiva usando Bootstrap 5 + SCSS. Formulário com feedback visual e tabela de extrato com estilização clara.

## 🐝 Licença

Desenvolvido para fins de avaliação técnica. Todos os direitos reservados.
---

/💡 **Dica**: Rode o backend antes de testar o frontend!
