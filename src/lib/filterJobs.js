import jobListings from './../data.json';

export const filterJobs = (filterList) => {
    let filteredJobs = [];

    filterList.forEach(filter => {
        const relatedJobs = jobListings.filter(job => job.role === filter);
        const relatedLanguges = jobListings.filter(job => {
            const lang = job.languages.filter(lang => lang === filter);

            if (lang.length === 1) {
                return job;
            }
        })
        const relatedTools = jobListings.filter(job => {
            const tool = job.tools.filter(tool => tool === filter);

            if (tool.length === 1) {
                return job;
            }
        })

        relatedJobs.length > 0 && relatedJobs.forEach(job => {
            const alreadyThere = filteredJobs.filter(j => j.company === job.company);

            if (alreadyThere.length === 0) {
                filteredJobs.unshift(job)
            }
        });
        relatedLanguges.length > 0 && relatedLanguges.forEach(job => {
            const alreadyThere = filteredJobs.filter(j => j.company === job.company);

            if (alreadyThere.length === 0) {
                filteredJobs.unshift(job)
            }
        });
        relatedTools.length > 0 && relatedTools.forEach(job => {
            const alreadyThere = filteredJobs.filter(j => j.company === job.company);

            if (alreadyThere.length === 0) {
                filteredJobs.unshift(job)
            }
        });
    })

    return filteredJobs;
}