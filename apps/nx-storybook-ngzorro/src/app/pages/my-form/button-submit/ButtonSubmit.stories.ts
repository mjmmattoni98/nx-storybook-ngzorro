import { Story, Meta } from '@storybook/angular/types-6-0';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonSubmitComponent } from './button-submit.component';

export default {
  title: 'Button/Submit',
  component: ButtonSubmitComponent,
} as Meta;

const Template: Story<ButtonSubmitComponent> = (args: ButtonSubmitComponent) => ({
  props: args,
  moduleMetadata: {
    declarations: [ButtonSubmitComponent],
    imports: [NzButtonModule],
  },
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  ...Primary.args,
  loading: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  type: 'secondary',
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
  ...Secondary.args,
  loading: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...Secondary.args,
  size: 'small',
};
