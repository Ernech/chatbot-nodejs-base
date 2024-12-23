import OpenAI from "openai";
import { config } from "~/config";


class aiServices{

    private static apiKey:string;
    private openAi:OpenAI;

    constructor(apiKey:string){
        aiServices.apiKey=apiKey;
        this.openAi = new OpenAI({
            apiKey: aiServices.apiKey
        })
    }

    async chat(promt:string, messages:any[]):Promise<string>{
        try {
            
            const completion = await this.openAi.chat.completions.create({
                model: config.Model,
                messages:[
                    {role:"system", content:promt},
                    ...messages
                ]
            })

            const answer = completion.choices[0].message?.content || "No response"
            return answer;

        } catch (error) {
            console.log(`Error al conectar con OpenAi`, error)
            return "ERROR";
        }
    }


}


export default aiServices;