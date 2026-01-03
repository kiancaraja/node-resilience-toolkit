const mongoose = require('mongoose');
const IORedis = require('ioredis');

async function checkHealth() {
    console.log("🔍 Iniciando diagnóstico do sistema...\n");

    // 1. Verificar MongoDB
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/api-notificacao', { serverSelectionTimeoutMS: 2000 });
        console.log("✅ MONGODB: Online e pronto para o combate!");
        await mongoose.disconnect();
    } catch (err) {
        console.log("❌ MONGODB: Offline! Verifique se o serviço está rodando.");
    }

    // 2. Verificar Redis
    const redis = new IORedis({ host: '127.0.0.1', port: 6379, retryStrategy: () => null });
    
    redis.on('error', () => { /* Silenciar erro de log padrão */ });

    try {
        await redis.ping();
        console.log("✅ REDIS: Online e pronto para a fila!");
    } catch (err) {
        console.log("❌ REDIS: Offline! Verifique se o container no Docker está ligado.");
    } finally {
        redis.disconnect();
    }

    console.log("\n🏁 Diagnóstico concluído!");
    process.exit();
}

checkHealth();