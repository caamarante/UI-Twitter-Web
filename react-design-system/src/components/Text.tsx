import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: '13px' | '14px';
    children: ReactNode;
    asChild?: boolean;
    weight?: '500' | '700';
}

export function Text({ size = '13px', weight = '500', children, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'p';
    
    return(
        <Comp 
            className={clsx(   
                'font-sans text-black', 
                {
                    'text-xs': size === '13px',
                    'text-sm': size === '14px',
                    'font-medium': weight === '500',
                    'font-bold': weight === '700',
                }
                )}
        >
            {children}
        </Comp>
    )
}