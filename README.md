<br/>
<div align="center">
<img src="./assets/buildix.svg" alt="Buildix" />
<h3 align="center">@buildix/wheel-datepicker</h3>
<img alt="Npm download" src="https://img.shields.io/npm/dw/@buildix/wheel-datepicker?style=flat&color=blue">
<img alt="Package stars" src="https://img.shields.io/github/stars/sadegh1379/wheel-datepicker?style=flat&color=yellow">
<img alt="GitHub License" src="https://img.shields.io/npm/l/@buildix/wheel-datepicker?color=">
<img alt="Version" src="https://img.shields.io/npm/v/@buildix/wheel-datepicker?style=flat&color=orange">

<br/>
<p align="center">
A modern date picker component with a wheel picker interface, supporting both **Jalali (Persian)**
and **Gregorian (Mialdi)** calendars, with full **RTL support**.
<br/>
<br/>
<a href="https://wheel-datepicker.vercel.app/" target="_blank" rel="noopener noreferrer">
  <strong>View full documentation on Storybook »</strong>
</a>
<br/>
<br/>
</p>
</div>

## 🎥 Demo

<div>
  <img src="https://i.postimg.cc/nzc8t5p5/jalali-demo.gif" alt="Jalali Calendar Demo" width="23%" />
  <img src="https://i.postimg.cc/pdBN4xbz/miladi-demo.gif" alt="Gregorian(miladi) Calendar Demo" width="23%" />
  <img src="https://i.postimg.cc/0NvRVj39/miladi-center-demo.gif" alt="Gregorian(miladi) Calendar Demo" width="23%" />
  <img src="https://i.postimg.cc/MpVJ0V9s/jalali-center-demo.gif" alt="Gregorian(miladi) Calendar Demo" width="23%" />
</div>

## ✨ Features

- ✅ Support for both **Jalali (Persian)** and **Gregorian (Miladi)** calendars
- 🎡 Smooth and intuitive **wheel-style date selection**
- 🌐 Full **RTL (Right-to-Left)** support for Persian/Arabic languages
- 🖼 **Modal-based interface** with customizable open direction:
  - Open from **center** or **bottom** of the screen
- 🔧 Customizable **year range**
- 🎨 Custom input, button, and modal props for full UI control
- 📱 **Responsive** and mobile-friendly design

## Installation

```bash
npm install @buildix/wheel-datepicker
```

## Import CSS

```tsx
import '@buildix/wheel-datepicker/dist/index.css';
```

## Usage

### Basic Usage

```tsx
import { WheelDatePicker } from '@buildix/wheel-datepicker';
import '@buildix/wheel-datepicker/dist/index.css';

function App() {
  const [date, setDate] = useState('');

  return <WheelDatePicker value={date} onChange={setDate} />;
}
```

### With Custom Year Range

```tsx
<WheelDatePicker
  value={date}
  onChange={setDate}
  minYear={1350}
  maxYear={1410}
  inputProps={{ label: 'Custom Year Range' }}
/>
```

## Props

### datepicker props

| Prop                       | Type                   | Default                   | Description                                             |
| -------------------------- | ---------------------- | ------------------------- | ------------------------------------------------------- |
| `value`                    | string                 | -                         | The selected date in jYYYY/jMM/jDD or YYYY/MM/DD format |
| `onChange`                 | (date: string) => void | -                         | Callback when date changes                              |
| `minYear`                  | number                 | jalali(1300) miladi(1500) | Minimum selectable year                                 |
| `maxYear`                  | number                 | Current year              | Maximum selectable year                                 |
| `calendarType`             | miladi - jalali        | jalali                    | Calendar type                                           |
| `visibleCount`             | 1, 3, 5 , 7            | 3                         | Count of visible item in Calendar                       |
| `itemHeight`               | number                 | 40px                      | Height of calendar item                                 |
| `indicatorBorderColor`     | string                 | #e0e0e0                   | Indicator top and bottom border color                   |
| `indicatorBorderWidth`     | string                 | 1px                       | Indicator top and bottom border width                   |
| `className`                | string                 | -                         | Additional CSS class for the component                  |
| `indicatorClassName`       | string                 | -                         | Additional CSS class for the component                  |
| `scrollContainerClassName` | string                 | -                         | Additional CSS class for the component                  |
| `itemClassName`            | string                 | -                         | Additional CSS class for the component                  |
| `input`                    | `InputProps`           | -                         | Props for the input field                               |
| `modal`                    | `ModalProps`           | -                         | Props for the modal                                     |
| `button`                   | `ButtonProps`          | -                         | Props for the confirm button                            |

### Modal Props

