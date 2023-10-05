import App from '../app';
import React from 'react';
import { action } from '@storybook/addon-actions';

class Game extends React.Component {
  state = {
    difficulty: 'easy',
    hide: false,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ difficulty: 'easy' })}>
          Easy
        </button>
        <button onClick={() => this.setState({ difficulty: 'medium' })}>
          Medium
        </button>
        <button onClick={() => this.setState({ difficulty: 'hard' })}>
          Hard
        </button>
        <button onClick={() => this.setState({ hide: !this.state.hide })}>
          {this.state.hide ? 'Reveal' : 'Hide'}
        </button>
        <App
          difficulty={this.state.difficulty}
          onComplete={action('done')}
          hide={this.state.hide}
          {...this.props}
        />
      </div>
    );
  }
}
export default {
  title: 'Game',
  component: Game,
  parameters: {
    //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   //   backgroundColor: { control: 'color' },
  // },
};
export const Default = {};
