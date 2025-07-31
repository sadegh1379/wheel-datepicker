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
  <img src="./assets/jalali-demo.gif" alt="Jalali Calendar Demo" width="25%" />
  <img src="./assets/miladi-demo.gif" alt="Gregorian(miladi) Calendar Demo" width="25%" />
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

### modal props

| Prop        | Type           | Default | Description                            |
| ----------- | -------------- | ------- | -------------------------------------- |
| `title`     | string         | -       | Modal title                            |
| `placement` | bottom, center | bottom  | Open modal placement                   |
| `closeIcon` | reactNode      | '×'     | modal close icon                       |
| `className` | string         | -       | Additional CSS class for the component |

### input props

| Prop          | Type    | Default | Description                            |
| ------------- | ------- | ------- | -------------------------------------- |
| `label`       | string  | -       | Input label                            |
| `placeholder` | string  | -       | Input placeholder                      |
| `disabled`    | boolean | false   | Disable Input                          |
| `name`        | string  | -       | Input name                             |
| `error`       | string  | -       | Input error helper text                |
| `className`   | string  | -       | Additional CSS class for the component |

### button props

| Prop        | Type                 | Default                    | Description                            |
| ----------- | -------------------- | -------------------------- | -------------------------------------- |
| `size`      | small, medium, large | medium                     | Button size                            |
| `text`      | string               | jalali(تایید), miladi(set) | Button text content                    |
| `className` | string               | -                          | Additional CSS class for the component |

## License

MIT

## buy me a coffee

<a href="https://www.coffeebede.com/sadegh79"><img class="img-fluid" width="25%" src="https://coffeebede.ir/DashboardTemplateV2/app-assets/images/banner/default-yellow.svg" /></a>
