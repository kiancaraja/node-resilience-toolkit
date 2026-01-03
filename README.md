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