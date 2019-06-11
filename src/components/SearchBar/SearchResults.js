import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Loader from '../../packages/Loader';

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
 * @class SearchBarResults
 * @props Component Properties
 */
class SearchBarResults extends React.Component {
    /**
     * Creates an instance of SearchBar.
     *
     * @param {Object} props
     * @memberof SearchBarResults
     */
    constructor(props) {
        super(props);
        this.loadingRef = null;
    }

    /**
     * Invokes when component updates
     *
     * @param {Object} prevProps
     * @memberof SearchBarResults
     */
    componentDidUpdate(prevProps) {
        const count = this.props.results.length;
        if (count > 0 && !this.props.loading) {
            this.props.observer(null);
            const intersectionTarget = Math.round(count / 10);
            const observerTarget = this.loadingRef.querySelector(
                `li:nth-child(${count - intersectionTarget})`
            );
            this.props.observer(observerTarget);
        }
    }

    render() {
        return (
            <Content>
                <SearchResultsDiv>
                    <SearchResults ref={elem => (this.loadingRef = elem)}>
                        {this.props.results.map(value => (
                            <MovieCard
                                posterPath={value.poster_path}
                                title={value.title}
                                id={value.id}
                                key={value.id}
                            />
                        ))}
                    </SearchResults>
                </SearchResultsDiv>
                {this.props.loading && <Loader />}
                <MessageDiv>
                    {(this.props.page === this.props.totalPages ||
                        this.props.results.length > 0) && (
                        <Message>No search results to show</Message>
                    )}
                </MessageDiv>
            </Content>
        );
    }
}

export default SearchBarResults;
