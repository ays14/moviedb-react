import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const Content = styled.div`
	text-align: center;
	align-content: center;
`;

const SearchResultsDiv = styled.div`
    text-align: center;
`;
const SearchResults = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: baseline;
    padding: 16px;
    align-content: center;
`;

const MessageDiv = styled.div`
    display: block;
    text-align: center;
`;

const Message = styled.p`
    text-align: center;
	font-size: 20px;
`;

/**
 * Renders the fetched results of the search
 *
 * @param {object} props props passed from parent component
 */
const SearchBarResults = props => {
    return (
        <Content>
            <SearchResultsDiv>
                <SearchResults>
                    {props.results.map((value) => (
                        <MovieCard 
                            posterPath={value.poster_path} 
                            title={value.title}
                            id={value.id}
                            key={value.id}
                        />
                    ))}
                </SearchResults>  
            </SearchResultsDiv>
            <MessageDiv>
                {props.exhausted && (
                        <Message>
                            No search results to show
                        </Message>					
                )}
            </MessageDiv>
        </Content>
    )
}

export default SearchBarResults;
