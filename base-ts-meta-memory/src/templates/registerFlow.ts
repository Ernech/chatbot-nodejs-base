import { addKeyword, EVENTS } from "@builderbot/bot";


const registerFlow = addKeyword(EVENTS.ACTION)
.addAnswer("Quieres comenzar con el registro?", {capture:true, buttons:[{body:"Si, quiero"},{body:"No, gracias"}]},
    async (ctx, ctxFn)=>{
        if(ctx.body==="No, gracias"){
            return ctxFn.endFlow("El registro fue cancelado, puedes volver a escribirme para registrarte")
        }
        else if(ctx.body==="Si, quiero"){
            await ctxFn.flowDynamic("Perfecto, voy a proceder a hacerte unas preguntas");
        }
        else{
            return ctxFn.fallBack("Por favor, seleccione una de las opciones")
        }
    }
)
.addAnswer("Primero, cual es tu nombre?",{capture:true},
    async(ctx, ctxFn)=>{
        await ctxFn.flowDynamic(`Perfecto ${ctx.body}!`);
        await ctxFn.state.update({"name":ctx.body})
    }
)
.addAnswer("Ahora, cual es tu correo electronico?",{capture:true},
    async(ctx,ctxFn)=>{
        const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(!emailFormat.test(ctx.body)){
            return ctxFn.fallBack("Por favor, ingresa un correo lectronico valido");
        }
        await ctxFn.state.update({"email":ctx.body})
        const state = ctxFn.state.getMyState();
        console.log(state.name, state.email)//TODO: Implementar el servicio para guardar en base de datos
        return ctxFn.endFlow("Excelente! Tus datos fueron registrados");
    }
)

export { registerFlow };