export interface CheckListItem {
  taskSummary: string;
  criteriaId: string;
  criteriaText: string;
  criteriaUrl: string;
  adviceText: string;
}

type CheckList = {
  [category: string]:{
   categoryIntro: string;
   checkList: {
    [check: string]: CheckListItem;
   }
  }
}

// aria attributes browser support : https://a11ysupport.io

export const techniquesAndTutorials = {
   ariaLandmarks: {
      url: "https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/",
      title: "WAI ARIA practices : Landmark Regions"
   },
   namesAndDescriptions: {
      url: "https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/",
      title: "WAI ARIA practices : Names and Descriptions"
   },
   keyboardNavigation: {
      url: "https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/",
      title: "WAI ARIA practices : Keyboard Interface"
   },
   hidingSemanticInformation: {
      url: "https://www.w3.org/WAI/ARIA/apg/practices/hiding-semantics/",
      title: "WAI ARIA practices : Hiding Semantics with the presentation Role"
   },
   W3CForms: {
      url: "https://www.w3.org/WAI/tutorials/forms/",
      title: "W3C Tutorial: Forms"
   },
   W3CPageStructure: {
      url: "https://www.w3.org/WAI/tutorials/page-structure/",
      title: "W3C Tutorial: Page Structure"
   },
   W3CHeadings: {
      url: "https://www.w3.org/WAI/tutorials/headings/",
      title: "W3C Tutorial: Headings"
   },
   W3CMenus: {
      url: "https://www.w3.org/WAI/tutorials/menus/",
      title: "W3C Tutorial: Menus"
   },
   W3CTables: {
      url: "https://www.w3.org/WAI/tutorials/tables/",
      title: "W3C Tutorial: Tables"
   },
   W3CImages: {
      url: "https://www.w3.org/WAI/tutorials/images/",
      title: "W3C Tutorial: Images"
   },
   W3CCarousels: {
      url: "https://www.w3.org/WAI/tutorials/carousels/",
      title: "W3C Tutorial: Carousels"
   },
   accessibleSVG: {
      url: "https://la-cascade.io/articles/5-regles-pour-rendre-svg-accessible",
      title: "la-cascade: Accessible SVG"
   }
}

