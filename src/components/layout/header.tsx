import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { Link } from "@tanstack/react-router";

type HeaderProps = {
	title: string;
};

export const Header = ({ title }: HeaderProps) => {
	return (
		<header className="border-b">
			<div className="container mx-auto py-4 flex justify-between items-center">
				<Link to="/">
					<h1 className="text-2xl font-bold">{title}</h1>
				</Link>
				<div className="flex gap-2 items-center">
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>{" "}
					<Link to="/about" className="[&.active]:font-bold">
						About
					</Link>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};
