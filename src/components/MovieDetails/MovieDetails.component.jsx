'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import MovieInteraction from '../MovieInteraction/MovieInteraction.component';
import MovieTrailer from '../MovieTrailer/MovieTrailer.component';
import TabsButtons from './TabsButtons.component';

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
			className="relative w-full h-[75vh] bg-cover bg-[right_-250px_top]"
			style={{ backgroundImage: backgroundImage }}
		>
			<div className="w-full h-full grid inset-0 bg-movie-overlay pl-24">				
				<div className='w-full mt-10 max-h-[240px]'>
					<Image 
						src={`${logoUrl}`} 
						alt={'logo'} 
						width={350} 
						height={200}
						style={{ width: "auto", height: "auto" }} // Evita la distorsione
						className='mb-10'
					/>
					<span className='mb-3'>{overViewData.infos}</span>
				</div>
				{tab === "panoramica" && (
					<div>
						<MovieInteraction 
							sizes={{ play: 20, plus: 25, star: 30, progress: 80 }}
							value={(voteAverage * 10)} 
						/>
						<div className='dynamic-container w-2/5 mt-3'>
							<span>{overview}</span>
							<p className='small-text-gray mt-3'>
								Cast: {overViewData.cast}
							</p>
							<p className='small-text-gray'>
								Genere: {overViewData.generes.join(', ')}
							</p>
						</div>
					</div>
				)}
				{tab === 'dettagli' && (
					<div className='grid grid-cols-3 w-1/2'>
						<div className='flex justify-start flex-col'>
							<span className='small-text-gray'>Cast:</span>
							{casting.map(({ name, id }) => (
								<span key={id}>{name}</span>
							))}
						</div>
						<div className='flex justify-start flex-col'>
							<span className='small-text-gray'>Generi:</span>
							{overViewData.generes.map((gen, index) => (
								<span key={index}>{gen}</span>
							))}
						</div>
						<div className='flex justify-start flex-col'>
							<span className='small-text-gray'>Nazioni:</span>
							{productionCountries.map((name, index) => (
								<span key={index}>{name}</span>
							))}
						</div>
					</div>
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