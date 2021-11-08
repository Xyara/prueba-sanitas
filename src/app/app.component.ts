import { Component } from '@angular/core';
import { IItemArray } from './models/item-array.model';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  idForm: any;
  textForm: string = "";
  randomArray: IItemArray[] = [];
  randomArrayDisplayed: IItemArray[] = [];

  constructor() {
    for (let i = 1; i <= 4000; i++) {
      this.randomArray.push(this.generateItem(i));
    }
    this.randomArrayDisplayed = Object.assign([], this.randomArray);
    console.log("Generated new array with " + this.randomArray.length + " elements");
  }

  public checkNewRow(position: number): number {
    return position % 3;
  }

  public search() {
    this.randomArrayDisplayed = this.randomArray.filter(element => {
      if (this.idForm == null) {
        return element.text.includes(this.textForm);
      }
      return element.text.includes(this.textForm) && element.id.toString().includes(this.idForm);
    });
    
    console.log("search " + this.randomArrayDisplayed.length);

  }


  /**
  */
  private generateItem(id: number): IItemArray {

    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 2,
        min: 1
      },
      wordsPerSentence: {
        max: 8,
        min: 4
      }
    });

    return {
      id,
      photo: "https://picsum.photos/id/" + id + "/" + Math.floor(Math.random() * 1000) + "/" + Math.floor(Math.random() * 1000),
      text: lorem.generateParagraphs(1)
    }

  }
}
