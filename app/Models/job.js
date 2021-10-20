import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.pay = data.pay
  }


  get JobTemplate() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded h-100">
        <img width="100%" height="300px" class="car-img rounded-top" src="${this.imgUrl}" alt="job image">
        <div class="p-3">
          <p><b>${this.title} - $${this.pay}/per hour</b></p>
          <p>${this.description}</p>
            <div class="text-end">
            <button title="delete job" class='btn btn-danger justify-self-end' onclick="app.jobController.deleteJob('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }
}