import { addKeyword, EVENTS } from "@builderbot/bot";
import { registroFamiliarFlow } from "./registroFamiliarFlow";
import { registroIndividualFlow } from "./registroIndividualFlow";


const menuFlow = addKeyword(EVENTS.ACTION)
.addAction(async (ctx, {provider,fallBack})=>{

    const list = {
        "header": {
            "type":"text",
            "text":"Menu de opciones"
        },
        "body":{
            "text":"Estas son las opciones disponibles"
        },
        "footer":{
            "text":"iSoft Seguros Masivos"
        },
        "action":{
            "button":"Opciones",
            "sections":[
                {
                    "title":"Acciones",
                    "rows":[
                        {
                            "id":"1",
                            "title":"VIVE",
                            "description":"Subscripcion al plan VIVE"
                        },
                        {
                            "id":"2",
                            "title":"VIVE+",
                            "description":"Subscripcion al plan VIVE+"
                        },
                        {
                            "id":"3",
                            "title":"VIVE PLUS",
                            "description":"Subscripcion al plan VIVE PLUS"
                        }
                    ]
                }
            ]
        }
    }
    await provider.sendList(`${ctx.from}@s.whatsapp.net`,list)
  //  if (!["1", "2", "3"].includes(ctx.body)) return fallBack("Respuesta no válida, por favor selecciona una de las opciones.")
  //  ctx.this.state.update({"plan":ctx.body})
})
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


export { menuFlow }