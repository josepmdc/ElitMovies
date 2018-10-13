import React from 'react'

class MovieRow extends React.Component {

    
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    viewTrailer() {
        const url = "https://www.youtube.com/watch?v=" + "oAALE9m47dc"
        window.location.href = url
    }

    render() {
        return <table>
            <tbody key = { this.props.movie.id }>
            <tr>
            <td>
                <img alt = 'poster' width = '120' src = { this.props.movie.poster_src } />
            </td>
            <td>
                { this.props.movie.title }
                <p>{ this.props.movie.overview }</p>
                <input type="button" class = "viewButton" onClick = { this.viewMovie.bind(this) } value="View"/>
                <input type="button" class = "trailerButton" onClick = { this.viewTrailer.bind(this) } value="Trailer"/>
            </td>
            </tr>
        </tbody>
      </table>
    }
}

export default MovieRow