import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { ReactNode } from "react";

type MainProps = {
	children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
	return (
		<>
			<Header title="Kitchen Sink" />
			<main className="container mx-auto flex-1">{children}</main>
			<Footer />
		</>
	);
};
