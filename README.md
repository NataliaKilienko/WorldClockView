# WorldClockView

WorldClockView is a web application that enables users to create a personalized dashboard of clocks for different time zones worldwide. It provides a simple interface to add, view, and manage clocks, making it easy to keep track of the time across various regions.

## Features

- **Add Clocks**: Easily add clocks for any time zone using the input field and add button.
- **Display Time**: View the current time in the selected time zone.
- **Display Date and Time**: Option to view both the date and time.
- **Remove Clocks**: Quickly remove any clock from the dashboard.
- **Responsive Design**: The layout adapts seamlessly to various screen sizes, providing a consistent experience on mobile and desktop devices.

## Technologies Used

- **HTML**: Defines the structure of the web pages.
- **CSS/SCSS**: Provides styling and layout control, using SCSS for modular and maintainable stylesheets.
- **JavaScript**: Handles core functionalities, including user interactions and time management.

## Code Structure

The project is structured to maintain clarity and separation of concerns:

- **HTML Structure**: The main `index.html` file includes placeholders for dynamically inserted content like clocks. It also references external stylesheets and scripts.
  
- **CSS/SCSS**: Styles are defined using SCSS, allowing for nested rules, variables, and mixins. The styles are compiled into CSS for browser compatibility.

- **JavaScript**: The functionality is divided into classes:

  - **ClockDisplay**: Manages the visual representation of each clock, including time updates and timezone display.
  
  - **ClockControls**: Handles user interactions such as showing the current time, displaying the date and time, and deleting clocks. It also manages the timing updates.
  
  - **WorldClock**: Combines `ClockDisplay` and `ClockControls` to provide a complete clock widget. This class is responsible for initializing and rendering the clock on the page.

### Example Usage

1. **Adding a Clock**: Users enter a time zone (e.g., `Europe/Kiev`) in the input field and click "Add Clock." This action creates a new clock instance, which is displayed on the dashboard.

2. **Interacting with Clocks**: Each clock has buttons to:
   - Display only the current time.
   - Display both the date and time.
   - Remove the clock from the dashboard.

3. **Responsive Design**: The layout adjusts based on screen size, ensuring that clocks are presented in a grid format that reflows for optimal viewing on any device.
