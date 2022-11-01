import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    color?: 'primary' | 'secondary';
    size?: 'lg' | 'md' | 'sm';
    children: ReactNode;
    asChild?: boolean;
}

export function Button({size = 'lg', color = 'primary', children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return(
        <Comp 
            className={clsx(   
                'font-bold font-sans rounded-full text-md',
                {
                    'px-22 py-3.7': size === 'lg',
                    'px-22 py-2.5': size === 'md',
                    'px-22 py-1.3': size === 'sm',
                    'bg-primary-blue text-white border-none hover:bg-dark-blue': color === 'primary',
                    'bg-transparent text-primary-blue border-solid border-2 border-sky-primary-blue hover:bg-primary-blue hover:text-white': color === 'secondary',
                } 
                )}
        >
            {children}
        </Comp>
    )
}