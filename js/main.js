class ClockDisplay {
    constructor(timezone) {
        this.timezone = timezone; // Store the timezone
        this.clockElement = document.createElement('div');
        this.clockElement.classList.add('clock');

        // Element for displaying the timezone
        this.timezoneLabel = document.createElement('div');
        this.timezoneLabel.classList.add('timezone');
        this.timezoneLabel.textContent = timezone; // Display the timezone

        // Element for displaying the current date and time
        this.dateTimeDisplay = document.createElement('div');
        this.dateTimeDisplay.classList.add('date-time');
        this.dateTimeDisplay.textContent = 'Click a button to display time';

        // Add elements to the clock container
        this.clockElement.appendChild(this.timezoneLabel);
        this.clockElement.appendChild(this.dateTimeDisplay);
    }

    // Method to update the displayed text
    setTime(text) {
        this.dateTimeDisplay.textContent = text;
    }

    // Method to get the HTML element of the clock
    getElement() {
        return this.clockElement;
    }
}

class ClockControls {
    constructor(clock, timezone) {
        this.clock = clock;
        this.timezone = timezone;
        this.timer = null; // Timer for updating time
    }

    // Create a button to show time
    createTimeButton() {
        const button = document.createElement('button');
        button.textContent = 'Show Time';
        button.addEventListener('click', () => {
            clearInterval(this.timer); // Stop the previous timer
            this.updateTime(); // Update the time
            this.timer = setInterval(() => this.updateTime(), 1000); // Set the timer
        });
        return button;
    }

    // Create a button to show date and time
    createDateTimeButton() {
        const button = document.createElement('button');
        button.textContent = 'Show Date & Time';
        button.addEventListener('click', () => {
            clearInterval(this.timer); // Stop the previous timer
            this.updateDateTime(); // Update the date and time
            this.timer = setInterval(() => this.updateDateTime(), 1000); // Set the timer
        });
        return button;
    }

    // Create a button to delete the clock
    createDeleteButton() {
        const button = document.createElement('button');
        button.textContent = 'Delete Clock';
        button.addEventListener('click', () => {
            clearInterval(this.timer); // Stop the timer
            this.clock.getElement().remove(); // Remove the clock from the DOM
        });
        return button;
    }

    // Update only the time
    updateTime() {
        const time = new Date().toLocaleTimeString("en-US", { timeZone: this.timezone });
        this.clock.setTime(time);
    }

    // Update the date and time
    updateDateTime() {
        const dateTime = new Date().toLocaleString("en-US", { timeZone: this.timezone });
        this.clock.setTime(dateTime);
    }
}

class WorldClock {
    constructor(timezone) {
        this.timezone = timezone;
        this.clockDisplay = new ClockDisplay(timezone); // Create the clock display
        this.clockControls = new ClockControls(this.clockDisplay, timezone); // Create the controls
        this.render(); // Render the clock on the page
    }

    render() {
        const clocksContainer = document.querySelector('#clocksContainer');
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');

        // Add buttons to the buttons container
        buttonsContainer.appendChild(this.clockControls.createTimeButton());
        buttonsContainer.appendChild(this.clockControls.createDateTimeButton());
        buttonsContainer.appendChild(this.clockControls.createDeleteButton());

        // Add the clock display and buttons to the main container
        this.clockDisplay.getElement().appendChild(buttonsContainer);
        clocksContainer.appendChild(this.clockDisplay.getElement());
    }
}

function main() {
    // Add event listener to the "Add Clock" button
    document.querySelector('#addClockBtn').addEventListener('click', () => {
        const timezone = document.querySelector('#timezone').value.trim();
        if (timezone) {
            new WorldClock(timezone);
        } else {
            alert('Please enter a valid timezone.');
        }
    });
}

main();
