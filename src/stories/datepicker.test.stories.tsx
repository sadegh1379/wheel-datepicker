import React, { useState } from 'react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import WheelDatePicker from '../components/datepicker/datepicker';
import { DatepickerProps } from '../components/types';

const DatePicker = (props: DatepickerProps) => {
  const [value, setValue] = useState(props.value || '');
  return (
    <div
      style={{
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start'
      }}
    >
      <WheelDatePicker {...props} value={value} onChange={setValue} />
    </div>
  );
};

const meta: Meta<DatepickerProps> = {
  title: 'Test/WheelDatePicker',
  component: WheelDatePicker,
  parameters: {
    layout: 'centered'
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

// ********************************************************************************************
// ********************************* SelectDateAndCheckValue Test *****************************
// ********************************************************************************************
export const SelectDateAndCheckValue: Story = {
  args: {
    calendarType: 'jalali',
    value: '1402/05/12'
  },
  render: args => <DatePicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click on the input to open the modal
    const input = await canvas.getByRole('textbox');
    await userEvent.click(input);

    // Wait for modal to be rendered
    await waitFor(async () => {
      const modal = canvasElement.querySelector('.wd-modal');
      expect(modal).toBeInTheDocument();
    });

    // Wait for wheel pickers to be fully rendered
    let wheelContainers: NodeListOf<Element>;
    await waitFor(async () => {
      wheelContainers = canvasElement.querySelectorAll('.wd-datepicker-wheel-container');
      expect(wheelContainers).toHaveLength(3);
    });

    // Additional wait to ensure wheel pickers are fully interactive
    await new Promise(resolve => setTimeout(resolve, 300));

    // For Jalali calendar, the order is: day, month, year
    const dayWheel = wheelContainers![0];
    const monthWheel = wheelContainers![1];
    const yearWheel = wheelContainers![2];

    // Debug: Log available year options
    const yearItems = yearWheel.querySelectorAll('.wd-wheel-picker-item-clickable');
    console.log(
      'Available years:',
      Array.from(yearItems).map((item: Element) => item.textContent)
    );

    // Select year 1403 by clicking on the year wheel item
    const targetYearItem = Array.from(yearItems).find(
      (item: Element) => item.textContent === '1403'
    );
    if (targetYearItem) {
      console.log('Clicking year:', targetYearItem.textContent);
      await userEvent.click(targetYearItem);
      // Wait longer to ensure the selection is processed
      await new Promise(resolve => setTimeout(resolve, 300));
    } else {
      console.log(
        'Year 1403 not found! Available years:',
        Array.from(yearItems).map((item: Element) => item.textContent)
      );
      throw new Error('Year 1403 not found in wheel picker');
    }

    // Debug: Log available month options
    const monthItems = monthWheel.querySelectorAll('.wd-wheel-picker-item-clickable');
    console.log(
      'Available months:',
      Array.from(monthItems).map((item: Element) => item.textContent)
    );

    // Select month 06 (خرداد) by clicking on the month wheel item
    const targetMonthItem = Array.from(monthItems).find(
      (item: Element) => item.textContent === 'خرداد'
    );
    if (targetMonthItem) {
      console.log('Clicking month:', targetMonthItem.textContent);
      await userEvent.click(targetMonthItem);
      // Wait longer to ensure the selection is processed
      await new Promise(resolve => setTimeout(resolve, 300));
    } else {
      console.log(
        'Month خرداد not found! Available months:',
        Array.from(monthItems).map((item: Element) => item.textContent)
      );
      throw new Error('Month خرداد not found in wheel picker');
    }

    // Debug: Log available day options
    const dayItems = dayWheel.querySelectorAll('.wd-wheel-picker-item-clickable');
    console.log(
      'Available days:',
      Array.from(dayItems).map((item: Element) => item.textContent)
    );

    // Select day 15 by clicking on the day wheel item
    const targetDayItem = Array.from(dayItems).find((item: Element) => item.textContent === '15');
    if (targetDayItem) {
      console.log('Clicking day:', targetDayItem.textContent);
      await userEvent.click(targetDayItem);
      // Wait longer to ensure the selection is processed
      await new Promise(resolve => setTimeout(resolve, 300));
    } else {
      console.log(
        'Day 15 not found! Available days:',
        Array.from(dayItems).map((item: Element) => item.textContent)
      );
      throw new Error('Day 15 not found in wheel picker');
    }

    // Wait longer before clicking confirm button to ensure all selections are processed
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Click the confirm button
    const confirmButton = await canvas.getByRole('button', { name: /تایید/i });
    await userEvent.click(confirmButton);

    // Wait for the modal to close
    await waitFor(
      async () => {
        const modal = canvasElement.querySelector('.wd-modal');
        expect(modal).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // Wait for the modal to close and check the input value
    await waitFor(
      async () => {
        const finalValue = (input as HTMLInputElement).value;
        console.log('Final input value:', finalValue);
        expect(finalValue).toBe('1403/03/15');
      },
      { timeout: 5000 }
    );
  }
};

// ********************************************************************************************
// **************************** SelectGregorianDateAndCheckValue Test *************************
// ********************************************************************************************
export const SelectGregorianDateAndCheckValue: Story = {
  args: {
    calendarType: 'miladi',
    value: '2023/05/12'
  },
  render: args => <DatePicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click on the input to open the modal
    const input = await canvas.getByRole('textbox');
    await userEvent.click(input);

    // Wait for modal to be rendered
    await waitFor(async () => {
      const modal = canvasElement.querySelector('.wd-modal');
      expect(modal).toBeInTheDocument();
    });

    // Wait for wheel pickers to be fully rendered
    let wheelContainers: NodeListOf<Element>;
    await waitFor(async () => {
      wheelContainers = canvasElement.querySelectorAll('.wd-datepicker-wheel-container');
      expect(wheelContainers).toHaveLength(3);
    });

    // Additional wait to ensure wheel pickers are fully interactive
    await new Promise(resolve => setTimeout(resolve, 300));

    // For Gregorian calendar, the order is: year, month, day
    const yearWheel = wheelContainers![0];
    const monthWheel = wheelContainers![1];
    const dayWheel = wheelContainers![2];

    // Debug: Log available year options
    const yearItems = yearWheel.querySelectorAll('.wd-wheel-picker-item-clickable');
    console.log(
      'Available years:',
      Array.from(yearItems).map((item: Element) => item.textContent)
    );

    // Select year 2024 by clicking on the year wheel item
    const targetYearItem = Array.from(yearItems).find(
      (item: Element) => item.textContent === '2024'
    );
    if (targetYearItem) {
      console.log('Clicking year:', targetYearItem.textContent);
      await userEvent.click(targetYearItem);
      // Wait longer to ensure the selection is processed
      await new Promise(resolve => setTimeout(resolve, 300));
    } else {
      console.log(
        'Year 2024 not found! Available years:',
        Array.from(yearItems).map((item: Element) => item.textContent)
      );
      throw new Error('Year 2024 not found in wheel picker');
    }

    // Debug: Log available month options
    const monthItems = monthWheel.querySelectorAll('.wd-wheel-picker-item-clickable');
    console.log(
      'Available months:',
      Array.from(monthItems).map((item: Element) => item.textContent)
    );

    // Select month March by clicking on the month wheel item
    const targetMonthItem = Array.from(monthItems).find(
      (item: Element) => item.textContent === 'March'
    );
    if (targetMonthItem) {
      console.log('Clicking month:', targetMonthItem.textContent);
      await userEvent.click(targetMonthItem);
      // Wait longer to ensure the selection is processed
      await new Promise(resolve => setTimeout(resolve, 300));
    } else {
      console.log(
        'Month March not found! Available months:',
        Array.from(monthItems).map((item: Element) => item.textContent)
      );
      throw new Error('Month March not found in wheel picker');
    }

    // Debug: Log available day options
    const dayItems = dayWheel.querySelectorAll('.wd-wheel-picker-item-clickable');
    console.log(
      'Available days:',
      Array.from(dayItems).map((item: Element) => item.textContent)
    );

    // Select day 15 by clicking on the day wheel item
    const targetDayItem = Array.from(dayItems).find((item: Element) => item.textContent === '15');
    if (targetDayItem) {
      console.log('Clicking day:', targetDayItem.textContent);
      await userEvent.click(targetDayItem);
      // Wait longer to ensure the selection is processed
      await new Promise(resolve => setTimeout(resolve, 300));
    } else {
      console.log(
        'Day 15 not found! Available days:',
        Array.from(dayItems).map((item: Element) => item.textContent)
      );
      throw new Error('Day 15 not found in wheel picker');
    }

    // Wait longer before clicking confirm button to ensure all selections are processed
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Click the confirm button
    const confirmButton = await canvas.getByRole('button', { name: /set/i });
    await userEvent.click(confirmButton);

    // Wait for the modal to close
    await waitFor(
      async () => {
        const modal = canvasElement.querySelector('.wd-modal');
        expect(modal).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // Wait for the modal to close and check the input value
    await waitFor(
      async () => {
        const finalValue = (input as HTMLInputElement).value;
        console.log('Final input value:', finalValue);
        expect(finalValue).toBe('2024/03/15');
      },
      { timeout: 5000 }
    );
  }
};

// ********************************************************************************************
// *********************************** MinAndMaxYearTest **************************************
// ********************************************************************************************
export const MinAndMaxYearTest: Story = {
  args: {
    calendarType: 'jalali',
    minYear: 1400,
    maxYear: 1410,
    value: '1402/05/12'
  },
  render: args => <DatePicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click on the input to open the modal
    const input = await canvas.getByRole('textbox');
    await userEvent.click(input);

    // Wait for modal to be rendered
    await waitFor(async () => {
      const modal = canvasElement.querySelector('.wd-modal');
      expect(modal).toBeInTheDocument();
    });

    // Wait for wheel pickers to be fully rendered
    let wheelContainers: NodeListOf<Element>;
    await waitFor(async () => {
      wheelContainers = canvasElement.querySelectorAll('.wd-datepicker-wheel-container');
      expect(wheelContainers).toHaveLength(3);
    });

    // For Jalali calendar, the order is: day, month, year
    const yearWheel = wheelContainers![2];

    // Debug: Log available year options
    const yearItems = yearWheel.querySelectorAll('.wd-wheel-picker-item-clickable');
    const availableYears = Array.from(yearItems).map((item: Element) => item.textContent);
    console.log('Available years:', availableYears);

    // Check that years are within the specified range
    expect(availableYears).toContain('1400');
    expect(availableYears).toContain('1410');
    expect(availableYears).not.toContain('1399'); // Should not be less than minYear
    expect(availableYears).not.toContain('1411'); // Should not be more than maxYear

    // Verify the range is correct (should have 11 years: 1400 to 1410)
    expect(availableYears.length).toBe(11);
  }
};

// ********************************************************************************************
// ****************************** InputLabelAndPlaceholderTest ********************************
// ********************************************************************************************
export const InputLabelAndPlaceholderTest: Story = {
  args: {
    calendarType: 'jalali',
    input: {
      label: 'تاریخ تولد',
      placeholder: 'تاریخ را انتخاب کنید',
      name: 'birthdate'
    },
    value: '1402/05/12'
  },
  render: args => <DatePicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check for label
    const label = await canvas.getByText('تاریخ تولد');
    expect(label).toBeInTheDocument();

    // Check for input with placeholder
    const input = await canvas.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'تاریخ را انتخاب کنید');
    expect(input).toHaveAttribute('name', 'birthdate');
  }
};

// ********************************************************************************************
// ****************************** ModalTitleAndCustomCloseIconTest ****************************
// ********************************************************************************************
export const ModalTitleAndCustomCloseIconTest: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      title: 'انتخاب تاریخ',
      closeIcon: '✕'
    },
    value: '1402/05/12'
  },
  render: args => <DatePicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click on the input to open the modal
    const input = await canvas.getByRole('textbox');
    await userEvent.click(input);

    // Wait for modal to be rendered
    await waitFor(async () => {
      const modal = canvasElement.querySelector('.wd-modal');
      expect(modal).toBeInTheDocument();
    });

    // Check for modal title
    const title = await canvas.getByText('انتخاب تاریخ');
    expect(title).toBeInTheDocument();

    // Check for custom close icon
    const closeButton = await canvas.getByText('✕');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveClass('wd-modal-close');

    // Test closing modal by clicking close button
    await userEvent.click(closeButton);

    // Wait for modal to close
    await waitFor(
      async () => {
        const modal = canvasElement.querySelector('.wd-modal');
        expect(modal).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  }
};

