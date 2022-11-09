import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Text } from './Text';

export interface ProfileProps {
    mode?: 'light' | 'dark';
}

export function Profile({mode = 'light' }: ProfileProps) {
    return(    
        <div className='flex w-64 h-16 pt-2.5 pb-5'>
            <Avatar size='sm'></Avatar>
            <div>
                <Heading size='h4'>Davide Biscuso</Heading>
                <Text size='16px'>@biscuttu</Text>
            </div>
        </div>
    )
}