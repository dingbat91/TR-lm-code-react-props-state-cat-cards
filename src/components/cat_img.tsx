interface CardImageProps {
	image: string;
	altText: string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}

const CardImage: React.FC<CardImageProps> = ({
	image,
	altText,
	licenceType,
	licenceUrl,
	attributionName,
	attributionUrl,
}) => (
	<>
		<img src={image} alt={altText} className='card__image' />
		<p className='card__text__small'>
			Image licenced under <a href={licenceUrl}>{licenceType}</a>
			{attributionName && (
				<>
					&nbsp;by <a href={attributionUrl}>{attributionName}</a>
				</>
			)}
		</p>
	</>
);

export default CardImage;
