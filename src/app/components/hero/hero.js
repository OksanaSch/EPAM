import Image from "next/image";
import {
	heroContainer,
	heroContent,
	heroGreeting,
	heroListItem,
	imageTechnologies
} from "./hero.module.css";

export default async function Hero ({image, header, textAbstracts}) {
	return (
		<div className={heroContainer}>
			<Image className={imageTechnologies}
				src={image}
				width={484}
				height={286}
				alt="hero picture"/>
					<div className={heroContent}>
				<h2 className={heroGreeting}>{header}</h2>

					{textAbstracts.map(item => <p key={item} className={heroListItem}>{ item}</p>)}
					</div>

				</div>
	)



}