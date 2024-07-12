import {
	container,
    downloadButton,
} from "./downloadButton.module.css";

export default function DownloadButton() {
	return (
        <div className={container}>
					<button className={downloadButton}>Завантажити ще</button>
				</div>
    )}