import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import {
	searchResults,
} from "./page.module.css"
export default function Page() {
	return (
		<div>
			<Header/>
			<section className={searchResults}>
				<h1>Результати пошуку</h1>
				<p>За пошуковим запитом <span>“тензор”</span> було знайдено 0 результат(ів)</p>
				<form>
						<input type="text"  value="тензор"
							aria-label="Search"></input>
						<button type="submit">Шукати</button>
					</form>
					</section>
			<Footer/>
		</div>
	)
};