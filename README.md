# 🛡️ Node.js Resilience Toolkit

Um kit de sobrevivência para desenvolvedores Node.js lidarem com erros de infraestrutura e implementarem padrões de resiliência (Fallback).

## 🚀 Por que este projeto?
Muitas vezes, perdemos horas depurando erros de portas travadas ou conexões recusadas. Este toolkit oferece:
1. Um dicionário de erros prático.
2. Um script de diagnóstico de ambiente.
3. Exemplos de padrões de "Plano B" (Redis -> MongoDB).

## 🆘 Dicionário de Erros (Onde todo mundo trava)

| Erro | O que realmente é? | Solução Ninja |
| :--- | :--- | :--- |
| `EADDRINUSE` | Porta ocupada (ex: 3000). | `npx kill-port 3000` ou finalizar `node.exe` no Task Manager. |
| `ECONNREFUSED` | Serviço (Redis/Mongo) offline. | `docker-compose up -d` ou verificar o play no Docker Desktop. |
| `ECONNRESET` | Queda abrupta de conexão. | Revisar loops de conexão e timeouts no código. |

## 🛠️ Ferramentas Inclusas
- **`doctor.js`**: Script que verifica se seu Redis e MongoDB estão prontos para o combate.

## 🛠️ Guia de Comandos Rápidos (Sua Colinha)

| Objetivo | Comando |
| :--- | :--- |
| **Ligar a Infra** | `docker-compose up -d` |
| **Validar Ambiente** | `node doctor.js` |
| **Salvar no Git** | `git add .` e `git commit -m "sua mensagem"` |
| **Subir para o GitHub** | `git push origin main` |

## 🩺 Como usar o Doctor.js

Para garantir que seu ambiente está pronto, rode:
`node doctor.js`

- ✅ Significa que o banco está pronto para uso.
- ❌ Significa que você precisa ligar o serviço (Docker/Mongo).

💾 Sua "Colinha" de Comandos (Salva na Memória)
Para você não precisar decorar, aqui estão os comandos desta fase final separados:

P.s: Sugiro que crie um repositório particular no git ou seu repositorio remoto preferido e deixe suas colinhas lá para quando precisar. 💚

git remote add origin [link]: Diz ao Git onde o projeto deve morar no site.

git push -u origin main: Faz o primeiro "upload" oficial e cria o vínculo definitivo.

node doctor.js: O seu script que já está dando ✅ Verde para Redis e Mongo.

Desenvolvedora: Eliene Maria da Silva 🌵🌱🌻💚