import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import Modal from '../components/modal/modal';
import Button from '../components/button/button';
import { ModalProps } from '../components/types';

// Wrapper component to handle modal state
const ModalWrapper: React.FC<React.PropsWithChildren<ModalProps>> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button text="open modal" onClick={() => setIsOpen(true)}/>
      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  component: ModalWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'center'],
    },
    title: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is the default modal content.</p>
      <p>You can put any content here.</p>
    </ModalWrapper>
  ),
};

export const WithTitle: Story = {
  args: {
    title: 'Modal Title',
  },
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal has a title.</p>
      <p>The title appears in the header with a close button.</p>
    </ModalWrapper>
  ),
};

export const CenterPlacement: Story = {
  args: {
    placement: 'center',
    title: 'Center Modal',
  },
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal is centered on the screen.</p>
      <p>It's the default placement.</p>
    </ModalWrapper>
  ),
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom',
    title: 'Bottom Modal',
  },
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal appears at the bottom of the screen.</p>
      <p>Common for mobile interfaces and date pickers.</p>
    </ModalWrapper>
  ),
};

export const WithComplexContent: Story = {
  args: {
    title: 'Complex Modal',
  },
  render: (args) => (
    <ModalWrapper {...args}>
      <div style={{ minWidth: '400px' }}>
        <h3>Complex Content</h3>
        <p>This modal contains more complex content including:</p>
        <ul>
          <li>Lists</li>
          <li>Multiple paragraphs</li>
          <li>Form elements</li>
        </ul>
        <div style={{ marginTop: '1rem' }}>
          <Button text="Save" variant="primary" style={{ marginRight: '0.5rem' }}/>
            
          <Button variant="outline" text="Cancel" />
        </div>
      </div>
    </ModalWrapper>
  ),
};