import { Meta, Story } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { StepperComponent } from './stepper.component';

export default {
  title: 'Stepper',
  component: StepperComponent,
} as Meta;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args,
});

// Default value is 0
export const DefaultValue = Template.bind({});
DefaultValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement );

  const counter = await canvas.findByTestId('counter');

  await expect(counter).toHaveTextContent('0');
};

// Supports an "initial" prop to set the value
export const InitialValue = Template.bind({});
InitialValue.args = {
  count: 100,
};
InitialValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement );

  const counter = await canvas.findByTestId('counter');

  await expect(counter).toHaveTextContent('100');
};

// When the increment button is pressed, the counter is incremented
export const Increment = Template.bind({});
Increment.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement );

  const increment = await canvas.findByTestId('increment');
  const counter = await canvas.findByTestId('counter');

  await increment.click();

  await expect(counter).toHaveTextContent('1');
};

// When the decrement button is pressed, the counter is decremented
export const Decrement = Template.bind({});
Decrement.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement );

  const decrement = await canvas.findByTestId('decrement');
  const counter = await canvas.findByTestId('counter');

  await decrement.click();

  await expect(counter).toHaveTextContent('-1');
};

// Clicking + fires a change event with the incremented value
export const ChangeEvent = Template.bind({});
ChangeEvent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement );

  const increment = await canvas.findByTestId('increment');
  const counter = await canvas.findByTestId('counter');

  await increment.click();

  await expect(counter).toHaveTextContent('1');
};
