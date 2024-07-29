import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {bodyContainer } from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Кафедра “Кібернетика та штучний інтелект”",
  description: "Наша кафедра пропонує унікальні навчальні програми, що поєднують теоретичні знання з практичними навичками, необхідними для успішної кар’єри в галузі високих технологій.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
			<body className={inter.className}>
				<div className={bodyContainer}>
					<Header />
					{children}
					<Footer />

				</div>

				</body>
    </html>
  );
}
