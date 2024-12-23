import { addKeyword, EVENTS } from "@builderbot/bot";


const registroIndividualFlow = addKeyword(EVENTS.ACTION)
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
        return ctxFn.endFlow(`Excelente! Tus datos fueron registrados\n\nNombre Asegurado: ${state.name}\nCorreo Asegurado: ${state.email}`);
    }        
)



export { registroIndividualFlow };