
import {
	container,
    downloadButton,
} from "./downloadButton.module.css";

export default function DownloadButton({nextPage}) {

	return (
        <div className={container}>
			<button className={downloadButton}
				onClick={nextPage}
			>Завантажити ще</button>
				</div>
    )}