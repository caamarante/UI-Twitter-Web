import { Meta, StoryObj} from '@storybook/react'
import { MenuItem, MenuItemProps } from './MenuItem'

export default {
    title: 'Components/MenuItem',
    component: MenuItem,
    args: {
    },
    argTypes: {
        mode: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<MenuItemProps>

export const MenuItemDefault: StoryObj<MenuItemProps> = {
    args: {
        mode: 'light',
    }
}

export const MenuItemInverted: StoryObj<MenuItemProps> = {
    args: {
        mode: 'dark',
    }
}
