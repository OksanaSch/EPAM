import Image from "next/image";
import {
	heroContainer,
	heroContent,
	heroGreeting,
	heroListItem,
	imageTechnologies
} from "./hero.module.css";

export default async function Hero ({image, header, listHeader, listItems}) {
	return (
		<div className={heroContainer}>
			<Image className={imageTechnologies}
				src={image}
				alt="hero picture"/>
					<div className={heroContent}>
						<h2 className={heroGreeting}>{header}</h2>
						<ul>
					{listHeader}
					{listItems.map(item => <li key={item} className={heroListItem}>{ item}</li>)}
						</ul>
					</div>

				</div>
	)



}