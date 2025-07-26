# React Toast Popup

React Toast Popup is a simple and customizable toast notification component for React applications.

![Frontend_System_Design_Questions__Toast_Component___HLD_LLD](https://github.com/piyush-eon/react-toast-popup/assets/51760520/be023ecf-39fb-4cb0-beeb-98519050ba99)

## Installation

You can install React Toast Popup via npm:

```jsx
npm install react-toast-popup
```

## Usage

To use React Toast Popup in your React application, follow these steps:

Import the useNotification hook and necessary styles in your component:

```jsx
import useNotification from "react-toast-popup";
```

Initialize the useNotification hook with your preferred position:

```jsx
const { NotificationComponent, triggerNotification } =
  useNotification("top-left");
```

#### Postions

- "bottom-left"
- "bottom-right"
- "top-left"
- "top-right"

Use NotificationComponent in your JSX to display notifications:

```jsx
return (
  <div className="App">
    {NotificationComponent}
    {/* Your other JSX content */}
  </div>
);
```

Trigger notifications using the triggerNotification function:

```jsx
triggerNotification({
  type: "success",
  message: "This is a success message!",
  duration: 3000,
});
```

#### Animations

You can specify an animation type for the notifications. The available animations are:

- "fade"
- "pop"
- "slide"

```jsx
triggerNotification({
  type: "success",
  message: "This is a success message with a pop animation!",
  duration: 3000,
  animation: "pop",
});
```

## API

```jsx
useNotification(position: PositionType)
```

This hook returns an object with the following properties:

- `NotificationComponent`: React element representing the notification container.
- `triggerNotification(notificationProps: NotificationProps)`: Function to trigger a notification with the specified properties.

`NotificationProps`
The triggerNotification function accepts an object of type NotificationProps, which includes:

- type: Type of the notification (success, info, warning, error).
- message: Message to display in the notification.
- duration: Duration in milliseconds for which the notification should be displayed.
- animation (optional): Animation type for the notification (fade, pop, slide).

## Example

Here's a basic example of how to use React Toast Popup:

```jsx
import React from "react";
import useNotification from "react-toast-popup";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-left");

  const handleButtonClick = () => {
    triggerNotification({
      type: "success",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  return (
    <div className="App">
      {NotificationComponent}
      <h1>Toast Component</h1>
      <button onClick={handleButtonClick}>Show Success</button>
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
