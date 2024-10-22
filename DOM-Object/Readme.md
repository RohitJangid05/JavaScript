Document Object Model
    The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node is an element, attribute, or piece of text. This allows programming languages like JavaScript to interact with, manipulate, and update the content, structure, and style of a webpage dynamically. it is also DOM API which JavaScript uses as an object.

    When you are trying to select or change the element using browser developer tool. The content you have changed using JavaScript, your are directly manuplating the DOM object memory, since the DOM is live representation of the document, the changes made you made to the DOM object are immeditly refelected in the web page.
    Tough the changes made by you are temporary and exist only for the current session. When you refresh the page, the browser reloads the original document .

difference between innerHTML, outerHTML, innerText and textContent

    1. innerHTML
        Definition: Retrieves or sets the HTML content inside an element, including HTML tags.
        Example: If the element has child tags, innerHTML will return both the text and the tags.

    2. outerHTML
        Definition: Retrieves or sets the full HTML content of the element itself, including the element's tag and its content.
        Example: It returns the element's start tag, content, and end tag.

    3. innerText
        Definition: Retrieves or sets the text inside an element, ignoring any HTML tags. It will display what users would see in a browser.
        Example: It doesn't include hidden or non-rendered content.

    4. textContent
        Definition: Retrieves or sets the text inside an element, including all text within child elements, but without formatting or HTML tags. Unlike innerText, it includes text from hidden elements.
        Example: It captures all text in the DOM, whether visible or not.

--DOM Navigation
    DOM Navigation refers to traversing the nodes and elements within the Document Object Model (DOM) tree to access or manipulate various parts of an HTML document. The DOM represents the structure of a webpage as a tree of nodes (elements, text, attributes, etc.), and DOM navigation helps you move around that structure.

    eg: <h1>Hello World!</h1>
        innerHTML will return Hello World!
        outerHTML will return <h1>Hello World!</h1>

    document/window.document:
        return the complete document node list

    document.body:
        return the complete node list of the body

    document.head;
        return the complete nodeList/data of the HTML head

Navagating through the body child

    doucment.body.childNodes:
        return the complete nodeList of the body

    document.body.children:
        return the complete nodeList of the HTML collection

Navagating/fetching the element sibling

    nextElementSibling
        it will return the next siblling of the element

    previousElementSibling:
        it will return the previous sibling of the element

--DOM Searching
    DOM searching refers to the process of finding or selecting elements in the Document Object Model (DOM) using JavaScript. It allows you to access specific HTML elements or groups of elements so that you can manipulate them.

    getElementById(id): 
        Finds an element by its unique ID.
    
    getElementsByClassName(className): 
        Finds all elements with a specific class name.
    
    getElementsByTagName(tagName): 
        Finds all elements with a specific tag name (e.g., div, p).
    
    querySelector(cssSelector): 
        Finds the first element that matches a CSS selector.
    
    querySelectorAll(cssSelector): 
        Finds all elements that match a CSS selector.

    getElementsByTagName(elementName):
        finds the element based of its name

--CRUD in DOM

    createElement():
        method in JavaScript is used to create a new HTML element in the DOM (Document Object Model). This method does not automatically add the element to the page; it only creates it.
    
     appendChild()
        This method adds the newly created element as the last child of a specified parent element.

     insertBefore()
        This method inserts the newly created element before a specified existing child element.
