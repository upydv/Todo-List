import React from 'react';

const SearchTask = ({ searchQuery, setSearchQuery }) => {
    const onSearchChange = (evt) => {
        const query = evt.target.value;
        setSearchQuery(query);
    }

    return (
        <div className="form-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search Tasks"
                value={searchQuery}
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchTask;
