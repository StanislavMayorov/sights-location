export class Point {
  constructor(public id: number, public title: string,
              public description: string, public location: Location, public isOpen: boolean) {
  }
}

class Location {
  constructor(public lat: number, public lng: number) {
  }
}
