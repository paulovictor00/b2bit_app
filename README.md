# 📖 README — Sistema de Login, Perfil e Cronograma (b2bit)

## 📝 Descrição do Projeto

Esta aplicação foi desenvolvida em **ReactJS com Typescript** para demonstrar um fluxo simples de autenticação JWT, persistência de sessão e navegação protegida. O projeto simula o processo de login de um usuário, exibe seus dados de perfil e oferece uma página de cronograma com eventos definidos.

O objetivo principal é **ensinar iniciantes** a construir um sistema web completo com autenticação, roteamento e integração com API, utilizando boas práticas modernas de front-end.

---

## 🎯 Funcionalidades

1. **Tela de Login**

   * Interface estilizada com a logo **b2bit**.
   * Campos de **e-mail** e **senha** com validação via Formik + Yup.
   * Requisição **POST** para `/auth/login/`.
   * Em caso de sucesso: token JWT salvo no **LocalStorage**.
   * Em caso de erro: exibe **modal de aviso** com as cores da marca.

2. **Persistência de Sessão**

   * Usuário continua logado mesmo após atualizar a página.
   * Token armazenado no **LocalStorage** e injetado automaticamente pelo **Axios Interceptor** em todas as requisições.

3. **Página de Perfil**

   * Requisição **GET** para `/auth/profile/`.
   * Exibição do **nome**, **e-mail** e **foto de perfil** do usuário.
   * Botão **Logout** que limpa o token e redireciona para o login.

4. **Página de Cronograma**

   * Exibição de eventos usando **FullCalendar**.
   * Eventos pré-configurados (ex.: abertura de vaga, envio do projeto, entrevistas etc.).
   * Tooltip ao passar o mouse exibindo os detalhes de cada etapa.

5. **Internacionalização (i18n)**

   * Textos da interface disponíveis em **Português** e **Inglês**.
   * Seletor de idioma na barra de navegação.

6. **Proteção de Rotas**

   * Usuário só acessa **/profile** e **/schedule** se estiver autenticado.
   * Caso contrário, é redirecionado para a página de login.

---

## 🧩 Tecnologias Utilizadas

* **ReactJS + Typescript**
* **Vite** (build tool)
* **Shadcn UI** (componentes estilizados)
* **TailwindCSS** (utilitários de estilo)
* **Formik + Yup** (validação de formulários)
* **Axios com Interceptors** (requisições HTTP seguras)
* **React Router DOM (v6)** (roteamento)
* **FullCalendar** (cronograma)
* **i18next** (traduções PT/EN)
* **Jest + React Testing Library** (testes automatizados)

---

## ✅ Critérios Atendidos

* Autenticação JWT funcional com persistência de sessão.
* Feedback visual de erro em modal estilizado.
* Rotas privadas protegidas.
* Página de perfil com dados reais da API.
* Cronograma de eventos exibido em calendário interativo.
* Suporte a múltiplos idiomas (português/inglês).
* Testes básicos de login, proteção de rota e calendário.

---

## 🚀 Como Executar

```bash
# Instalar dependências
npm install --include=dev

# Rodar em desenvolvimento
npm run dev

# Rodar testes
npm test
```

Acesse em https://b2bit-app-tau.vercel.app.

---

## 🔒 Observações de Segurança

* O token é salvo no **LocalStorage** apenas para fins didáticos.
* Interceptors removem o token automaticamente em caso de `401/403`.
* Dados sensíveis não são expostos no console.

---

## 📌 Conclusão

Este projeto atende todos os critérios propostos: **login JWT, persistência de sessão, rotas protegidas, perfil e testes básicos**. Ele serve como base de aprendizado para quem deseja dominar ReactJS moderno com Typescript, integração de API e boas práticas de autenticação.
