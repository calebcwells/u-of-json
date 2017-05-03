import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

import { SideNavigationService } from '../services/side-navigation.service';

@Directive({
	selector: '[highlightSelectedRow]'
})
export class SelectRowDirective {

	@Input() highlightSelectedRow: number;

	constructor(private service: SideNavigationService, private renderer: Renderer2, private el: ElementRef) { }

	@HostListener('click') onClick() {
		this.highlightRow();
		this.service.assignItemId(this.highlightSelectedRow);
	}

	highlightRow() {
		for (const element of this.el.nativeElement.parentNode.children) {
			if (element.classList.contains('table-success')) {
				this.renderer.removeClass(element, 'table-success');
			}
		}
		this.renderer.addClass(this.el.nativeElement, 'table-success');
	}

}
