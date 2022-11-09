import { Meta, StoryObj} from '@storybook/react'
import { BackArrow, Bookmarks, IconSetProps } from './IconSet'

export default {
    title: 'Components/IconSet',
    component: BackArrow,
    args: {
    },
    argTypes: {
    }
} as Meta<IconSetProps>

export const BackArrowDefault: StoryObj<IconSetProps> = {
    args: {
        mode: 'light'
    }
}
export const BookmarksDefault: StoryObj<IconSetProps> = {
    component: Bookmarks,
    args: {
        mode: 'light'
    }
} as Meta<IconSetProps>
