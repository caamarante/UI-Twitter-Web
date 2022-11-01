import { Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Tweet',
    },
    argTypes: {
        size: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<ButtonProps>

export const Primary_Big: StoryObj<ButtonProps> = {
    args: {
        size: 'lg'
    }
}

export const Primary_Medium: StoryObj<ButtonProps> = {
    args: {
        size: 'md'
    }
}

export const Secondary_Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
        color: 'secondary'
    }
}

export const Secondary_Medium: StoryObj<ButtonProps> = {
    args: {
        size: 'md',
        color: 'secondary'
    }
}