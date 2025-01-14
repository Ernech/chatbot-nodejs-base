
import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'
import { MemoryDB as Database } from '@builderbot/bot'
import templates from './templates'
import { provider } from './provider'
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = parseInt(process.env.PORT, 10) || 3000;

const main = async () => {
    
    const { handleCtx, httpServer } = await createBot({
        flow: templates,
        provider: provider,
        database: new Database(),
    })

   
    httpServer(+PORT)
}

main()
