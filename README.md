# 🚀 Projeto de Automação de Testes com Playwright

Este repositório contém um projeto de **automação de testes web** utilizando o **Playwright**, uma das ferramentas mais modernas e completas para testes end-to-end (E2E).

O foco deste projeto é garantir **qualidade, confiabilidade e rapidez** na validação de aplicações web, com uma base escalável para crescimento contínuo dos testes.

---

## 🧪 Por que usar Playwright?

O Playwright se destaca no mercado de automação por oferecer diversas vantagens importantes:

* ✅ **Suporte a múltiplos navegadores**: Chromium, Firefox e WebKit
* ⚡ **Execução rápida e estável** dos testes
* 🧠 **Auto-wait inteligente** (reduz flakiness)
* 📱 **Testes responsivos** (desktop e mobile)
* 🧩 **API moderna e intuitiva**
* 🛠️ **Codegen** para criação automática de testes
* 🎥 **Gravação de vídeos, screenshots e traces** para análise de falhas
* 🔁 **Execução paralela** nativa
* 🔍 **Interface visual (UI Mode)** para depuração

Essas características tornam o Playwright ideal para projetos profissionais e pipelines de CI/CD.

---

## 📂 Estrutura do Projeto (Visão Geral)

O projeto segue boas práticas de organização, facilitando manutenção e expansão futura dos testes:

* Separação clara entre testes e configurações
* Possibilidade de reutilização de fluxos comuns
* Escalável para inclusão de novos cenários e módulos

---

## ▶️ Como rodar o projeto

### 🔹 Executar todos os testes

```bash
npx playwright test
```

---

### 🔹 Executar testes com interface gráfica (UI Mode)

Ideal para depuração e acompanhamento visual da execução:

```bash
npx playwright test --ui
```

---

### 🔹 Gerar testes automaticamente (Codegen)

O Playwright permite mapear ações do usuário e gerar código automaticamente:

```bash
npx playwright codegen https://www.saucedemo.com/
```

Esse recurso é excelente para:

* Aprender a ferramenta
* Criar testes iniciais rapidamente
* Mapear seletores com precisão

---

## 📈 Evolução do Projeto

Este projeto está em constante evolução, com a adição progressiva de novos cenários de teste, melhorias de estrutura e aplicação de boas práticas de automação.

A base foi pensada para crescer sem perda de organização ou legibilidade.

---

## 🧠 Objetivo

Garantir a **qualidade do software** por meio de testes automatizados confiáveis, rápidos e fáceis de manter, contribuindo para entregas mais seguras e eficientes.

---

## 🛠️ Tecnologias Utilizadas

* **Playwright**
* **Node.js**
* **JavaScript / TypeScript**

---

📌 *Sinta-se à vontade para clonar, estudar e evoluir este projeto.*
