import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

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
	height: 35px;
`;

/**
 * Renders the search bar and also the fetched results
 * Shows the results in a scrollable lists of all the pages of search results fetched
 *
 * @class SearchQuery
 * @props Component Properties
 */
class SearchQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

	/**
     * Handle the change in input
     *
     * @memberof SearchQuery
     */
    handleInputChange(e) {
		const value = e.target.value;
		this.setState({ 
			searchString: value
        });
        this.props.onSearchChange(value);
	}

	render() {
		return (
            <Wrapper>
                <InputForm onSubmit={event => event.preventDefault()}>
                    <Input
                        placeholder="Search for movie..."
                        value={this.state.searchString}
                        onChange={_.debounce(this.handleInputChange, 1000, {
                            leading: true,
                            maxWait: 1500,
                        })} />
                </InputForm>
            </Wrapper>
		)
	}
}

export default SearchQuery;
