import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const GET_MOVIES = gql`
    {
        movies {
            title
            medium_cover_image
        }
    }
`;

const Home = () => {
    const {loading, data, error} = useQuery(GET_MOVIES);
    console.log(data.movies.length);

    return <h1>{data && data.movies.map(movie => movie.title)}</h1>
};

export default Home;
