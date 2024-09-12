import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<div className="gap2 flex h-screen flex-col items-center justify-center">
			<h1 className="font-bold text-4xl">Página não encontrada</h1>
			<p className="text-accent-foreground">
				Voltar para o{" "}
				<Link to="/" className="text-sky-600 dark:text-sky-400">
					Dashboard
				</Link>
			</p>
		</div>
	);
}
