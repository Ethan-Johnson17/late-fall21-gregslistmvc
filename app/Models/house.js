import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.year = data.year
    this.size = data.size
    this.rooms = data.rooms
    this.imgUrl = data.imgUrl
    this.price = data.price
  }


  get HouseTemplate() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded h-100">
        <img width="100%" height="300px" class="car-img rounded-top" src="${this.imgUrl}" alt="house image">
        <div class="p-3">
          <p><b>${this.size} - ${this.rooms} BR. - Built in ${this.year}</b></p>
          <p>${this.address}</p>
          <div class="d-flex align-items-center">
            <p class="m-0"><em>$${this.price}</em></p>
            </div>
            <div class="text-end">
            <button title="delete house" class='btn btn-danger justify-self-end' onclick="app.housesController.deleteHouse('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }
}