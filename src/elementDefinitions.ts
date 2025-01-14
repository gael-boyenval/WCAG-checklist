import { ElementsCheckList, GeneralCheckList, CheckListItem, techniquesAndTutorials } from "./checkList";

export interface ElementDefinition {
  id: string;
  label: string;
  techniquesAndTutorials?: {
    url: string;
    title: string;
  }[];
  WCAGTechniques?: string[]
}

export interface ElementSpecificity {
  id: string;
  label: string;
  wcagCriteria: string[];
  checks?: CheckListItem[];
}

export interface SpecificityDefinition {
  [key: string]: ElementSpecificity[];
}

export const commonElements: ElementDefinition[] = [
  {
    id: 'structure',
    label: 'multiple sections, zones group of elements',
    techniquesAndTutorials: [
      techniquesAndTutorials.W3CPageStructure,
    ],
    WCAGTechniques: [
      "ARIA11", // Using ARIA landmarks to identify regions of a page
      "H69", // Providing heading elements at the beginning of each section of content
      "H48", // Using ol, ul and dl for lists or groups of links
      "G115", // Using semantic elements to mark up structure
      "G61", // Presenting repeated components in the same relative order each time they appear
      "G141" // Organizing a page using headings
    ]
  },
  {
    id: 'images',
    label: 'Images',
    techniquesAndTutorials: [
      techniquesAndTutorials.W3CImages,
      techniquesAndTutorials.accessibleSVG,
    ],
    WCAGTechniques: [
      "G94", // Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content
      "G95", // Providing short text alternatives that provide a brief description of the non-text content
      "H2", // Combining adjacent image and text links for the same resource
      "H24", // Providing text alternatives for the area elements of image maps
      "H30", // Providing link text that describes the purpose of a link for anchor elements
      "H35", // Providing text alternatives on applet elements
      "H36", // Using alt attributes on images used as submit buttons
      "H37", // Using alt attributes on img elements
      "H45", // Using longdesc
      "H67", // Using null alt text and no title attribute on img elements for images that AT should ignore
      "ARIA6", // Using aria-label to provide labels for objects
      "ARIA10", // Using aria-labelledby to provide a text alternative for non-text content
      "G196", // Using a text alternative on one item within a group of images that describes all items in the group
      "G203" // Using a static text alternative to describe a talking head video
    ]
  },
  {
    id: 'forms',
    label: 'Form Elements',
    techniquesAndTutorials: [
      techniquesAndTutorials.W3CForms,
    ],
    WCAGTechniques: [
      "ARIA1", // Using aria-describedby for descriptive labels
      "ARIA2", // Identifying required fields
      "ARIA4", // Using WAI-ARIA role
      "ARIA5", // Using WAI-ARIA states and properties
      "G115", // Using semantic elements
      "G162", // Positioning labels to maximize predictability of relationships
      "G167", // Using adjacent form labels for layout
      "G184", // Providing text instructions at the beginning of a form
      "G185", // Linking to all pages from the home page
      "G198", // Providing a way to turn time limit off
      "G199", // Providing success feedback
      "H32", // Providing submit buttons
      "H44", // Using label elements
      "H65", // Using title attribute when label cannot be used
      "H71", // Using fieldset and legend
      "H84", // Using button with select
      "H85", // Using OPTGROUP to group options
      "H90", // Indicating required form controls
      "SCR18", // Client-side validation and alert
      "SCR32" // Client-side validation with DOM error text
    ]
  },
  {
    id: 'controls',
    label: 'Buttons, links, or any other clickable element',
    techniquesAndTutorials: [
      techniquesAndTutorials.keyboardNavigation,
    ],
    WCAGTechniques: [
      "ARIA4", // Using WAI-ARIA role to expose the role
      "ARIA5", // Using WAI-ARIA state and properties
      "ARIA6", // Using aria-label for labels
      "ARIA7", // Using aria-labelledby for link purpose
      "ARIA8", // Using aria-label for link purpose
      "G91", // Providing link text that describes purpose
      "G200", // Opening new windows only when necessary
      "G201", // Warning when opening new windows
      "H30", // Providing link text describing purpose
      "H77", // Link purpose from list item
      "H78", // Link purpose from paragraph
      "H79", // Link purpose from table cell and headers
      "H80", // Link purpose from heading
      "H81", // Link purpose from nested list
      "H83", // Using target attribute to open new window on request
      "SCR2", // Redundant keyboard and mouse handlers
      "SCR20", // Using keyboard and device-specific functions
      "SCR35", // Making actions keyboard accessible
      "SCR37" // Creating custom dialogs device independently
    ]
  },
  {
    id: 'tables',
    label: 'Tables',
    techniquesAndTutorials: [
      techniquesAndTutorials.W3CTables,
    ],
    WCAGTechniques: [
      "ARIA1", // Using aria-describedby for descriptive labels
      "H39", // Using caption elements to associate data table captions
      "H43", // Using id and headers attributes
      "H51", // Using table markup for tabular info
      "H63", // Using scope attribute
      "H73", // Using summary attribute for overview
      "H79", // Link purpose from table cell and headers
      "G115", // Using semantic elements to mark up structure
      "G140" // Separating information and structure from presentation
    ]
  },
  {
    id: 'headings',
    label: 'Headings',
    techniquesAndTutorials: [
      techniquesAndTutorials.W3CHeadings,
    ],
    WCAGTechniques: [
      "ARIA1", // Using aria-describedby for descriptive labels
      "ARIA6", // Using aria-label for labels
      "ARIA11", // Using ARIA landmarks to identify regions
      "G115", // Using semantic elements to mark up structure
      "G130", // Providing descriptive headings
      "G141", // Organizing a page using headings
      "H42", // Using h1-h6 to identify headings
      "H69", // Providing heading elements at beginning of sections
      "H80" // Link purpose from heading
    ]
  },
  {
    id: 'lists',
    label: 'Lists',
    WCAGTechniques: [
      "ARIA1", // Using aria-describedby for descriptive labels
      "ARIA4", // Using WAI-ARIA role to expose the role
      "G115", // Using semantic elements to mark up structure
      "G140", // Separating information and structure from presentation
      "H48", // Using ol, ul and dl for lists
      "H77", // Link purpose from list item
      "H81" // Link purpose from nested list
    ]
  },
  {
    id: 'text_content',
    label: 'Text Content',
    WCAGTechniques: [
      "ARIA1", // Using aria-describedby for descriptive labels
      "ARIA4", // Using WAI-ARIA role to expose the role 
      "ARIA5", // Using WAI-ARIA state and properties
      "ARIA6", // Using aria-label for labels
      "G115", // Using semantic elements to mark up structure
      "G140", // Separating information and structure from presentation
      "G197", // Using labels, names, and text alternatives consistently
      "H49", // Using semantic markup for emphasized text
      "H54", // Using dfn element for defining instance
      "H56", // Using dir attribute for directional text
      "H57", // Using language attributes on html
      "H58", // Using language attributes to identify changes
      "G208" // Including visible label text in accessible name
    ]
  },
  {
    id: 'video',
    label: 'Video',
    WCAGTechniques: [
      "ARIA10", // Using aria-labelledby for non-text content
      "G68", // Providing detailed description for complex content
      "G69", // Providing alternative media
      "G78", // Providing captions
      "G81", // Providing synchronized text transcript
      "G87", // Providing closed captions
      "G93", // Providing open captions
      "G159", // Providing alternative text for background video
      "G166", // Providing audio that describes video
      "G203", // Using static text alternative for talking head video
      "H96", // Using video element
    ]
  },
  {
    id: 'audio',
    label: 'Audio',
    WCAGTechniques: [
      "G68", // Providing detailed description for complex content
      "G69", // Providing alternative media
      "G78", // Providing captions
      "G81", // Providing synchronized text transcript
      "G158", // Providing alternative for audio-only content
      "G159", // Providing alternative text for background audio
      "G166", // Providing audio that describes video
      "H53", // Using object element body
      "H96" // Using video element
    ]
  },
  {
    id: 'animation',
    label: 'Animation',
    WCAGTechniques: [
      "ARIA4", // Using WAI-ARIA role to expose the role
      "ARIA5", // Using WAI-ARIA state and properties
      "G191", // Providing a link to reload without blinking content
      "G198", // Providing way to turn time limit off
      "SCR22", // Using scripts to control blinking and stop it
      "SCR33", // Using script to scroll content with user control
      "SCR36", // Allowing users to display moving text in static window
    ]
  },
];

