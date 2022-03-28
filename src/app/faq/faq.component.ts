import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faqFunc(x: any, y: any) {
    let el = document.getElementsByClassName('collapsed');
    let elem = document.getElementsByClassName('faq-li');
    for (let i = 0; i < el.length; i++) {
      if (el[i].id != x) {
        el[i].className = 'collapsed';
        elem[i].className = 'faq-li';
      }
    }
    document.getElementById(x)?.classList.toggle('active');
    document.getElementById(y)?.classList.toggle('active');

  }

}
