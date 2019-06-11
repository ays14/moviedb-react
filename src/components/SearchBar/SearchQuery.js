import React from "react";
import _ from "lodash";
import styled from "styled-components";

const Wrapper = styled.div`
    align-content: center;
    text-align: center;
`;
const InputForm = styled.form`
    background-color: lightgray;
`;

const Input = styled.input`
    text-align: center;
    width: 40%;
    height: 36px;
`;

/**
 * Renders the search bar and also the fetched results
 * Shows the results in a scrollable lists of all the pages of search results fetched
 *
 * @class SearchQuery
 * @props Component Properties
 */
class SearchQuery extends React.Component {
    /**
     * Creates an instance of SearchBar.
     *
     * @param {Object} props
     * @memberof SearchQuery
     */
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.delayed = _.debounce(this.props.onSearchChange, 600);
    }

    /**
     * Handle the change in input
     *
     * @memberof SearchQuery
     */
    handleInputChange(event) {
        const value = event.target.value;
        this.setState({
            searchString: value
        });
        this.delayed(value);
    }

    render() {
        return (
            <Wrapper>
                <InputForm onSubmit={event => event.preventDefault()}>
                    <Input
                        placeholder="Search for movie..."
                        value={this.state.searchString}
                        onChange={this.handleInputChange}
                    />
                </InputForm>
            </Wrapper>
        );
    }
}

export default SearchQuery;
