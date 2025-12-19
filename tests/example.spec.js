// @ts-check
import { test, expect } from '@playwright/test';

test('Teste de login com sucesso.', async ({ page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test= "username"]').fill('standard_user')
    await page.locator('[data-test= "password"]').fill('secret_sauce')
})