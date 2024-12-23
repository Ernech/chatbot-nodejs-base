import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { faqFlow } from "./faqFlow";
import { registerFlow } from "./registerFlow";
import { menuFlow } from "./menuFlow";
import { registroFamiliarFlow } from "./registroFamiliarFlow";
import { registroIndividualFlow } from "./registroIndividualFlow";


export default createFlow([
    mainFlow, faqFlow, registerFlow, menuFlow, registroFamiliarFlow,registroIndividualFlow
])