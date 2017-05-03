import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const routeAnimation: AnimationEntryMetadata =
	trigger('routeAnimation', [
		state('*',
			style({
				position: 'fixed',
				left: '70px',
				right: '20px'
			})
		),
		transition(':enter', [
			style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)' }),
			animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
		])
	]);