// ********************************************************************************************
// ****************************** ButtonSizeClassNameAndTextTest ******************************
// ********************************************************************************************
export const ButtonSizeClassNameAndTextTest: Story = {
  args: {
    calendarType: 'jalali',
    button: {
      size: 'large',
      className: 'custom-confirm-button',
      text: 'تایید نهایی'
    },
    value: '1402/05/12'
  },
  render: args => <DatePicker {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click on the input to open the modal
    const input = await canvas.getByRole('textbox');
    await userEvent.click(input);

    // Wait for modal to be rendered
    await waitFor(async () => {
      const modal = canvasElement.querySelector('.wd-modal');
      expect(modal).toBeInTheDocument();
    });

    // Check for custom button text
    const confirmButton = await canvas.getByRole('button', { name: /تایید نهایی/i });
    expect(confirmButton).toBeInTheDocument();

    // Check for custom className
    expect(confirmButton).toHaveClass('custom-confirm-button');

    // Check for size class (assuming the button component adds size classes)
    expect(confirmButton).toHaveClass('wd-button-large');

    // Test clicking the button
    await userEvent.click(confirmButton);

    // Wait for modal to close
    await waitFor(
      async () => {
        const modal = canvasElement.querySelector('.wd-modal');
        expect(modal).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  }
};
