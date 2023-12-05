import './../css/Main.css';
import { FilterContainer } from './FilterContainer';
import { JobListing } from './JobListing';
import jobListings from './../data.json'
import { useState, useEffect } from 'react';
import { filterJobs } from '../lib/filterJobs';

export const Main = () => {

    const [jobs, setJobs] = useState(jobListings);
    const [filterList, setFilterList] = useState([]);

    useEffect(() => {

        console.log(filterList);

        if (filterList.length === 0) {
            setJobs(jobListings)
            return;
        }

        console.log('ran otherwise')
        setJobs(filterJobs(filterList));


    }, [filterList])

    return (
        <main>
            <FilterContainer filterList={filterList} setFilterList={setFilterList} />

            <div className="job-listing-container">

                {/* Job Listing */}

                {
                    jobs.map(job => {

                        return (
                            <JobListing
                                key={job.id}
                                job={job}
                                setFilterList={setFilterList}
                                filterList={filterList}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}
