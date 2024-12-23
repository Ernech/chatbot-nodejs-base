import { addKeyword, EVENTS } from "@builderbot/bot"
import { faqFlow } from "./faqFlow"
import { registerFlow } from "./registerFlow";
import { menuFlow } from "./menuFlow";


const mainFlow = addKeyword(EVENTS.WELCOME)
    .addAction(async(ctx, ctxfn)=>{
        //TODO: Validar en que etapa del registro se encuentra el usuario, y llevarlo on un gotoFlow
        return ctxfn.gotoFlow(menuFlow);
    })
    
export { mainFlow }
