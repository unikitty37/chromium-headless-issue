import { expect, test } from '@playwright/test'

test.describe('Full screen control', () => {
  test.describe('when the browser is not full screen', () => {
    test('is displayed', async ({ page }) => {
      await page.goto('/')

      await expect(page.getByRole('button', { name: 'Full Screen' })).toBeVisible()
    })
  })

  test.describe('when the browser is full screen', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => document.documentElement.requestFullscreen())
    })

    test('is not displayed', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'Full Screen' })).not.toBeVisible()
    })
  })
})
