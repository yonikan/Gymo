import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowMenu]'
})
export class ShowMenuDirective implements OnInit  {

  constructor(private elementRef: ElementRef) { 

  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.elementRef.nativeElement.style.display = 'none';
    // this.elementRef.nativeElement.style.visibility = 'hidden';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // this.elementRef.nativeElement.style.visibility = 'visible';
    this.elementRef.nativeElement.style.display = 'block';    
    // console.log('mouseenter from the custom directive!!!!');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.elementRef.nativeElement.style.backgroundColor = '#fff';
    // this.elementRef.nativeElement.style.display = 'none';
    // this.elementRef.nativeElement.style.visibility = 'hidden';
  }
}
