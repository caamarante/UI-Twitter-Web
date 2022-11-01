import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'h2' | 'h3' | 'h4' | 'h5';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = 'h2', children, asChild }: HeadingProps) {
    const Comp = size;
    
    return(
        <Comp 
            className={clsx(   
                'font-sans font-bold text-black', 
                {
                    'text-2xl': size === 'h2',
                    'text-xl': size === 'h3',
                    'text-lg': size === 'h4',
                    'text-md': size === 'h5',
                }
                )}
        >
            {children}
        </Comp>
        
    )
}