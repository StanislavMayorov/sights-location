export class PointDetail {
  constructor(public id: number, public type: string, public headerTitle: string,
              public title: string, public description: string, public imageUrl: string,
              public color: string, public buttons: Array<Button>) {
  }
}

class Button {
  constructor(public type: string, public text: string, public color: string,
              public actionData: string) {

  }
}


