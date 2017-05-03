import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[highlightSelectedRow]'
})
export class SelectRowDirective {

	constructor(private renderer: Renderer2, private el: ElementRef) { }

	@HostListener('click') onClick() {
		this.highlightRow(this.el);
	}

	highlightRow(element: ElementRef) {
		for (let element of this.el.nativeElement.parentNode.children) {
			if (element.classList.contains('table-success')) {
				this.renderer.removeClass(element, 'table-success');
			}
		}
		this.renderer.addClass(this.el.nativeElement, 'table-success');
	}

}