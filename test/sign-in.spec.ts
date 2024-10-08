import { expect, test } from "@playwright/test";

test("sign in successfully", async ({ page }) => {
	await page.goto("/sign-in", { waitUntil: "networkidle" });

	await page.getByLabel("Seu email").fill("johndoe@example.com");
	await page.getByRole("button", { name: "Acessar painel" }).click();
	const toast = page.getByText(
		"Enviamos um link de autenticação para o seu email",
	);

	await expect(toast).toBeVisible();
});

test("sign in with wrong credentials", async ({ page }) => {
	await page.goto("/sign-in", { waitUntil: "networkidle" });

	await page.getByLabel("Seu email").fill("wrong@example.com");
	await page.getByRole("button", { name: "Acessar painel" }).click();
	const toast = page.getByText("Credenciais inválidas");

	await expect(toast).toBeVisible();
});

test("navigate to sign up page", async ({ page }) => {
	await page.goto("/sign-in", { waitUntil: "networkidle" });

	await page.getByRole("link", { name: "Seja um parceiro" }).click();

	expect(page.url()).toContain("/sign-up");
});