| Prop        | Type           | Default | Description                            |
| ----------- | -------------- | ------- | -------------------------------------- |
| `title`     | string         | -       | Modal title                            |
| `placement` | bottom, center | bottom  | Open modal placement                   |
| `closeIcon` | reactNode      | '×'     | modal close icon                       |
| `className` | string         | -       | Additional CSS class for the component |

### Input Props

| Prop          | Type    | Default | Description                            |
| ------------- | ------- | ------- | -------------------------------------- |
| `label`       | string  | -       | Input label                            |
| `placeholder` | string  | -       | Input placeholder                      |
| `disabled`    | boolean | false   | Disable Input                          |
| `name`        | string  | -       | Input name                             |
| `error`       | string  | -       | Input error helper text                |
| `className`   | string  | -       | Additional CSS class for the component |

### Button Props

| Prop        | Type                 | Default                    | Description                            |
| ----------- | -------------------- | -------------------------- | -------------------------------------- |
| `size`      | small, medium, large | medium                     | Button size                            |
| `text`      | string               | jalali(تایید), miladi(set) | Button text content                    |
| `className` | string               | -                          | Additional CSS class for the component |

## 🎨 Customization via CSS Variables

```css
/* Datepicker variables */
--wd-datepicker-gap: 0.5rem;
--wd-datepicker-padding-bottom: 0;
--wd-datepicker-text-align-rtl: right;

/* Modal overlay variables */
--wd-modal-overlay-bg: rgba(0, 0, 0, 0.5);
--wd-modal-overlay-z-index: 1000;
--wd-modal-overlay-padding: 1rem;

/* Modal container variables */
--wd-modal-bg: #ffffff;
--wd-modal-border-radius: 0.5rem;
--wd-modal-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--wd-modal-max-width: 40vw;
--wd-modal-max-height: 90vh;
--wd-modal-animation-duration: 0.2s;

/* Modal bottom variant variables */
--wd-modal-bottom-margin: 10px;
--wd-modal-bottom-border-radius: 16px;
--wd-modal-bottom-shadow: 0 -2px 16px rgba(0, 0, 0, 0.2);
--wd-modal-bottom-animation-duration: 0.3s;
--wd-modal-bottom-z-index: 1050;

/* Modal header variables */
--wd-modal-header-margin: 15px;
--wd-modal-header-border-color: #e5e7eb;

/* Modal title variables */
--wd-modal-title-font-size: 1.125rem;
--wd-modal-title-font-weight: 600;
--wd-modal-title-color: #111827;

/* Modal close button variables */
--wd-modal-close-font-size: 1.5rem;
--wd-modal-close-color: #6b7280;
--wd-modal-close-padding: 0.25rem;
--wd-modal-close-border-radius: 0.25rem;
--wd-modal-close-transition-duration: 0.15s;
--wd-modal-close-min-width: 2rem;
--wd-modal-close-min-height: 2rem;

/* Modal content variables */
--wd-modal-content-padding: 15px;
--wd-modal-content-max-height: calc(90vh - 120px);

/* input Colors */
--wd-input-border-color: #d1d5db;
--wd-input-border-error-color: #ef4444;
--wd-input-background-color: #ffffff;
--wd-input-background-disabled-color: #f9fafb;
--wd-input-text-color: #111827;
--wd-input-text-disabled-color: #6b7280;
--wd-input-label-color: #374151;
--wd-input-error-text-color: #ef4444;

/* input Spacing */
--wd-input-gap: 0.3rem;
--wd-input-padding: 0.75rem;
--wd-input-border-radius: 0.375rem;
--wd-input-error-margin-top: 0.1rem;

/* input Typography */
--wd-input-font-size: 0.875rem;
--wd-input-error-font-size: 0.75rem;
--wd-input-font-weight: 500;

/* input Effects */
--wd-input-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
--wd-input-error-focus-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
--wd-input-border-width: 1px;

/* Button base properties */
--wd-button-border-radius: 0.375rem;
--wd-button-font-weight: 500;
--wd-button-transition: all 0.15s ease-in-out;

/* Button sizes */
--wd-button-small-padding: 0.5rem 1rem;
--wd-button-small-font-size: 0.75rem;
--wd-button-medium-padding: 0.75rem 1.5rem;
--wd-button-medium-font-size: 0.875rem;
--wd-button-large-padding: 1rem 2rem;
--wd-button-large-font-size: 1rem;

/* Button colors */
--wd-button-secondary-hover-bg: #4b5563;
--wd-button-secondary-active-bg: #374151;
```

## License

MIT

## buy me a coffee

<a href="https://www.coffeebede.com/sadegh79"><img class="img-fluid" width="25%" src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg" /></a>
