import {
	searchPublicationForm,
	searchPublicationInput,
	searchPublicationButton
} from "./searchPublication.module.css";

export default function SearchPublication() {
	return (
		<form className={searchPublicationForm}>
			<input className={searchPublicationInput}
					type="text"
					placeholder="Введіть назву або ключове слово"
					aria-label="Search">
			</input>
			<button className={searchPublicationButton}
				type="submit">
				Шукати</button>
		</form>

    )}