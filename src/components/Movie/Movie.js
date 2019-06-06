import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Container = styled.div`
    display: flex;
    column-count: 2;
    column-gap: 5px;
`;

const Head = styled.h1`
    display: block;
    align-content: center;
    text-align: center;
    margin-block-end: 30px;
`;

const Card = styled.div`
    text-align: right;
    padding-right: 20px;
    border-right: 2px solid black;
    width: 50%;
`;

const Details = styled.div`
    text-align: left;
    width: 50%;
    margin-right: 10px;
    margin-left: 20px;
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
`;

const Subheading = styled.p`
    font-size: 20px;
    text-decoration-line: underline;
    font-weight: bold;
`;

const Tagline = styled.p`
    font-size: 16px;
`;

const Overview = styled.p`
    font-size: 16px;
    text-align: justify;
    width: 90%;
`;

const Content = styled.p`
    font-size: 16px;
`;

const Video = styled.iframe`
    height: 90%;
    width: 90%;
`;

const Image = styled.img`  
`;

/**
 * Movie Component
 * 
 * @param {object} props props from the parent component
 */
const Movie = props => {
        const imageURL = 'http://image.tmdb.org/t/p/w200';
        const videoURL = 'https://www.youtube.com/embed/';
        const {
            title, 
            posterPath, 
            tagline, 
            overview, 
            releaseDate, 
            voteAverage, 
            voteCount,
            trailer
        } = props;
        return (
            <Wrapper>
                <Head>
                    <Link to='/'>
                        Movie Hunter
                    </Link>
                </Head>
                <Container>
                    <Card>
                        <Image src={imageURL+posterPath} alt='loading' />
                        <Title>
                            {title}
                        </Title>
                        <Tagline>
                            {tagline}
                        </Tagline>
                    </Card>
                    <Details>
                        <Subheading>Synopsis</Subheading>
                        <Overview>{overview}</Overview>
                        <Content>Released on: {releaseDate}</Content>
                        {voteCount && (
                            <Content>Rated {voteAverage} by {voteCount} votes</Content>
                        )}
                        {trailer ? (
                            <Video src={videoURL+trailer}>
                                Trailer
                            </Video>
                        ) : (
                            <Content>Trailer not found</Content>
                        )}
                    </Details>
                </Container>
            </Wrapper>
        )
}

export default Movie;
