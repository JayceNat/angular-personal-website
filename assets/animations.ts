import { trigger, state, style, transition, animate } from '@angular/animations';

export const SlideDownAnimation = [
    trigger('slideDown', [
        state('open', style({ transform: 'translateY(0%)' })),
        state('close', style({ transform: 'translateY(-100%)' })),
        transition('* <=> *', [
          animate('400ms ease-in-out')
        ])
    ])
]