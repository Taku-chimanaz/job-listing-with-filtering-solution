import React from 'react'
import './../css/JobListing.css';
import { FilterType } from './FilterContainer';

export const JobListing = ({ job, filterList, setFilterList }) => {

    const img = job.logo.split('/')[2];
    return (

        <article className="job-listing">

            <div className="job-listing__left-side">

                <div className="company-img-container">
                    <img src={img} alt="Company Logo" />
                </div>

                <div className="job-description">

                    <div className="company-desc">
                        <p className="company-name">
                            {job.company}
                        </p>

                        {
                            job.new &&
                            <p className="new">
                                new!
                            </p>
                        }


                        {
                            job.featured &&
                            <p className="featured">
                                featured
                            </p>
                        }
                    </div>

                    <p className="position">
                        {job.position}
                    </p>

                    <div className="conditions">
                        <p className="post-date">{job.postedAt}</p>
                        <p className='type'>{job.contract}</p>
                        <p className="location">{job.location}</p>
                    </div>


                </div>


            </div>

            <div className="job-listing__right-side">

                <FilterType
                    inFilter={false}
                    text={job.role}
                    filterList={filterList}
                    setFilterList={setFilterList}
                />

                {
                    job.languages.length > 0 &&
                    job.languages.map(lang => {
                        return <FilterType inFilter={false} text={lang} filterList={filterList} setFilterList={setFilterList} />
                    })
                }

                {
                    job.tools.length > 0 &&
                    job.tools.map(lang => {
                        return <FilterType inFilter={false} text={lang} filterList={filterList} setFilterList={setFilterList} />
                    })
                }

            </div>
        </article>
    )
}
