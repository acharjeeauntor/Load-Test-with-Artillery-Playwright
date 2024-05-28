import { Page, expect } from '@playwright/test';


const usernameInputIDSelector = `#user-name`
const passwordInputIDSelector = `#password`
const loginButtonIDSelector = `#login-button`
const cartIconSelector=`[data-test="shopping-cart-link"]`
const menuButtonSelector=`#react-burger-menu-btn`
const logoutButtonSelector = `#logout_sidebar_link`



export async function loginToTheApplication(page:Page,user:string,pass:string) {
    await page.goto('https://www.saucedemo.com/');
    await page.locator(usernameInputIDSelector).fill(user)
    await page.locator(passwordInputIDSelector).fill(pass)
    await page.locator(loginButtonIDSelector).click()
    await expect(page.locator(cartIconSelector)).toBeVisible();   
}

export async function logoutFromApplication(page:Page) { 
    await page.locator(menuButtonSelector).click()
    await page.locator(logoutButtonSelector).click()
    await expect(page.locator(loginButtonIDSelector)).toBeVisible();   
}