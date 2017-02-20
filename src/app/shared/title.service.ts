import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  defaultTitle: string = 'Sights location';

  constructor() { }

  getTitle(pageTitle?: string):string{
    if (pageTitle){
      return `${this.defaultTitle} | ${pageTitle}`;
    }
    else {
      return this.defaultTitle;
    }
  }

}