export const specificities: SpecificityDefinition = {
  structure: [
    {
      id: 'structure',
      label: 'Contains multiple sections, zones, or groups of elements',
      wcagCriteria: [
        '1.3.1',  // Info and Relationships
        '2.4.1',  // Bypass Blocks
        '2.4.6',  // Headings and Labels
        '2.4.10', // Section Headings
        '4.1.2',  // Name, Role, Value
      ],
      checks: [
        ElementsCheckList.structure.checkList.useSectionElements,
      ]
    }
  ],
  images: [
    {
      id: 'icon',
      label: 'the image is an icon',
      wcagCriteria: [
        '1.1.1',  // Non-text Content
        '4.1.2',  // Name, Role, Value
        '1.4.11'  // Non-text Contrast
      ],
      checks: [
        ElementsCheckList.images.checkList.altAttributePresence,
        ElementsCheckList.images.checkList.titleForSVG,
      ]
    },
    {
      id: 'informative',
      label: 'the image is an informative image',
      wcagCriteria: [
        '1.1.1',  // Non-text Content
        '1.4.5',  // Images of Text
        '1.4.11'  // Non-text Contrast
      ],
      checks: [
        ElementsCheckList.images.checkList.altAttributePresence,
        ElementsCheckList.images.checkList.imageTextInAlt,
      ]
    },
    {
      id: 'decorative',
      label: 'the image is decorative, like a background image, a pattern, texture, or ornament',
      wcagCriteria: [
        '1.1.1',  // Non-text Content
        '1.4.11'  // Non-text Contrast (if visible)
      ],
      checks: [
        ElementsCheckList.images.checkList.decorativeImageAltEmpty,
      ]
    },
    {
      id: 'complex',
      label: 'the image is a complex image like a graph or chart',
      wcagCriteria: [
        '1.1.1',  // Non-text Content
        '1.4.5',  // Images of Text
        '1.4.9',  // Images of Text (No Exception)
        '1.4.11', // Non-text Contrast
        '1.4.12'  // Text Spacing (if contains text)
      ],
      checks: [
        ElementsCheckList.images.checkList.complexImageTextAlternative,
        ElementsCheckList.images.checkList.altAttributePresence,
        ElementsCheckList.images.checkList.imageTextInAlt,
        ElementsCheckList.images.checkList.complexSVGGraphTextAlternative,
      ]
    },
  ],
  forms: [
    {
      id: 'inputs',
      label: 'Input Fields',
      wcagCriteria: [
        '1.3.1',   // Info and Relationships
        '2.4.6',   // Headings and Labels
        '3.3.2',   // Labels or Instructions
        '4.1.2',   // Name, Role, Value
        '1.3.5',   // Identify Input Purpose
        '3.2.2',   // On Input
        '3.3.1'    // Error Identification
      ],
      checks: [
        ElementsCheckList.forms.checkList.uniqueDescriptiveContent,
        ElementsCheckList.forms.checkList.associatedLabels,
        ElementsCheckList.forms.checkList.autocompleteSuggestions,
      ]
    },
    {
      id: 'submitbtn',
      label: 'Form submit button',
      wcagCriteria: [
        '1.3.1',  // Info and Relationships
        '2.4.6',  // Headings and Labels
        '3.3.2',  // Labels or Instructions
        '4.1.2'   // Name, Role, Value
      ],
      checks: [
        ElementsCheckList.forms.checkList.uniqueDescriptiveContent,
      ]
    },
    {
      id: 'errors',
      label: 'Error Messages',
      wcagCriteria: [
        '3.3.1',  // Error Identification
        '3.3.3',  // Error Suggestion
        '3.3.2',  // Labels or Instructions
        '4.1.3',  // Status Messages
        '1.4.1'   // Use of Color
      ],
      checks: [
        ElementsCheckList.forms.checkList.uniqueDescriptiveContent,
        ElementsCheckList.forms.checkList.descriptiveErrorMessages,
        GeneralCheckList.appearance.checkList.checkColorInformation,
      ]
    },
    {
      id: 'fieldsets',
      label: 'A subset of fields that should be grouped together (adress, card details, etc)',
      wcagCriteria: [
        '1.3.1',  // Info and Relationships
        '2.4.6',  // Headings and Labels
        '2.4.10', // Section Headings
        '3.3.2'   // Labels or Instructions
      ],
      checks: [
        ElementsCheckList.forms.checkList.useFieldsetLegend,
      ]
    },
  ],
  controls: [
    {
      id: 'controlwithsimpletext',
      label: 'does the link / control have an apparent, single element of text ?',
      wcagCriteria: [
        '2.4.4',  // Link Purpose (In Context)
        '2.4.9',  // Link Purpose (Link Only)
        '3.2.5',  // Change on Request
        '2.1.1',  // Keyboard
        '2.1.2',  // No Keyboard Trap
        '4.1.2',   // Name, Role, Value
        '2.5.8',  // Mouse/pointerTarget Size
      ],
      checks:[
        ElementsCheckList.controls.checkList.uniqueDescriptiveContent,
        ElementsCheckList.controls.checkList.controlFocusStates,
        GeneralCheckList.keyboard.checkList.focusOrder,
        ElementsCheckList.controls.checkList.pointerTarget,
        ElementsCheckList.controls.checkList.touchTargets,
      ]
    },
    {
      id: 'controlwithsnotext',
      label: 'does the link / control wrap an image or other non-text content ?',
      wcagCriteria: [
        '1.1.1',  // Non-text Content
        '2.4.4',  // Link Purpose (In Context)
        '2.4.9',  // Link Purpose (Link Only)
        '3.2.5',  // Change on Request
        '2.1.1',  // Keyboard
        '4.1.2',   // Name, Role, Value
        '2.5.8',  // Mouse/pointerTarget Size
      ],
      checks:[
        ElementsCheckList.controls.checkList.uniqueDescriptiveContent,
        ElementsCheckList.controls.checkList.controlFocusStates,
        GeneralCheckList.keyboard.checkList.focusOrder,
        ElementsCheckList.controls.checkList.descriptiveContentForNonTextual,
        ElementsCheckList.controls.checkList.pointerTarget,
        ElementsCheckList.controls.checkList.touchTargets,
      ]
    },
    {
      id: 'controlwrappingmultipleelements',
      label: 'does the link / control wrap multiple elements, and does not have an apparent, single text element ?',
      wcagCriteria: [
        '2.4.4',  // Link Purpose (In Context)
        '2.4.9',  // Link Purpose (Link Only)
        '3.2.5',  // Change on Request
        '2.1.1',  // Keyboard
        '4.1.2',   // Name, Role, Value
      ],
      checks:[
        ElementsCheckList.controls.checkList.uniqueDescriptiveContent,
        ElementsCheckList.controls.checkList.controlFocusStates,
        GeneralCheckList.keyboard.checkList.focusOrder,
      ]
    },
    {
      id: 'changespageorlocation',
      label: 'does it change the page or location when activated ?',
      wcagCriteria: [
        '2.1.1',  // Keyboard
        '2.4.4',  // Link Purpose (In Context)
        '3.2.5',  // Change on Request
        '4.1.2'   // Name, Role, Value
      ],
      checks: [
        ElementsCheckList.controls.checkList.identifyNewWindowLinks,
        ElementsCheckList.controls.checkList.useProperLinkElement,
        ElementsCheckList.controls.checkList.controlFocusStates,
        ElementsCheckList.controls.checkList.recognizableLinks,
        ElementsCheckList.controls.checkList.identifyNewWindowLinks,
        GeneralCheckList.keyboard.checkList.focusOrder,
      ]
    },
    {
      id: 'activateorsubmit',
      label: 'does it trigger and action (open/close something) or submit a form ?',
      wcagCriteria: [
        '2.1.1',  // Keyboard
        '3.2.2',  // On Input
        '4.1.2',  // Name, Role, Value
        '3.3.2'   // Labels or Instructions
      ],
      checks: [
        ElementsCheckList.controls.checkList.useProperButtonElement,
        ElementsCheckList.controls.checkList.controlFocusStates,
        GeneralCheckList.keyboard.checkList.focusOrder,
      ]
    },
  ],
  tables: [
    {
      id: 'data',
      label: 'Data Tables',
      wcagCriteria: [
        '1.3.1',  // Info and Relationships
        '1.3.2',  // Meaningful Sequence
        '2.4.6',  // Headings and Labels
        '4.1.1',  // Parsing
        '4.1.2'   // Name, Role, Value
      ],
      checks: [
        ElementsCheckList.tables.checkList.useTableElement,
        ElementsCheckList.tables.checkList.useTableHeaders,
        ElementsCheckList.tables.checkList.useTableCaption,
      ]
    }
  ],
  headings: [
    {
      id: 'headingsStructure',
      label: 'Contains titles and headings',
      wcagCriteria: [
        '1.3.1',  // Info and Relationships
        '2.4.1',  // Bypass Blocks
        '2.4.6',  // Headings and Labels
        '2.4.10', // Section Headings
        '4.1.1',  // Parsing
        '4.1.2'   // Name, Role, Value
      ],
      checks: [
        ElementsCheckList.headings.checkList.useHeadingElements,
        ElementsCheckList.headings.checkList.singleH1,
        ElementsCheckList.headings.checkList.logicalHeadingSequence,
        ElementsCheckList.headings.checkList.noSkippedHeadingLevels,
      ]
    }
  ],
  lists: [
    {
      id: 'lists',
      label: 'Contains lists of elements (product list, navigation list, bullets points, etc)',
      wcagCriteria: [
        '1.3.1',  // Info and Relationships
        '1.3.2',  // Meaningful Sequence
        '2.4.1',  // Bypass Blocks (for navigation lists)
        '4.1.1',  // Parsing
        '4.1.2'   // Name, Role, Value
      ],
      checks: [
        ElementsCheckList.lists.checkList.useListElements,
      ]
    }
  ],
  text_content: [
    {
      id: 'text_content',
      label: 'Text Content',
      wcagCriteria: [
        '3.1.5',  // Reading Level
        '1.3.1',  // Info and Relationships
        '1.4.8',  // Visual Presentation
        '1.4.1',  // Use of Color
        '1.4.3',  // Contrast (Minimum)
        '1.4.4',  // Resize text
        '1.4.12', // Text Spacing
        '3.1.1',  // Language of Page
        '3.1.2'   // Language of Parts
      ],
      checks: [
        GeneralCheckList.textContent.checkList.usePlainLanguage,
        GeneralCheckList.textContent.checkList.useProperTextAlignment,
        GeneralCheckList.textContent.checkList.readingLevel,
        GeneralCheckList.textContent.checkList.abbreviations
      ]
    }
  ],
  video: [
    {
      id: 'video',
      label: 'Video',
      wcagCriteria: [
        '1.2.1',  // Audio-only and Video-only (Prerecorded)
        '1.2.2',  // Captions (Prerecorded)
        '1.2.3',  // Audio Description or Media Alternative (Prerecorded)
        '1.2.4',  // Captions (Live)
        '1.2.5',  // Audio Description (Prerecorded)
        '2.2.2',  // Pause, Stop, Hide
        '2.3.1'   // Three Flashes or Below Threshold
      ],
      checks: [
        ElementsCheckList.video.checkList.confirmCaptions,
        ElementsCheckList.video.checkList.removeSeizureTriggers,
        ElementsCheckList.media.checkList.audioDescriptions,
        ElementsCheckList.media.checkList.signLanguage,
        ElementsCheckList.media.checkList.preventAutoplay,
        ElementsCheckList.media.checkList.pausableMedia
      ]
    }
  ],
  audio: [
    {
      id: 'audio',
      label: 'Audio',
      wcagCriteria: [
        '1.1.1',  // Non-text Content (for transcripts)
        '1.2.1',  // Audio-only and Video-only (Prerecorded)
        '1.2.2',  // Captions (Prerecorded)
        '1.2.4',  // Captions (Live)
        '1.4.2',  // Audio Control
        '2.2.2'   // Pause, Stop, Hide
      ],
      checks: [
        ElementsCheckList.audio.checkList.confirmTranscripts,
        ElementsCheckList.media.checkList.preventAutoplay,
        ElementsCheckList.media.checkList.accessibleMediaControls,
        ElementsCheckList.media.checkList.pausableMedia
      ]
    }
  ],
  animation: [
    {
      id: 'animation',
      label: 'Animation',
      wcagCriteria: [
        '2.2.2',  // Pause, Stop, Hide
        '2.3.1',  // Three Flashes or Below Threshold
        '2.3.3',  // Animation from Interactions
        '1.4.2',  // Audio Control (if animation includes audio)
        '2.2.1'   // Timing Adjustable
      ],
      checks: [
        ElementsCheckList.animation.checkList.subtleAnimations,
        ElementsCheckList.animation.checkList.pauseBackgroundVideo,
        ElementsCheckList.animation.checkList.reducedMotion
      ]
    }
  ],
}; 