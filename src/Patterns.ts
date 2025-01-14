const patterns = [
    {
      name: "Accordion (Sections With Show/Hide Functionality)",
      description: "An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-accordion.svg"
    },
    {
      name: "Alert",
      description: "An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/alert/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-alert.svg"
    },
    {
      name: "Alert and Message Dialogs",
      description: "An alert dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-alertdialog.svg"
    },
    {
      name: "Breadcrumb",
      description: "A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-breadcrumb.svg"
    },
    {
      name: "Button",
      description: "A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-button.svg"
    },
    {
      name: "Carousel (Slide Show or Image Rotator)",
      description: "A carousel presents a set of items, referred to as slides, by sequentially displaying a subset of one or more slides.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/carousel/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-carousel.svg"
    },
    {
      name: "Checkbox",
      description: "WAI-ARIA supports two types of checkbox widgets: dual-state checkboxes toggle between two choices -- checked and not checked -- and tri-state checkboxes, which allow an additional third state known as partially checked.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-checkbox.svg"
    },
    {
      name: "Combobox",
      description: "A combobox is an input widget that has an associated popup.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-combobox.svg"
    },
    {
      name: "Dialog (Modal)",
      description: "A dialog is a window overlaid on either the primary window or another dialog window.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-dialog-modal.svg"
    },
    {
      name: "Disclosure (Show/Hide)",
      description: "A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-disclosure.svg"
    },
    {
      name: "Feed",
      description: "A feed is a section of a page that automatically loads new sections of content as the user scrolls.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/feed/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-feed.svg"
    },
    {
      name: "Grid (Interactive Tabular Data and Layout Containers)",
      description: "A grid widget is a container that enables users to navigate the information or interactive elements it contains using directional navigation keys, such as arrow keys, Home, and End.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/grid/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-grid.svg"
    },
    {
      name: "Landmarks",
      description: "Landmarks are a set of eight roles that identify the major sections of a page.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-landmarks.svg"
    },
    {
      name: "Link",
      description: "A link widget provides an interactive reference to a resource.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/link/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-link.svg"
    },
    {
      name: "Listbox",
      description: "A listbox widget presents a list of options and allows a user to select one or more of them.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-listbox.svg"
    },
    {
      name: "Menu and Menubar",
      description: "A menu is a widget that offers a list of choices to the user, such as a set of actions or functions.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-menubar.svg"
    },
    {
      name: "Menu Button",
      description: "A menu button is a button that opens a menu as described in the Menu and Menubar Pattern.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-menu-button.svg"
    },
    {
      name: "Meter",
      description: "A meter is a graphical display of a numeric value that varies within a defined range.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-meter.svg"
    },
    {
      name: "Radio Group",
      description: "A radio group is a set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-radio.svg"
    },
    {
      name: "Slider",
      description: "A slider is an input where the user selects a value from within a given range.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/slider/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-slider.svg"
    },
    {
      name: "Slider (Multi-Thumb)",
      description: "A multi-thumb slider implements the Slider Pattern but includes two or more thumbs, often on a single rail.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-slider-multithumb.svg"
    },
    {
      name: "Spinbutton",
      description: "A spinbutton is an input widget that restricts its value to a set or range of discrete values.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-spinbutton.svg"
    },
    {
      name: "Switch",
      description: "A switch is an input widget that allows users to choose one of two values: on or off.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/switch/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-switch.svg"
    },
    {
      name: "Table",
      description: "Like an HTML table element, a WAI-ARIA table is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/table/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-table.svg"
    },
    {
      name: "Tabs",
      description: "Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-tabs.svg"
    },
    {
      name: "Toolbar",
      description: "A toolbar is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-toolbar.svg"
    },
    {
      name: "Tooltip",
      description: "A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-tooltip.svg"
    },
    {
      name: "Tree View",
      description: "A tree view widget presents a hierarchical list.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-treeview.svg"
    },
    {
      name: "Treegrid",
      description: "A treegrid widget presents a hierarchical data grid consisting of tabular information that is editable or interactive.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-treegrid.svg"
    },
    {
      name: "Window Splitter",
      description: "A window splitter is a moveable separator between two sections, or panes, of a window that enables users to change the relative size of the panes.",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/",
      iconUrl: "https://www.w3.org/WAI/content-images/wai-aria-practices/images/pattern-windowsplitter.svg"
    }
  ];

  export default patterns;