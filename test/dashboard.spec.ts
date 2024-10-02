import { expect, test } from "@playwright/test";

test("display day orders amount", async ({ page }) => {
	await page.goto("/", { waitUntil: "networkidle" });

	expect(page.getByText("20", { exact: true })).toBeVisible();
	expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display month orders amount", async ({ page }) => {
	await page.goto("/", { waitUntil: "networkidle" });

	expect(page.getByText("50", { exact: true })).toBeVisible();
	expect(page.getByText("-6% em relação ao mês passado")).toBeVisible();
});

test("display canceled orders amount", async ({ page }) => {
	await page.goto("/", { waitUntil: "networkidle" });

	expect(page.getByText("200", { exact: true })).toBeVisible();
	expect(page.getByText("7% em relação ao mês passado")).toBeVisible();
});

test("display month revenue", async ({ page }) => {
	await page.goto("/", { waitUntil: "networkidle" });

	expect(page.getByText("R$ 10,00", { exact: true })).toBeVisible();
	expect(page.getByText("10% em relação ao mês passado")).toBeVisible();
});