import { addKeyword, EVENTS } from "@builderbot/bot";
import { registroIndividualFlow } from "./registroIndividualFlow";


const menuFlow = addKeyword(EVENTS.ACTION)
  .addAction(async (ctx, { provider, flowDynamic }) => {
    // Configurar el menú
    const list = {
      header: { type: "text", text: "Bienvenido a iSoft Seguros Masivos" },
      body: { text: "Para comenzar seleccione el plan de su preferencia" },
      footer: { text: "iSoft Seguros Masivos" },
      action: {
        button: "Opciones",
        sections: [
          {
            title: "Acciones",
            rows: [
              { id: "1", title: "VIVE", description: "Subscripcion al plan VIVE" },
              { id: "2", title: "VIVE+", description: "Subscripcion al plan VIVE+" },
              { id: "3", title: "VIVE PLUS", description: "Subscripcion al plan VIVE PLUS" },
            ],
          },
        ],
      },
    };
 
    // Enviar el menú
    await provider.sendList(`${ctx.from}@s.whatsapp.net`, list);
  })
  .addAnswer(
    null,
    {capture:true},
    async (ctx, { fallBack,flowDynamic,gotoFlow,state }) => {
      // Capturar la respuesta del usuario
      const selectedOption = ctx.body; // Aquí obtienes el ID de la opción seleccionada
      await state.update({"selectedOption":selectedOption})
      // Manejar la respuesta según el ID
      switch (selectedOption) {
        case "1":
          await flowDynamic("Has seleccionado el plan VIVE.");
          return gotoFlow(registroIndividualFlow);
        case "2":
          await flowDynamic("Has seleccionado el plan VIVE+.");
          return gotoFlow(registroIndividualFlow);
        case "3":
          await flowDynamic("Has seleccionado el plan VIVE PLUS.");
          return gotoFlow(registroIndividualFlow);
        default:
          return fallBack("No entendí tu selección. Intenta nuevamente.");
      }
    }
  );



export { menuFlow }