export const GeneralCheckList: CheckList = {
   textContent: {
      categoryIntro: "Content is the most important part of your site.",
      checkList: {
        usePlainLanguage: {
          taskSummary: "Use plain language and avoid figures of speech, idioms, and complicated metaphors.",
          criteriaId: "3.1.5", 
          criteriaText: "Reading Level",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html",
          adviceText: `Write content at <a href="https://datayze.com/readability-analyzer.php">an 8th grade reading level</a>.`
        },
        useProperTextAlignment: {
          taskSummary: "Use left-aligned text for left-to-right (LTR) languages, and right-aligned text for right-to-left (RTL) languages.",
          criteriaId: "1.4.8",
          criteriaText: "Visual Presentation", 
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html",
          adviceText: "Centered-aligned or justified text is difficult to read."
        },
        readingLevel: {
         taskSummary: "Provide simplified versions of complex text",
         criteriaId: "3.1.5",
         criteriaText: "Reading Level",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html",
         adviceText: "For complex content, provide a simplified version or summary that can be understood at a lower reading level."
       },
       abbreviations: {
         taskSummary: "Provide expansions for abbreviations and acronyms",
         criteriaId: "3.1.4",
         criteriaText: "Abbreviations",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html",
         adviceText: "Use the <abbr> element with a title attribute, or provide expansions on first use."
       }
      }
   },
   globalCode: {
      categoryIntro: "Global code is code that affects your entire website or web app.",
      checkList: {
        validateHtml: {
          taskSummary: "Validate your HTML",
          criteriaId: "4.1.1",
          criteriaText: "Parsing",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/parsing.html",
          adviceText: `<a href="https://validator.w3.org/nu/">Valid HTML</a> helps to provide a consistent, expected experience across all browsers and assistive technology.`
        },
        setHtmlLang: {
          taskSummary: "Use a lang attribute on the html element.",
          criteriaId: "3.1.1", 
          criteriaText: "Language of Page",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html",
          adviceText: `This helps assistive technology such as screen readers to <a href="https://github.com/FreedomScientific/VFO-standards-support/issues/188">pronounce content correctly</a>.`
        },
        uniquePageTitles: {
          taskSummary: "Provide a unique title for each page or view.",
          criteriaId: "2.4.2",
          criteriaText: "Page Titled",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html",
          adviceText: "The title element, contained in the document's head element, is often the first piece of information announced by assistive technology. This helps tell people what page or view they are going to start navigating."
        },
        properViewportMeta: {
          taskSummary: "Ensure proper viewport meta tag configuration",
          criteriaId: "1.4.4",
          criteriaText: "Resize text",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
          adviceText: "Use viewport meta tag with user-scalable=yes and ensure minimum-scale=1. This allows users to zoom content when needed."
        },
        focusManagement: {
          taskSummary: "Implement proper focus management",
          criteriaId: "2.4.7",
          criteriaText: "Focus Visible",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
          adviceText: "Ensure focus indicators are visible and focus order is logical. Never remove focus outlines without providing an alternative."
        },
        keyboardNavigation: {
          taskSummary: "Handle keyboard navigation",
          criteriaId: "2.1.1",
          criteriaText: "Keyboard",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
          adviceText: "All functionality should be operable through keyboard alone. Test navigation using only keyboard."
        },
        skipLinks: {
          taskSummary: "Implement skip links",
          criteriaId: "2.4.1",
          criteriaText: "Bypass Blocks",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
          adviceText: "Provide mechanisms to bypass repeated blocks of content, typically with a skip to main content link."
        }
      }
    },
    appearance: {
      categoryIntro: "How your website app content looks in any given situation.",
      checkList: {
        checkSpecialBrowsingModes: {
          taskSummary: "Check your content in specialized browsing modes.",
          criteriaId: "1.4.1",
          criteriaText: "Use of Color", 
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
          adviceText: "Activate modes such as Windows High Contrast or Inverted Colors. Is your content still legible? Are your icons, borders, links, form fields, and other content still present? Can you distinguish foreground content from the background?"
        },
        checkTextResize: {
          taskSummary: "Increase text size to 200%",
          criteriaId: "1.4.4",
          criteriaText: "Resize text",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
          adviceText: "Is the content still readable? Does increasing the text size cause content to overlap?"
        },
        checkContentProximity: {
          taskSummary: "Double-check that good proximity between content is maintained.",
          criteriaId: "1.3.3", 
          criteriaText: "Sensory Characteristics",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html",
          adviceText: "Use the straw test to ensure people who depend on screen zoom software can still easily discover all content."
        },
        checkColorInformation: {
          taskSummary: "Make sure color isn't the only way information is conveyed.",
          criteriaId: "1.4.1",
          criteriaText: "Use of Color",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
          adviceText: "Can you still see where links are among body content if everything is grayscale?"
        },
        checkInstructionTypes: {
          taskSummary: "Make sure instructions are not visual or audio-only.",
          criteriaId: "1.3.3",
          criteriaText: "Sensory Characteristics",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html",
          adviceText: "Use a combination of characteristics to write cues, particularly the actual names of lis and elements, rather than just descriptions like location (\"on the right\") or audio (\"after the tone\")."
        },
        checkLayoutConsistency: {
          taskSummary: "Use a simple, straightforward, and consistent layout.",
          criteriaId: "1.4.10",
          criteriaText: "Reflow",
          criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
          adviceText: "A complicated layout can be confusing to understand and use."
        }
      }
    },
    keyboard: {
      categoryIntro: "It is important that your interface and content can be operated, and navigated by use of a keyboard. Some people cannot use a mouse, or may be using other assistive technologies that may not allow for hovering or precise clicking.",
      checkList: {
        visibleFocusStyle: {
            taskSummary: "Make sure there is a visible focus style for interactive elements that are navigated to via keyboard input.",
            criteriaId: "2.4.7",
            criteriaText: "Focus Visible",
            criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
            adviceText: "Can a person navigating with a keyboard, switch voice control, and see where they currently are on the page?"
        },
        focusOrder: {
            taskSummary: "Check to see that keyboard focus order matches the visual layout.",
            criteriaId: "1.3.2",
            criteriaText: "Meaningful Sequence",
            criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html",
            adviceText: "Can a person navigating with a keyboard or screen reader move around the page in a predictable way ?"
        },
        invisibleFocusableElements: {
            taskSummary: "Remove invisible focusable elements.",
            criteriaId: "2.4.3",
            criteriaText: "Focus Order",
            criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
            adviceText: "Remove the ability to focus on elements that are not presently meant to be discoverable. This includes things like inactive drop down menus, off screen navigations, or modals."
        }
      }
   },
} as const;

