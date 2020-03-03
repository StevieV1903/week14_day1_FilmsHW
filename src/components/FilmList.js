import React, { Fragment } from 'react';
import Film from './Film';
import './FilmList.css'

function FilmList({ films }){
  const filmComponents = films.map(film => {
    return  (
      <Film name={ film.name } key={ film.id } url = {film.url}></Film>
    )
  })


return (
    <Fragment>
    <h2>Film List;</h2>
    <ul className="film-list">
    {filmComponents}
    </ul>
    </Fragment>
  )
}



export default FilmList;
