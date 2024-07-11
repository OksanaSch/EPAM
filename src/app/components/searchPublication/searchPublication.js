import {
	searchPublication,
} from "./searchPublication.module.css";

export default function SearchPublication() {
	return (
        <div className={searchPublication}>
					<h2>Пошук публікацій </h2>
					<form>
						<input type="text"  placeholder="Введіть назву або ключове слово"
							aria-label="Search"></input>
						<button type="submit">Шукати</button>
					</form>
   				 </div>

    )}