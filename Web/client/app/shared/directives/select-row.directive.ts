import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

import { SideNavigationService } from '../services/side-navigation.service';

@Directive({
	selector: '[highlightSelectedRow]'
})
export class SelectRowDirective {

	@Input() highlightSelectedRow: number;

	constructor(private service: SideNavigationService, private renderer: Renderer2, private el: ElementRef) { }

	@HostListener('click', ['$event']) onClick() {
		console.log(this.highlightSelectedRow);
		console.log(event);
		console.log(this.el.nativeElement.parentNode);
		this.highlightRow(this.el);
		this.service.assignItemId(this.highlightSelectedRow);

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