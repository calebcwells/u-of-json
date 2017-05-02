import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const slideOutAnimation: AnimationEntryMetadata =
    trigger('slideOutAnimation', [
        state('*', style({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
        })),
        transition(':enter', [
            style({
                right: '-400%',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),
            animate('500ms ease-out', style({
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }))
        ]),
        transition(':leave', [
            animate('500ms ease-in', style({
                right: '-400%',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);
