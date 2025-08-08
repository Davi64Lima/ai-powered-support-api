# 🤖 AI-Powered Support API

API de suporte inteligente, construída com **Node.js + TypeScript + NestJS**, que integra com **LLMs** (OpenAI / OpenRouter) para responder dúvidas de usuários em tempo real usando **Server-Sent Events (SSE)**.  
Inclui cache de contexto no Redis, histórico no Postgres e suporte a funções internas como criação de tickets.

---

## 🚀 Funcionalidades

- Chat em tempo real com respostas **streaming** via SSE
- Integração com **LLM APIs** (OpenAI / OpenRouter)
- Cache de contexto no **Upstash Redis**
- Histórico persistente no **Neon PostgreSQL**
- Arquitetura limpa e modular
- Deploy serverless **gratuito** (Vercel ou Railway)
- Autenticação JWT e API Key (roadmap)
- Suporte a funções internas como **criação de tickets** (roadmap)

---

## 🛠 Tecnologias

- **Node.js** + **TypeScript**
- **NestJS** (API)
- **Zod** (validação de dados)
- **PostgreSQL** (Neon)
- **Redis** (Upstash)
- **OpenAI / OpenRouter** (LLM)
- **SSE** (Server-Sent Events)
- **Vercel** ou **Railway** (deploy)

---

## 🏗 Diagrama de Arquitetura

```text
          [Cliente Web/CLI]
                 |
                 v
        ┌───────────────────┐
        │ API Gateway (Vercel│
        │ ou Railway)        │
        └─────────┬─────────┘
                  │ REST/SSE
                  v
        ┌───────────────────┐
        │ Backend Node/NestJS│
        │ - Controllers      │
        │ - Services         │
        │ - Use Cases        │
        │ - DTOs/Zod         │
        └─────────┬─────────┘
     Cache/Queue   │   DB
   ┌────────────┐  │ ┌──────────────┐
   │Upstash Redis│  │ │Neon Postgres │
   │(Histórico   │  │ │(Tickets, Logs)│
   │Contexto)    │  │ │              │
   └─────┬───────┘  │ └──────┬───────┘
         │           │        │
         └─────┬─────┘        │
               v               │
      ┌───────────────────┐   │
      │ LLM API (OpenAI/   │<──┘
      │ OpenRouter)        │
      └───────────────────┘
```

---

## ⚡ Como Rodar Localmente

### 1️⃣ Pré-requisitos

- Node.js 20+
- Conta gratuita no [Neon](https://neon.tech/) (Postgres)
- Conta gratuita no [Upstash](https://upstash.com/) (Redis)
- Chave de API do [OpenAI](https://platform.openai.com/) ou [OpenRouter](https://openrouter.ai/)

### 2️⃣ Clonar repositório

```bash
git clone https://github.com/seu-usuario/ai-powered-support-api.git
cd ai-powered-support-api
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL=postgresql://user:pass@host/db
REDIS_URL=rediss://default:password@host:port
LLM_API_KEY=sua_chave_openai_ou_openrouter
LLM_PROVIDER=openai # ou openrouter
PORT=3000
```

### 5️⃣ Rodar migrações do banco

```bash
npm run migration:run
```

### 6️⃣ Iniciar servidor

```bash
npm run start:dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 🌐 Endpoints Principais

### **Enviar mensagem via SSE**

```http
GET /chat/stream?message=Qual%20o%20status%20do%20meu%20pedido?
Accept: text/event-stream
```

Resposta será enviada token por token via **Server-Sent Events**.

---

## ☁ Deploy Gratuito

### **Vercel**

1. Conecte seu repositório GitHub no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente no painel
3. Deploy automático em cada push

### **Railway**

1. Conecte o repositório no [Railway](https://railway.app)
2. Configure as variáveis de ambiente
3. Deploy com build automático

---

## 📌 Roadmap

- [ ] Autenticação JWT
- [ ] API Key para integrações
- [ ] Armazenar histórico no Postgres
- [ ] Funções internas acionadas pela LLM (ex.: criar ticket)
- [ ] Dashboard de métricas
- [ ] Suporte a múltiplos modelos de LLM
- [ ] Cache inteligente de respostas

---

## 📝 Licença

Este projeto está sob a licença MIT.