export const ElementsCheckList: CheckList = {
   structure: {
     categoryIntro: "Structure is the way your content is organized into sections, zones, and groups of elements.",
     checkList: {
       useSectionElements: {
         taskSummary: "Use section, footer, article and aside elements to organize content. Make use of proper semantic HTML5 elements.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Create a logical, and informative structure for your content. This helps people who use assistive technology to understand the meaning of a page or view. Alternatively, use aria regions and roles to create a logical structure. Give your regions and roles a meaningful titles or labels (aria-label or aria-labelledby)"
       }
     }
   },
   images: {
     categoryIntro: "Images are a very common part of most websites. Help make sure they can be enjoyed by all.",
     checkList: {
       altAttributePresence: {
         taskSummary: "Make sure that all img elements have an alt attribute.",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "alt attributes (alt text) give a description of an image for people who may not be able to view them. When an alt attribute isn't present on an image, a screen reader may announce the image's file name and path instead. This fails to communicate the image's content."
       },
       titleForSVG: {
         taskSummary: "If your image is an SVG (svg tag), make sure it has either title tag, a aria-label attribute, or is hidden from assistive technology.",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "Use a title tag to describe the SVG image. This helps people who use assistive technology to understand the image's content. Alternatively, use an aria-label attribute to describe the SVG image."
       },
       decorativeImageAltEmpty: {
         taskSummary: "Make sure that decorative images use null alt (empty) attribute values.",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "Null alt attributes are also sometimes known as empty alt attributes. They are made by including no information between the opening and closing quotes of an alt attribute. Decorative images do not communicate information that is required to understand the website's overall meaning. Historically they were used for flourishes and spacer gif images, but tend to be less relevant for modern websites and web apps."
       },
       complexImageTextAlternative: {
         taskSummary: "Provide a text alternative for complex images such as charts, graphs, and maps.",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "Is there a plain text which lists points on the map or lis of a flowchart? Describe all visible information. This includes graph axes, data points and labels, and the overall point the graphic is communicating."
       },
       complexSVGGraphTextAlternative: {
         taskSummary: "Use a desc tag to describe a complex SVG image. The desc tag can have a lang attribute.",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "Use a desc tag to describe a complex SVG image. The desc tag can have a lang attribute."
       },
       imageTextInAlt: {
         taskSummary: "For images containing text, make sure the alt description includes the image's text.",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "For example, the FedEx logo should have an alt value of \"FedEx.\""
       }
     }
   },
   headings: {
     categoryIntro: "Heading elements (h1, h2, h3, etc.) help break up the content of the page into related \"chunks\" of information. They are incredibly important for helping people who use assistive technology to understand the meaning of a page or view.",
     checkList: {
       useHeadingElements: {
         taskSummary: "Use heading elements to introduce content.",
         criteriaId: "2.4.6",
         criteriaText: "Headings or Labels",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
         adviceText: "Heading elements construct a document outline, and should not be used for purely visual design."
       },
       singleH1: {
         taskSummary: "Use only one h1 element per page or view.",
         criteriaId: "2.4.6",
         criteriaText: "Headings or Labels",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
         adviceText: "The h1 element should be used to communicate the high-level purpose of the page or view. Do not use the h1 element for a heading that does not change between pages or views (for example, the site's name)."
       },
       logicalHeadingSequence: {
         taskSummary: "Heading elements should be written in a logical sequence.",
         criteriaId: "2.4.6",
         criteriaText: "Headings or Labels",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
         adviceText: "The order of heading elements should descend, based on the \"depth\" of the content. For example, a h4 element should not appear on a page before the first h3 element declaration. A tool such as headingsMap can help you evaluate this."
       },
       noSkippedHeadingLevels: {
         taskSummary: "Don't skip heading levels",
         criteriaId: "2.4.6",
         criteriaText: "Headings or Labels",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
         adviceText: "For example, don't jump from a h2 to a h4, skipping a h3 element. If heading levels are being skipped for a specific visual treatment, use CSS classes instead."
       }
     }
   },
   lists: {
     categoryIntro: "Lists elements let people know a collection of items are related and if they are sequential, and how many items are present in the list grouping.",
     checkList: {
       useListElements: {
         taskSummary: "Use list elements (ol, ul, and dl elements) for list content.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "This may include lis of related content, items visually displayed in a grid-like layout, or sibling a elements."
       }
     }
   },
   controls: {
     categoryIntro: "Controls are interactive elements such as links and buttons that let a person navigate to a destination or perform an action.",
     checkList: {
       uniqueDescriptiveContent: {
         taskSummary: "Make sure that button, a, and label element content is unique and descriptive.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Terms like \"click here\" and \"read more\" do not provide any context. Some people navigate using a list of all buttons or links on a page or view. When using this mode, the terms indicate what will happen if navigated to or activated."
       },
       descriptiveContentForNonTextual: {
         taskSummary: "Make sure that button, a, have a text alternative when non-textual content is present (icon buttons, or links wrapping images).",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "Make uses of aria-labels, or aria-labelledby, or visually-hidden text to provide a text alternative for non-textual content."
       },
       complexContent: {
         taskSummary: "Make sure that button, a, have a simple, single text alternative when wrapping complex content.",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "Make uses of aria-labels, or aria-labelledby, or visually-hidden text to provide a text alternative for non-textual content."
       },
       useProperLinkElement: {
         taskSummary: "Use the a element and href attribute for links.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Use propper a html element. Links should always have a href attribute, even when used in Single Page Applications (SPAs). Without a href attribute, the link will not be properly exposed to assistive technology. An example of this would be a link that uses an onclick event, in place of a href attribute."
       },
       recognizableLinks: {
         taskSummary: "Ensure that links are recognizable as links.",
         criteriaId: "1.4.1",
         criteriaText: "Use of Color",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
         adviceText: "Color alone is not sufficient to indicate the presence of a link. Underlines are a popular and commonly-understood way to communicate the presence of link content."
       },
       controlFocusStates: {
         taskSummary: "Ensure that controls have :focus states.",
         criteriaId: "2.4.7",
         criteriaText: "Focus Visible",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
         adviceText: "Visible focus styles help people determine which interactive element has keyboard focus. This lets them know that they can perform actions like activating a button or navigating to a link's destination."
       },
       useProperButtonElement: {
         taskSummary: "Use the button element for buttons.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Buttons are used to submit data or perform an on-screen action which does not shift keyboard focus. You can add type=\"button\" to a button element to prevent the browser from attempting to submit form information when activated."
       },
       identifyNewWindowLinks: {
         taskSummary: "Identify links that open in a new tab or window.",
         criteriaId: "G201",
         criteriaText: "Giving users advanced warning when opening a new window",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Techniques/general/G201",
         adviceText: "Ideally, avoid links that open in a new tab or window. If a link does, ensure the link's behavior will be communicated in a way that is apparent to all users. Doing this will help people understand what will happen before activating the link. While this technique is technically not required for compliance, it is an often-cited area of frustration for many different kinds of assistive technology users."
       },
       touchTargets: {
         taskSummary: "Ensure touch targets are large enough",
         criteriaId: "2.5.5",
         criteriaText: "Touch Target Size",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/target-size.html",
         adviceText: "Touch targets should be at least 44x44 pixels for better usability on mobile devices. target sizes should not intersect."
       },
       pointerTarget: {
         taskSummary: "Ensure mouse targets are large enough (24x24px)",
         criteriaId: "2.5.8",
         criteriaText: "Mouse/pointerTarget Size",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
         adviceText: "Mouse/pointer targets should be at least 24x24 pixels for better usability on mobile devices. target sizes should not intersect."
       },
       gestureAlternatives: {
         taskSummary: "Provide alternatives for complex gestures",
         criteriaId: "2.5.1",
         criteriaText: "Pointer Gestures",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html",
         adviceText: "If your interface uses complex gestures (like pinch-zoom), provide simple alternatives (like + and - buttons)."
       }
     }
   },
   tables: {
     categoryIntro: "Tables are a structured set of data that help people understand the relationships between different types of information.",
     checkList: {
       useTableElement: {
         taskSummary: "Use the table element to describe tabular data.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Do you need to display data in rows and columns? Use the table element."
       },
       useTableHeaders: {
         taskSummary: "Use the th element for table headers (with appropriate scope attributes).",
         criteriaId: "4.1.1",
         criteriaText: "Parsing",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/parsing.html",
         adviceText: "Depending on how complex your table is, you may also consider using scope=\"col\" for column headers, and scope=\"row\" for row headers. Many different kinds of assistive technology still use the scope attribute to help them understand and describe the structure of a table."
       },
       useTableCaption: {
         taskSummary: "Use the caption element to provide a title for the table.",
         criteriaId: "2.4.6",
         criteriaText: "Headings and Labels",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
         adviceText: "The table's caption should describe what kind of information the table contains."
       },
       complexTables: {
         taskSummary: "Provide summaries for complex tables",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "For complex tables, provide a summary that explains how to navigate and understand the data relationships."
       },
     }
   },
   forms: {
     categoryIntro: "Forms allow people to enter information into a site for processing and manipulation. This includes things like sending messages and placing orders.",
     checkList: {
       uniqueDescriptiveContent: {
         taskSummary: "Make sure that button, a, and label element content is unique and descriptive.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Terms like \"click here\" and \"read more\" do not provide any context. Some people navigate using a list of all buttons or links on a page or view. When using this mode, the terms indicate what will happen if navigated to or activated."
       },
       descriptiveErrorMessages: {
         taskSummary: "Make sure error messages are descriptive and helpful, and programmatically associated with the input field that caused the error.",
         criteriaId: "3.3.1",
         criteriaText: "Error Identification",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html",
         adviceText: "Error messages should be descriptive and helpful, and programmatically associated with the input field that caused the error. check the aria-describedby and aria-invalid attributes."
       },
       associatedLabels: {
         taskSummary: "All inputs in a form are associated with a corresponding label element.",
         criteriaId: "3.2.2",
         criteriaText: "On Input",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/on-input.html",
         adviceText: "Use a for/id pairing to guarantee the highest level of browser/assistive technology support."
       },
       useFieldsetLegend: {
         taskSummary: "Use fieldset and legend elements where appropriate.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Does your form contain multiple lis of related inputs? Use fieldset to group them, and legend to provide a label for what this li is for."
       },
       autocompleteSuggestions: {
         taskSummary: "Provide autocomplete suggestions for common input fields",
         criteriaId: "1.3.5",
         criteriaText: "Identify Input Purpose",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html",
         adviceText: "Use appropriate autocomplete attributes for common fields like name, email, address, etc. This helps users with cognitive disabilities and makes form filling easier."
       },
       timeouts: {
         taskSummary: "Warn users before session timeouts and provide ways to extend",
         criteriaId: "2.2.1",
         criteriaText: "Timing Adjustable",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html",
         adviceText: "If there's a session timeout, warn users before it occurs and provide a way to extend their session without losing data."
       }
     }
   },
   media: {
     categoryIntro: "Media includes content such as pre-recorded and live audio and video.",
     checkList: {
       preventAutoplay: {
         taskSummary: "Make sure that media does not autoplay",
         criteriaId: "1.4.2",
         criteriaText: "Audio Control",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html",
         adviceText: "Unexpected video and audio can be distracting and disruptive, especially for certain kinds of cognitive disability such as ADHD. Certain kinds of autoplaying video and animation can be a trigger for vestibular and seizure disorders."
       },
       accessibleMediaControls: {
         taskSummary: "Ensure that media controls use appropriate markup.",
         criteriaId: "1.3.1",
         criteriaText: "Info and Relationships",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
         adviceText: "Examples include making sure an audio mute button has a pressed toggle state when active, or that a volume slider uses <input>."
       },
       pausableMedia: {
         taskSummary: "Check to see that all media can be paused.",
         criteriaId: "2.1.1",
         criteriaText: "Keyboard",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
         adviceText: "Provide a global pause function on any media element. If the device has a keyboard, ensure that pressing the Space key can pause playback. Make sure you also don't interfere with the Space key's ability to scroll the page/view when not focusing on a form control."
       },
       audioDescriptions: {
         taskSummary: "Provide audio descriptions for video content",
         criteriaId: "1.2.5",
         criteriaText: "Audio Description (Prerecorded)",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html",
         adviceText: "Important visual information in videos should be described in audio for users who can't see the video."
       },
       signLanguage: {
         taskSummary: "Consider providing sign language interpretation for important content",
         criteriaId: "1.2.6",
         criteriaText: "Sign Language (Prerecorded)",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html",
         adviceText: "For important content, consider providing sign language interpretation to support deaf users who prefer sign language over captions."
       }
     }
   },
   video: {
     categoryIntro: "Video-specific checks.",
     checkList: {
       confirmCaptions: {
         taskSummary: "Confirm the presence of captions",
         criteriaId: "1.2.2",
         criteriaText: "Captions",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html",
         adviceText: "Captions allow a person who cannot hear the audio content of a video to still understand its content."
       },
       removeSeizureTriggers: {
         taskSummary: "Remove seizure triggers", 
         criteriaId: "2.3.1",
         criteriaText: "Three Flashes or Below Threshold",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html",
         adviceText: "Certain kinds of strobing or flashing animations will trigger seizures."
       }
     }
   },
   audio: {
     categoryIntro: "Audio-specific checks.",
     checkList: {
       confirmTranscripts: {
         taskSummary: "Confirm that transcripts are available",
         criteriaId: "1.1.1",
         criteriaText: "Non-text Content",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
         adviceText: "Transcripts allow people who cannot hear to still understand the audio content. It also allows people to digest audio content at a pace that is comfortable to them."
       }
     }
   },
   animation: {
     categoryIntro: "Content that moves, either on its own, or when triggered by a person activating a control.",
     checkList: {
       subtleAnimations: {
         taskSummary: "Ensure animations are subtle and do not flash too much.",
         criteriaId: "2.3.1",
         criteriaText: "Three Flashes or Below Threshold",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html",
         adviceText: "Certain kinds of strobing or flashing animations will trigger seizures. Others may be distracting and disruptive, especially for certain kinds of cognitive disability such as ADHD."
       },
       pauseBackgroundVideo: {
         taskSummary: "Provide a mechanism to pause background video.",
         criteriaId: "2.2.2",
         criteriaText: "Pause, Stop, Hide",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
         adviceText: "Background video can be distracting, especially if content is placed over it."
       },
       reducedMotion: {
         taskSummary: "Make sure all animation obeys the prefers-reduced-motion media query.",
         criteriaId: "2.3.3",
         criteriaText: "Animation from Interactions",
         criteriaUrl: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
         adviceText: "Remove animations when the \"reduce motion\" setting is activated. If an animation is necessary to communicate meaning for a concept, slow its duration down."
       }
     }
   }
 } as const;