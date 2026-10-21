import { expect, test } from "@playwright/test";

for (const viewport of [
  { width: 1440, height: 800 },
  { width: 1440, height: 1600 },
  { width: 390, height: 844 },
]) {
  test(`homepage survives score animations at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await expect(page.locator("astro-island[ssr]")).toHaveCount(0);

    const scores = page.locator("article").filter({
      has: page.getByRole("heading", { name: "Lighthouse scores" }),
    });
    await scores.scrollIntoViewIfNeeded();
    const counters = scores.locator("span").filter({ hasText: /^\d+$/ });
    await expect(counters).toHaveText(["98", "98", "92", "100"]);
    await expect(page.locator("main")).toBeVisible();

    // Leave and re-enter the viewport to exercise counter cleanup and restart.
    await page.locator("footer").scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await scores.scrollIntoViewIfNeeded();
    await expect(counters).toHaveText(["98", "98", "92", "100"]);
    await expect(page.locator("main")).toBeVisible();
    expect(errors).toEqual([]);
  });
}
