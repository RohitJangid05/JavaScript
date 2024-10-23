Events in JavaScript
    In JavaScript, events are actions or occurrences that happen in the browser, often due to user interactions. Events can be user-generated, like clicking a button or typing in an input field, or they can be triggered by the system, like page load or a network request finishing. JavaScript allows you to respond to these events using event listeners or event handlers.

Different ways to handle events in JavaScript:

    Inline event:
        In this method, the event handling code is directly written within the HTML element as an attribute. It is the simplest but least recommended way because it mixes HTML and JavaScript, which violates the separation of concerns principle.

    Traditional Event Handlers (Property-Based):
        In this approach, event handlers are assigned directly to the DOM element’s properties such as onclick, onmouseover, etc. The problem is that if you assign a new event handler to the same property, the previous one is overwritten.
    
    Modern Event Handlers (addEventListener):
        This is the most flexible and recommended method. You use the addEventListener() method to attach event handlers to DOM elements. This method allows multiple event listeners for the same event on the same element, which makes it more powerful.

Different types of events in JavaScript

    Mouse Events:

        click: Triggered when an element is clicked.
        dblclick: Triggered when an element is double-clicked.
        mousedown: Triggered when a mouse button is pressed down on an element.
        mouseup: Triggered when a mouse button is released.
        mouseover: Triggered when the mouse moves over an element.
        mouseout: Triggered when the mouse moves out of an element.

    Keyboard Events:

        keydown: Triggered when a key is pressed down.
        keyup: Triggered when a key is released.
        keypress: Triggered when a key is pressed (deprecated in some cases).

    Form Events:

        submit: Triggered when a form is submitted.
        change: Triggered when the value of an input, select, or textarea changes.
        focus: Triggered when an element gains focus (e.g., when a user clicks on an input field).
        blur: Triggered when an element loses focus.

    Window Events:

        load: Triggered when the entire page (including images and external resources) has fully loaded.
        resize: Triggered when the window is resized.
        scroll: Triggered when the user scrolls in the document.

    Document Events:

        DOMContentLoaded: Triggered when the HTML document has been fully loaded and parsed, without waiting for stylesheets and images.

    Touch Events (for mobile devices):

        touchstart: Triggered when a user touches the screen.
        touchend: Triggered when a user stops touching the screen.
        touchmove: Triggered when a user moves their finger across the screen.