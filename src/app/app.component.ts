import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';

  t = 0;
  items: string[] = [];

  pushArray(i: string): void {
    this.items.push(i);
  };

  popArray(): void {
    this.items.shift();
  };

  flag: boolean = true;
  onButtonClick(e): void {
    const textArea = document.getElementById('inputVal') as HTMLInputElement;
    //console.log(textArea.innerHTML);
    //console.log(textArea.value);
    if (e == 'c') {
      textArea.innerHTML = '0';
    }
    else if (textArea.innerHTML == '0') {
      if (e == '-' || e == '+' || e == '/' || e == '*') {
        textArea.innerHTML += e;
        this.flag = false;
      } else {
        textArea.innerHTML = e;
      }
    }
    else if (e == '-' || e == '+' || e == '/' || e == '*') {
      if (this.flag) {
        textArea.innerHTML += e;
        this.flag = false;
      }
    }
    else {
      textArea.innerHTML += e;
      this.flag = true;
    }
  }
  equally(){
    const historyCalc = document.getElementById('historyCalc') as HTMLInputElement;
    const textArea = document.getElementById('inputVal') as HTMLInputElement;
    let text = textArea.innerHTML
    //console.log(text);
    if (text != '0') {
      const result = text + '=' + +eval(text).toFixed(5);
      this.pushArray(result);
      textArea.innerHTML = '0';
      if (this.t >= 3) {
        this.popArray();
      }
      historyCalc.innerHTML = '';
      for (const item of this.items) {
        historyCalc.innerHTML += item + '<br>';
      }
      this.t++;
      console.log(result);
    }
  }
}
