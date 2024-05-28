import { Page } from "@playwright/test";
import { accessGetStarted,verifyTitle } from "../commands/access";
export async function artilleryScript(page:Page,vuContext,events,test) {

    await test.step("Get Started Step",async()=>{
        await accessGetStarted(page)
    })
    await test.step("Title verification Step",async()=>{
        await verifyTitle(page)
    })
    
}