import { Car } from "./Models/Car.js"
import { House } from "./Models/house.js"
import { Job } from "./Models/job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({ make: 'Tesla', model: 'CyberTruck', year: 2022, price: 1000000, color: '#C0C0C0', description: 'This thing is sleek, new WINDOWS!!!', imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg' }),
    new Car({ make: 'Mystery', model: 'Machine', year: 1987, price: 29389, color: '#249255', description: 'Smell like teenagers and a dog in here', imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG' }),
    new Car({ make: 'Ford', model: 'Pinto', year: 1980, price: 1488, color: '#900d09', description: 'This car is HOT!!!', imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg' })
  ]

  /**@type {House[]} */
  houses = [
    new House({ address: '123 Main St', year: 2012, size: '2300sq.ft.', rooms: 4, price: 5000, imgUrl: 'https://www.trbimg.com/img-58b9aad9/turbine/ct-lament-of-owning-old-house--balancing-0303-20170303' }),
    new House({ address: '234 2nd St', year: 872, size: '19000sq.ft.', rooms: 600, price: 10000000, imgUrl: 'https://www.wheretraveler.com/sites/default/files/images/warwick-castle-caesars-tower.jpg' }),
    new House({ address: '321 3rd St Rd', year: 2000, size: '1900sq.ft.', rooms: 2, price: 300000, imgUrl: 'http://architecturerestoration.com/wp-content/uploads/2017/12/Fine_old_house_Childswickham_-_geograph.org_.uk_-_1720347.jpg' }),
  ]

  /**@type {Job[]} */
  jobs = [
    new Job({ title: 'Web Designer', pay: 100, description: 'You can design websites', imgUrl: 'https://cdn.designbump.com/wp-content/uploads/2021/01/quench-responsive-web-design-laptop-mockup.2.jpg' }),
    new Job({ title: 'Exterminator', pay: 90, description: 'You can kill bugs', imgUrl: 'https://fanart.tv/fanart/movies/37835/moviethumb/the-exterminator-526f786eb9c86.jpg' }),
    new Job({ title: 'Butler', pay: 100, description: 'You can butler', imgUrl: 'http://i1.cdnds.net/14/08/618x484/ustv-joseph-marcell-geoffrey-the-butler-fresh-prince-of-bel-air.jpg' }),
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
