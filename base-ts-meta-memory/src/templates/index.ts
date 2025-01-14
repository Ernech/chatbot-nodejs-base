import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { registerFlow } from "./registerFlow";
import { menuFlow } from "./menuFlow";
import { registroFamiliarFlow } from "./registroFamiliarFlow";
import { registroIndividualFlow } from "./registroIndividualFlow";
import { tipoSeguroFlow } from "./tipoSeguroFlow";


export default createFlow([
    mainFlow, registerFlow, menuFlow, registroFamiliarFlow,registroIndividualFlow,tipoSeguroFlow
])