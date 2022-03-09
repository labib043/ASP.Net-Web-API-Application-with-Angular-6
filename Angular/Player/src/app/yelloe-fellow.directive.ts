import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appYelloeFellow]'
})
export class YelloeFellowDirective {

  constructor(private el:ElementRef) {}
  @HostListener('mouseover') onMouseOver(){
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;}
  

}
