# Nikaat Wheel Datepicker

## 🎥 Demo

<div>
  <img src="./assets/jalali-demo.gif" alt="Jalali Calendar Demo" width="25%" />
  <img src="./assets/miladi-demo.gif" alt="Gregorian(miladi) Calendar Demo" width="25%" />
</div>

A modern date picker component with a wheel picker interface, supporting both **Jalali (Persian)** and **Gregorian** calendars, with full **RTL support**.

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
npm install @kitcore/wheel-datepicker
```

## Import CSS
```tsx
import '@kitcore/wheel-datepicker/dist/index.css';
```

## Usage

### Basic Usage

```tsx
import { WheelDatePicker } from '@kitcore/wheel-datepicker';
import '@kitcore/wheel-datepicker/dist/index.css';

function App() {
  const [date, setDate] = useState('');

  return (
    <WheelDatePicker
      value={date}
      onChange={setDate}
    />
  );
}
```
### With Custom Year Range

```tsx
<WheelDatePicker
  value={date}
  onChange={setDate}
  minYear={1350}
  maxYear={1410}
  inputProps={{ label: "Custom Year Range" }}
/>
```

## Props
### datepicker props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | string | - | The selected date in 'jYYYY/jMM/jDD' format |
| `onChange` | (date: string) => void | - | Callback when date changes |
| `minYear` | number | jalali(1300) miladi(1500) | Minimum selectable year |
| `maxYear` | number | Current year | Maximum selectable year |
| `calendarType` | miladi - jalali | jalali | Calendar type |
| `visibleCount` | 1, 3, 5 , 7 | 3 | Count of visible item in Calendar 
| `itemHeight` | number | 40px | Height of calendar item |
| `indicatorBorderColor` | string | #e0e0e0 | Indicator top and bottom border color |
| `indicatorBorderWidth` | string | 1px | Indicator top and bottom border width |
| `className` | string | - | Additional CSS class for the component |
| `indicatorClassName` | string | - | Additional CSS class for the component |
| `scrollContainerClassName` | string | - | Additional CSS class for the component |
| `itemClassName` | string | - | Additional CSS class for the component |
| `input` | `InputProps` | - | Props for the input field |
| `modal` | `ModalProps` | - | Props for the modal |
| `button` | `ButtonProps` | - | Props for the confirm button |

## License

MIT
