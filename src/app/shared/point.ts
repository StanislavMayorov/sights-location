export class Point {
  constructor(public id: number, public title: string,
              public description: string, public location: Location) {

  }
}


class Location {
  constructor(public lat: number, public lng: number) {

  }
}
