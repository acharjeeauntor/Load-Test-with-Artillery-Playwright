import { Page } from "@playwright/test";
import { loginToTheApplication,logoutFromApplication } from "../commands/login";
import loginData from "../data/loginData.json"

export async function LoginAndLogoutScript(page:Page,vuContext,events,test) {

    await test.step("Login To The Application",async()=>{
        await loginToTheApplication(page,loginData.user,loginData.pass)
    })
    await test.step("Logout From The Application",async()=>{
        await logoutFromApplication(page)
    })
    
}