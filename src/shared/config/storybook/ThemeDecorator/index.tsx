import { Story } from '@storybook/react';
import { Theme } from 'app/provider/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
