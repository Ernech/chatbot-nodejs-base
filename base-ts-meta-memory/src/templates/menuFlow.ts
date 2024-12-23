import { addKeyword, EVENTS } from "@builderbot/bot";


const menuFlow = addKeyword(EVENTS.ACTION)
.addAction(async (ctx, {provider})=>{

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
})



export { menuFlow }