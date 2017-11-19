import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            // <div className="search-bar">
            //     <input 
            //     value = { this.state.term }
            //         onChange={event => this.onInputChange(event.target.value) } />
            // </div>
            <div className="input-group search-bar">
                <input type="text" className="form-control" 
                        placeholder="Search for..." aria-label="Search for..."
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value) } />
                <span className="input-group-btn">
                    <button 
                        className="btn btn-danger search-button" 
                        onClick={ () => this.onSearch() }
                        type="button">Search</button>
                </span>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
    }

    onSearch() {
        this.props.onSearchVideo(this.state.term);
    }

}

export default SearchBar;