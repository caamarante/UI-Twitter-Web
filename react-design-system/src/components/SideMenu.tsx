import { clsx } from 'clsx';
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Text } from './Text';
import { Logo } from './IconSet';
import { BookmarksDefault, Explore, Home, Lists, Messages, More, Notifications, Profile } from './MenuItem';
import { Button } from './Button';
import { ProfileCard } from './Profile';

export interface SideMenuProps {
    mode?: 'light' | 'dark';
}

export function SideMenu({mode = 'light'} : SideMenuProps) {
    return (
        <div  className={clsx('w-64 h-screen flex flex-col justify-between',{'bg-dark-300': mode === 'dark'})}>
            <div className={clsx('w-64 pt-2.5',{'bg-dark-300': mode === 'dark'})}>
                <Logo className='flex items-center ml-2.5' size='24' mode={mode}></Logo>
                <ul>
                    <li><Home mode={mode}>Home</Home></li>
                    <li><Explore mode={mode}>Explore</Explore></li>
                    <li><Notifications mode={mode}>Notifications</Notifications></li>
                    <li><Messages mode={mode}>Messages</Messages></li>
                    <li><BookmarksDefault mode={mode}>Bookmarks</BookmarksDefault></li>
                    <li><Lists mode={mode}>Lists</Lists></li>
                    <li><Profile mode={mode}>Profile</Profile></li>
                    <li><More mode={mode}>More</More></li>
                </ul>
                <Button className='w-56 my-4 bg-primary-blue hover:bg-dark-blue text-white' size='lg'>Tweet</Button>
            </div>
            <ProfileCard mode={mode}></ProfileCard>
        </div>
    )
}