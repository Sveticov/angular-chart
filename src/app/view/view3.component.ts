import {Component} from "@angular/core";

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html'
})
export class View3Component {
  title = 'view3';
  fileName: string;

  myFileUpload(event): void {
    let element = event.target;
    console.log(element.files[0]);
    this.fileName = element.files[0].name;
  }
}
