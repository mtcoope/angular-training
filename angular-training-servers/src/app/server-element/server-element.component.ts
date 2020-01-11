import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true}) paragraph : ElementRef;

  constructor() {
    console.log('constructor called!');
   }

  ngOnInit() {
    console.log('ngoninit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngdocheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
}
