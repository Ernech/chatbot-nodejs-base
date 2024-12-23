import { addKeyword } from "@builderbot/bot";
import { registroIndividualFlow } from "./registroIndividualFlow";
import { registroFamiliarFlow } from "./registroFamiliarFlow";

const tipoSeguroFlow = addKeyword("1")
.addAnswer("Seleccione el tipo de seguro", {capture:true, buttons:[{body:"Individual"},{body:"Familiar"}]},
    async (ctx, ctxFn)=>{
        if(ctx.body==="Individual"){
            await ctxFn.flowDynamic("Perfecto, voy a proceder a hacerte unas preguntas");
            return ctxFn.gotoFlow(registroIndividualFlow);
            
        }
        else if(ctx.body==="Familiar"){
            await ctxFn.flowDynamic("Perfecto, voy a proceder a hacerte unas preguntas");
            return ctxFn.gotoFlow(registroFamiliarFlow)
        }
        else{
            return ctxFn.fallBack("Por favor, seleccione una de las opciones")
        }
    }
)

export { tipoSeguroFlow }