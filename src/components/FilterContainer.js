import React from 'react'
import './../css/FilterContainer.css';
import CloseIcon from './../images/icon-remove.svg'

export const FilterContainer = ({ filterList, setFilterList }) => {
    return (

        <section className='filter-container'>

            <div className="filters-wrapper">
                {
                    filterList.length > 0 &&
                    filterList.map(filterTerm => {
                        return <FilterType inFilter={true} text={filterTerm} filterList={filterList} setFilterList={setFilterList} />
                    })
                }
            </div>

            <button className="clear-all-btn" onClick={() => setFilterList([])}>
                clear
            </button>

        </section>
    )
}

export const FilterType = ({ inFilter, text, filterList, setFilterList }) => {

    const addFilter = () => {
        const isFilterAlreadyAdded = filterList.filter(filter => filter == text);

        if (isFilterAlreadyAdded.length === 1) {
            return;
        } else {
            setFilterList([...filterList, text])
        }
    }

    const removeFilter = () => {
        const filteredListings = filterList.filter(filter => filter !== text);
        setFilterList(filteredListings);
    }
    return (
        <div className="filter-type">
            <p className='filter-name' onClick={addFilter}>{text}</p>
            {
                inFilter &&
                <button className="remove-filter" onClick={removeFilter}>
                    <img src={CloseIcon} alt="Remove Icon" />
                </button>
            }
        </div>
    )
}
