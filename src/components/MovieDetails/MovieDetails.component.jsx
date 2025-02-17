'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import MovieTrailer from '../MovieTrailer/MovieTrailer.component';
import TabsButtons from './TabsButtons/TabsButtons.component';
import Overview from './OverviewTab/OverviewTab.component';
import DetailsTab from './DetailsTab/DetailsTab.component';

const MovieDetails = ({ movieData }) => {
	const [tab, setTab] = useState('panoramica');
	
	const {
		error, title, releaseDate, 
		runtime, voteAverage, voteCount, 
		genres, overview, productionCountries,
		logoUrl, casting, backgroundImage, 
		trailer 
	} = movieData;

	if (error) return <p>Errore: {error}</p>;
	if (!movieData) return <p>Loading...</p>;

	const overViewData = {
		infos: `${releaseDate} - ${runtime} min - ${voteCount} Voti`,
		generes: genres || ["Generi non disponibili"],
		cast: casting.slice(0, 3).map(actor => actor.name).join(', ')
	}

	// Funzione per gestire il cambio del contenuto
	const handleButtonClick = (content) => {
		setTab(content);
	};

	return (
		<div  
			className="relative w-full bg-cover bg-[right_-250px_top] min-h-[75vh]"
			style={{ backgroundImage: backgroundImage }}
		>
			<div className="w-full h-full min-h-[75vh] grid inset-0 bg-movie-overlay pl-[70px]">				
				<div className='w-full mt-10 h-[240px] flex flex-col items-start justify-center gap-10'>
					{logoUrl ? (
						<div className='relative w-full max-w-[300px] aspect-[16/9]'>
							<Image 
							src={`${logoUrl}`} 
							alt={'logo'}
							fill 						
							style={{ width: "100%", height: "100%" }} // Evita la distorsione
							className='mb-10'
						/>
						</div>
						) : (
						<h1>{title}</h1>
					)}
					<span className='mb-3'>{overViewData.infos}</span>
				</div>
				{tab === "panoramica" && (
						<Overview 
							voteAverage={(voteAverage * 10)}
							overViewP={overview}
							overViewData={overViewData}
						/>
				)}
				{tab === 'dettagli' && (
					<DetailsTab
						casting={casting}
						overViewData={overViewData}
						productionCountries={productionCountries}
					/>
				)}
				{tab === 'trailer' && (
					<MovieTrailer trailerData={trailer}/>
				)}
				<TabsButtons handler={handleButtonClick} tab={tab} />
			</div>
		</div>
	)
}

export default MovieDetails;