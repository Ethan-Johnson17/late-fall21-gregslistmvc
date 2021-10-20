import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Forms/HouseForm.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
    const houses = ProxyState.houses
    let houseTemplate = ''
    houses.forEach(house => houseTemplate += house.HouseTemplate)
    document.getElementById('listings').innerHTML = houseTemplate
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
    }


    showHouses() {
        _drawHouses()
        document.getElementById('form-button').classList.remove('visually-hidden')
        document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }

    createHouses() {
        window.event.preventDefault()
        /** @type {HTMLFormElement} */
        // @ts-ignore
        const formElem = window.event.target
        const houseData = {
            address: formElem.address.value,
            year: formElem.year.value,
            size: formElem.size.value,
            rooms: formElem.rooms.value,
            imgUrl: formElem.imgUrl.value,
            price: formElem.price.value,
        }

        housesService.createHouse(houseData)

        formElem.reset()

        // @ts-ignore
        bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()

    }
    deleteHouse(id) {
        housesService.deleteHouse(id)
    }
}