
import {
	container,
    downloadButton,
} from "./downloadButton.module.css";

export default function DownloadButton({nextPage, lastPage}) {

	return (
        <div className={container}>
			<button className={downloadButton}
				onClick={nextPage}
			style={{ display: lastPage? "none" : "" }}
			>Завантажити ще</button>
				</div>
    )}