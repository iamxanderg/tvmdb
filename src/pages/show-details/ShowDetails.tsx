import Accordion from '@/components/accordion/Accordion';
import BackButton from '@/components/back-button/back-button';
import Footer from '@/components/footer/Footer';
import { useFetch } from '@/hooks/useFetch';
import '@/pages/show-details/styles.scss';
import { Episode, Show } from '@/store/types/show';
import urlConstants from '@/utilities/constants';
import { formatDate, isEmpty, removeTags } from '@/utilities/utils-lib';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowDetails() {
  const { id } = useParams();
  const [selectedShow, setSelectedShow] = useState<Show>();
  const { data } = useFetch({ url: `${urlConstants.allShows}/${id}${urlConstants.showDetails}` });

  useEffect(() => {
    if (!isEmpty(data)) {
      const { cast, episodes, seasons } = data._embedded;

      const seasonsList = seasons.map((season: Show) => {
        return episodes.filter((ep: Episode) => ep.season === season.number);
      });

      const selectedShowData = {
        cast: cast,
        seasons: seasonsList,
        ended: data.ended,
        genres: data.genres,
        id: data.id,
        image: data.image.medium,
        language: data.language,
        name: data.name,
        number: data.number,
        premiered: data.premiered,
        rating: data.rating,
        runtime: data.runtime,
        summary: data.summary,
        synopsis: data.synopsis,
      };

      setSelectedShow(selectedShowData);
    }
  }, [data]);

  const renderOverview = () => {
    return (
      <div className='overview-container'>
        <div className='overview-info'>
          <div>{removeTags(selectedShow.summary)}</div>
          <div className='label'>
            {selectedShow.genres.map((genre, index) => {
              return (
                <span key={index} className='tags'>
                  {genre}
                </span>
              );
            })}
          </div>
        </div>
        <img src={selectedShow.image.toString()} title='' />
      </div>
    );
  };

  const renderEpisodes = () => {
    return selectedShow.seasons.map((season: Episode[]) => {
      let currentSeason = '';

      const episodeBySeason = season.map((episode: Episode) => {
        const episodeKey = `S${episode.season}E${episode.number}`;
        currentSeason = `Season ${episode.season}`;

        return (
          <div key={episodeKey} className='episode-info'>
            <div className='episode-info-title'>{`${episodeKey}: ${episode.name}`}</div>
            <p>{removeTags(episode.summary)}</p>
          </div>
        );
      });

      return { title: currentSeason, content: episodeBySeason };
    });
  };

  const renderCast = () => {
    return (
      <>
        {selectedShow.cast.map((actor, index) => {
          const { person, character } = actor;

          return (
            <div key={index} className='actor'>
              <img src={person.image.medium} title='' />
              <div className='actor-info'>
                <span className='actor-info-name'>{person.name}</span>
                <span>{character.name}</span>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className='show-details'>
      {!isEmpty(selectedShow) && (
        <>
          <BackButton />

          <div className='show-info'>
            <h1>{selectedShow.name}</h1>
            <p>
              {`${formatDate(selectedShow.premiered)} - ${formatDate(selectedShow.ended)}`} | {selectedShow.runtime}
              mins. | Rating: {selectedShow.rating.average}
            </p>
          </div>
          <div className='details-grid'>
            <section className='overview'>
              <h2>Overview</h2>
              {renderOverview()}
            </section>

            <section className='episode'>
              <h2>Episode Guide</h2>
              {selectedShow.seasons.length > 0 && <Accordion data={renderEpisodes()} />}
            </section>

            <section className='cast'>
              <h2>Cast</h2>
              {selectedShow.cast.length > 0 && <div className='cast-grid'>{renderCast()}</div>}
            </section>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
