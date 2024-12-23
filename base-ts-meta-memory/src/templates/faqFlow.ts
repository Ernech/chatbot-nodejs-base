import path from "path";
import fs, {stat} from "fs"
import { addKeyword, EVENTS } from "@builderbot/bot";
import aiServices from "~/services/aiServices";
import { config } from "~/config";


const pathPromt = path.join(
    process.cwd(),
    "assets/Prompts",
    "prompt_OpenAi.txt"
);

const prompt = fs.readFileSync(pathPromt,"utf8");

export const faqFlow = addKeyword(EVENTS.ACTION)
    .addAction(
        async(ctx,{state,endFlow,gotoFlow})=>{
            try {
                const AI = new aiServices(config.ApiKey);
                const response = await AI.chat(prompt,[{role:"user",content:ctx.body}]);
                return endFlow(response);
            } catch (error) {
                console.log("Error en la llamada GPT", error);
                return endFlow("Por favor, intenta de nuevo");
            }
        }
    )