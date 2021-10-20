import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Forms/JobForm.js";
import { jobsService } from "../Services/JobsService.js";

function _drawJobs() {
    const jobs = ProxyState.jobs
    let jobTemplate = ''
    jobs.forEach(job => jobTemplate += job.JobTemplate)
    document.getElementById('listings').innerHTML = jobTemplate
}

export class JobsController {
    constructor() {
        ProxyState.on('jobs', _drawJobs)
    }

    showJobs() {
        _drawJobs()
        document.getElementById('form-button').classList.remove('visually-hidden')
        document.getElementById('modal-body-slot').innerHTML = getJobForm()
    }
}