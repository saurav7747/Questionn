/**
 * quiz.js — Computer Quiz Part 2
 * ---------------------------------------------------------------------
 * Question bank for Part 2 of the Computer Quiz PWA.
 * Source: Official PDF question bank + official answer key (page 69)
 * (UP Police Radio Training Centre - Basic Computer Course Question Bank).
 *
 * Structure of each question object:
 *   id       -> Question number (501-860), matches the official numbering
 *   type     -> 'fill' (Q501-Q610, Fill in the Blanks) or
 *               'abbreviation' (Q611-Q860, Abbreviations)
 *   question -> Exact question text as given in the PDF. For 'fill' type
 *               this is the sentence with the blank preserved exactly as
 *               printed. For 'abbreviation' type this is phrased as
 *               "What is the full form of <ABBR>?" using the exact
 *               abbreviation from the PDF.
 *   answer   -> The exact correct answer string, taken directly from the
 *               official answer key (fill) or from the PDF itself, which
 *               already contains the correct full form (abbreviation).
 *
 * Answers are free-text. app.js compares the user's typed answer to this
 * value case-insensitively, with whitespace trimmed/collapsed.
 *
 * This file only contains data. All quiz behaviour lives in app.js.
 * ---------------------------------------------------------------------
 */

const QUIZ_QUESTIONS = [
  {
    "id": 501,
    "type": "fill",
    "question": "Mouse was invented by …………………….. In 1977.",
    "answer": "Douglus Engelbart"
  },
  {
    "id": 502,
    "type": "fill",
    "question": "Icons is based on …………………… technology.",
    "answer": "GUI"
  },
  {
    "id": 503,
    "type": "fill",
    "question": "Scanner is a …………………… device.",
    "answer": "Input"
  },
  {
    "id": 504,
    "type": "fill",
    "question": "Computer keyboard is a …………………….. Device.",
    "answer": "Input"
  },
  {
    "id": 505,
    "type": "fill",
    "question": "Computer Literacy Day is celebrated on ………………………..",
    "answer": "2nd December"
  },
  {
    "id": 506,
    "type": "fill",
    "question": "Optical scanner is a ………………………device.",
    "answer": "Input"
  },
  {
    "id": 507,
    "type": "fill",
    "question": "Microphone is an …………………………device.",
    "answer": "Input"
  },
  {
    "id": 508,
    "type": "fill",
    "question": "ROM means ……………………………………..",
    "answer": "Read Only Memory"
  },
  {
    "id": 509,
    "type": "fill",
    "question": "CTRL + …………..for undo.",
    "answer": "Z"
  },
  {
    "id": 510,
    "type": "fill",
    "question": "CTRL+ ………….. for select all.",
    "answer": "A"
  },
  {
    "id": 511,
    "type": "fill",
    "question": "CTRL+ ………….. for cut.",
    "answer": "X"
  },
  {
    "id": 512,
    "type": "fill",
    "question": "CTRL+ ………….. for redo.",
    "answer": "Y"
  },
  {
    "id": 513,
    "type": "fill",
    "question": "www stands for world ……………………… web.",
    "answer": "Wide"
  },
  {
    "id": 514,
    "type": "fill",
    "question": "Third generation computer is based on ………………………..",
    "answer": "Integrated Circuits"
  },
  {
    "id": 515,
    "type": "fill",
    "question": "Hardware represents …………………… and tangible components of computer.",
    "answer": "Logical"
  },
  {
    "id": 516,
    "type": "fill",
    "question": "A ………………………..… is a rectangular portion on the screen in which an application displays information.",
    "answer": "Windows"
  },
  {
    "id": 517,
    "type": "fill",
    "question": "A ……………………… can contain files as well as folders.",
    "answer": "Menu"
  },
  {
    "id": 518,
    "type": "fill",
    "question": "Choose …………………….. Button from the start menu to shut down window.",
    "answer": "Power"
  },
  {
    "id": 519,
    "type": "fill",
    "question": "We Click the ……… button to reduces the application window from the title bar.",
    "answer": "Minimize"
  },
  {
    "id": 520,
    "type": "fill",
    "question": "We Click the ……… button to enlarge the application window from the title bar.",
    "answer": "Maximize"
  },
  {
    "id": 521,
    "type": "fill",
    "question": "Clicking the ………… to restore the application window to a button on the taskbar.",
    "answer": "Minimized Icon"
  },
  {
    "id": 522,
    "type": "fill",
    "question": "The find utilities can be used to search for files and folders. Find can be started by choosing ………… from start menu.",
    "answer": "Search Box"
  },
  {
    "id": 523,
    "type": "fill",
    "question": "A computer that is not connected to network is known as …………………. computer.",
    "answer": "Stand-alone"
  },
  {
    "id": 524,
    "type": "fill",
    "question": "A computer connected to network is known as ………………….",
    "answer": "Node"
  },
  {
    "id": 525,
    "type": "fill",
    "question": "A …………………. is device that connects two or more dissimilar networks.",
    "answer": "Router"
  },
  {
    "id": 526,
    "type": "fill",
    "question": "The central structure that connects elements of a network is known as the ………………………",
    "answer": "Server"
  },
  {
    "id": 527,
    "type": "fill",
    "question": "Total height of a line of text including extra spacing is known as …………………….. .",
    "answer": "Line Spacing"
  },
  {
    "id": 528,
    "type": "fill",
    "question": "In MS excel formula start with ………………………… .",
    "answer": "Sign of ="
  },
  {
    "id": 529,
    "type": "fill",
    "question": "The cell having bold boundary is the…………………. cell.",
    "answer": "Active"
  },
  {
    "id": 530,
    "type": "fill",
    "question": "To create an absolute cell reference …………………. sign is used before parts of formula.",
    "answer": "= sign"
  },
  {
    "id": 531,
    "type": "fill",
    "question": "Address of the cell at 20th column and 30th row is ……………………. .",
    "answer": "R30C20"
  },
  {
    "id": 532,
    "type": "fill",
    "question": "In …………………… chart, only one data series can be plotted.",
    "answer": "Pie Chart"
  },
  {
    "id": 533,
    "type": "fill",
    "question": "A chart placed in a worksheet is called …………………. chart.",
    "answer": "Embedded"
  },
  {
    "id": 534,
    "type": "fill",
    "question": "Space key is the ………………. key in keyboard.",
    "answer": "Biggest"
  },
  {
    "id": 535,
    "type": "fill",
    "question": "Booting means to ……………… the computer for working.",
    "answer": "Prepare"
  },
  {
    "id": 536,
    "type": "fill",
    "question": "ATM facility is an example of ………………..",
    "answer": "WAN"
  },
  {
    "id": 537,
    "type": "fill",
    "question": "Speaker is a ……………….. device.",
    "answer": "Output"
  },
  {
    "id": 538,
    "type": "fill",
    "question": "Full form of WLL is ……………………………………….",
    "answer": "Wireless Local Loop"
  },
  {
    "id": 539,
    "type": "fill",
    "question": "……………..is the brain of a computer.",
    "answer": "CPU"
  },
  {
    "id": 540,
    "type": "fill",
    "question": "Spam is related with …………...",
    "answer": "E-mail"
  },
  {
    "id": 541,
    "type": "fill",
    "question": "Animation is used in …………………...",
    "answer": "Power Point Presentation"
  },
  {
    "id": 542,
    "type": "fill",
    "question": "In computer recycle bin …………. again deleted files and folders.",
    "answer": "Restores"
  },
  {
    "id": 543,
    "type": "fill",
    "question": "Microsoft office is an example of …………… software.",
    "answer": "Application"
  },
  {
    "id": 544,
    "type": "fill",
    "question": "http means …………………protocol.",
    "answer": "Hyper Text Transfer"
  },
  {
    "id": 545,
    "type": "fill",
    "question": "For paste we use Ctrl+………….",
    "answer": "V"
  },
  {
    "id": 546,
    "type": "fill",
    "question": "The extension .png is related to a …………….",
    "answer": "Image/Photo"
  },
  {
    "id": 547,
    "type": "fill",
    "question": "The printed copy of a document is called a ………….copy.",
    "answer": "Hard Copy"
  },
  {
    "id": 548,
    "type": "fill",
    "question": "Linux is a/an …………………….. system.",
    "answer": "Operating"
  },
  {
    "id": 549,
    "type": "fill",
    "question": "For left alignment we use Ctrl+……..",
    "answer": "L"
  },
  {
    "id": 550,
    "type": "fill",
    "question": "DVD can also be used for …………………...",
    "answer": "Storage"
  },
  {
    "id": 551,
    "type": "fill",
    "question": "Pen drive is a/an ……………. storage device.",
    "answer": "Flash/Secondary"
  },
  {
    "id": 552,
    "type": "fill",
    "question": "OMR is a/an ………………. device.",
    "answer": "Input"
  },
  {
    "id": 553,
    "type": "fill",
    "question": "Internet explorer is called a web …………………………..",
    "answer": "Browser"
  },
  {
    "id": 554,
    "type": "fill",
    "question": "RAM is ………………… memory.",
    "answer": "Volatile"
  },
  {
    "id": 555,
    "type": "fill",
    "question": "ROM is ………………… memory.",
    "answer": "Non-Volatile"
  },
  {
    "id": 556,
    "type": "fill",
    "question": "Full form of DVD is ……………………………………..….",
    "answer": "Digital Versatile Disc"
  },
  {
    "id": 557,
    "type": "fill",
    "question": "Workbook is a collection of …………………………...",
    "answer": "Worksheets"
  },
  {
    "id": 558,
    "type": "fill",
    "question": "EDP stands for …………………………………………………….",
    "answer": "Electronic Data Processing"
  },
  {
    "id": 559,
    "type": "fill",
    "question": "TFT stands for thin ……………………………………………..",
    "answer": "Thin Film Transistor"
  },
  {
    "id": 560,
    "type": "fill",
    "question": "Bit is the ………………………….memory unit.",
    "answer": "Smallest"
  },
  {
    "id": 561,
    "type": "fill",
    "question": "Password is used to maintain ………………………….",
    "answer": "Privacy"
  },
  {
    "id": 562,
    "type": "fill",
    "question": "Pen drive is ……………………………. device.",
    "answer": "Storage"
  },
  {
    "id": 563,
    "type": "fill",
    "question": "CPU is the …………………. part of computer.",
    "answer": "Main"
  },
  {
    "id": 564,
    "type": "fill",
    "question": "Least font size is …………….. in MS word toolbar.",
    "answer": "8"
  },
  {
    "id": 565,
    "type": "fill",
    "question": "Font means the ……………………..of writing.",
    "answer": "Way"
  },
  {
    "id": 566,
    "type": "fill",
    "question": "………………………. is used for maintain privacy.",
    "answer": "Authorization"
  },
  {
    "id": 567,
    "type": "fill",
    "question": "Wi-Fi means ………………………………...",
    "answer": "Wireless Fidelity"
  },
  {
    "id": 568,
    "type": "fill",
    "question": "Joystick used in ………………………………..",
    "answer": "CCTV"
  },
  {
    "id": 569,
    "type": "fill",
    "question": "Mail merge option is found in ……………………………...",
    "answer": "MS-Excel/Word"
  },
  {
    "id": 570,
    "type": "fill",
    "question": "Hyperlink is used to open directly a ………………….. File/folder/URL.",
    "answer": "Particular"
  },
  {
    "id": 571,
    "type": "fill",
    "question": "MS-word is a …………………………. package.",
    "answer": "Software"
  },
  {
    "id": 572,
    "type": "fill",
    "question": "The pattern that can be used to identify a virus is known as virus ……………………...",
    "answer": "Signature"
  },
  {
    "id": 573,
    "type": "fill",
    "question": "A motion ……………… in power point is a method of moving items on a slide.",
    "answer": "Path"
  },
  {
    "id": 574,
    "type": "fill",
    "question": "Trash is related with …………………...",
    "answer": "E-mail"
  },
  {
    "id": 575,
    "type": "fill",
    "question": "CD is also a ……………………… device.",
    "answer": "Storage"
  },
  {
    "id": 576,
    "type": "fill",
    "question": "Computer is an ……………………….. Machine.",
    "answer": "Electronic"
  },
  {
    "id": 577,
    "type": "fill",
    "question": "LCD means ……………………………………………….",
    "answer": "Liquid Crystal Diode"
  },
  {
    "id": 578,
    "type": "fill",
    "question": "The size of default cell is …………………………. pixels.",
    "answer": "64*24"
  },
  {
    "id": 579,
    "type": "fill",
    "question": "Window is based on ………………………………………….",
    "answer": "GUI"
  },
  {
    "id": 580,
    "type": "fill",
    "question": "Formula for 90% of A1 is written in MS excel as …………………………………..",
    "answer": "=A1*90/100"
  },
  {
    "id": 581,
    "type": "fill",
    "question": "Program is a set of ……………………………………………",
    "answer": "Instructions"
  },
  {
    "id": 582,
    "type": "fill",
    "question": "In permanent storage you can ………………………… data again.",
    "answer": "Access"
  },
  {
    "id": 583,
    "type": "fill",
    "question": "MS-word is used for ………………………………………...",
    "answer": "Typing work"
  },
  {
    "id": 584,
    "type": "fill",
    "question": "In VOIP technology voice calls gets convert from ………………to ………………...",
    "answer": "Analog, Digital"
  },
  {
    "id": 585,
    "type": "fill",
    "question": "Internet's initial development was supported by ……………………..",
    "answer": "Arpanet"
  },
  {
    "id": 586,
    "type": "fill",
    "question": "Ctrl + ………. is used to open new file in MS word.",
    "answer": "N"
  },
  {
    "id": 587,
    "type": "fill",
    "question": "Tool bar is located under ……………… bar.",
    "answer": "Title"
  },
  {
    "id": 588,
    "type": "fill",
    "question": "Ctrl + J means align to ………………………….",
    "answer": "Justify"
  },
  {
    "id": 589,
    "type": "fill",
    "question": "Deleted objects can be recovered from ………………………. bin.",
    "answer": "Recycle"
  },
  {
    "id": 590,
    "type": "fill",
    "question": "…………………. technology is used in Compact disks.",
    "answer": "Laser"
  },
  {
    "id": 591,
    "type": "fill",
    "question": "………………… is the first electronic digital computer.",
    "answer": "ABC"
  },
  {
    "id": 592,
    "type": "fill",
    "question": "A computer program that converts an entire program into machine language is called a/an……",
    "answer": "Compiler"
  },
  {
    "id": 593,
    "type": "fill",
    "question": "Intel corporation produces chips for ……………….. Computers.",
    "answer": "IBM PCs"
  },
  {
    "id": 594,
    "type": "fill",
    "question": "The first microprocessor built by the Intel corporation was called……………………",
    "answer": "4004"
  },
  {
    "id": 595,
    "type": "fill",
    "question": "…………………. computers is not a class of computers based on size.",
    "answer": "Super"
  },
  {
    "id": 596,
    "type": "fill",
    "question": "…………………. invented EDSAC.",
    "answer": "Maurice Wilkes"
  },
  {
    "id": 597,
    "type": "fill",
    "question": "Access time is ……………………………………",
    "answer": "Seek time+Latency time"
  },
  {
    "id": 598,
    "type": "fill",
    "question": "Central Processing Unit is combination of ……………………………………………..",
    "answer": "Arithmetic Logic & Control unit"
  },
  {
    "id": 599,
    "type": "fill",
    "question": "Time during which a job is processed by the computer is…………………………………..",
    "answer": "Real time"
  },
  {
    "id": 600,
    "type": "fill",
    "question": "……………………….. is known as nerve center of computer.",
    "answer": "Control unit"
  },
  {
    "id": 601,
    "type": "fill",
    "question": "A page in word file can be set from ……………… in …………….. bar.",
    "answer": "Page layout, Menu"
  },
  {
    "id": 602,
    "type": "fill",
    "question": "……………… and …………………. are the two orientations of a page in a word file.",
    "answer": "Portrait, Landscape"
  },
  {
    "id": 603,
    "type": "fill",
    "question": "Spelling mistakes can be checked by using ……………………………….option.",
    "answer": "Spelling & Grammar"
  },
  {
    "id": 604,
    "type": "fill",
    "question": "Spacing between two horizontal lines in word can be adjusted by using………………………option.",
    "answer": "Line & Paragraph Spacing"
  },
  {
    "id": 605,
    "type": "fill",
    "question": "Like newspaper formatting can be done by using ………………. option from page layout.",
    "answer": "Columns"
  },
  {
    "id": 606,
    "type": "fill",
    "question": "First letter of a word in paragraph can be separately formatted by ………….. option.",
    "answer": "Drop Cap"
  },
  {
    "id": 607,
    "type": "fill",
    "question": "To take a duplicate of an existing file use ………………. option from file menu.",
    "answer": "Save as"
  },
  {
    "id": 608,
    "type": "fill",
    "question": "Mail merge option is used for sending a letter to ………………………. addresses.",
    "answer": "Multiple"
  },
  {
    "id": 609,
    "type": "fill",
    "question": "Inside an existing table, a new row/column can be added from ………………… menu.",
    "answer": "Insert option by right click"
  },
  {
    "id": 610,
    "type": "fill",
    "question": "…………… sheets can be inserted by the user in excel.",
    "answer": "255"
  },
  {
    "id": 611,
    "type": "abbreviation",
    "question": "What is the full form of AA?",
    "answer": "Auto Answer"
  },
  {
    "id": 612,
    "type": "abbreviation",
    "question": "What is the full form of AAL?",
    "answer": "Asynchronous Transfer Mode Adaption Layer"
  },
  {
    "id": 613,
    "type": "abbreviation",
    "question": "What is the full form of AAT?",
    "answer": "Average Access Time"
  },
  {
    "id": 614,
    "type": "abbreviation",
    "question": "What is the full form of ABC?",
    "answer": "Atanasoff-Berry Computer"
  },
  {
    "id": 615,
    "type": "abbreviation",
    "question": "What is the full form of ABLE?",
    "answer": "Adaptive Battery Life Extender"
  },
  {
    "id": 616,
    "type": "abbreviation",
    "question": "What is the full form of ABR?",
    "answer": "Available Bit Rate"
  },
  {
    "id": 617,
    "type": "abbreviation",
    "question": "What is the full form of ACK?",
    "answer": "Acknowledgment"
  },
  {
    "id": 618,
    "type": "abbreviation",
    "question": "What is the full form of ACMS?",
    "answer": "Application Control Management System"
  },
  {
    "id": 619,
    "type": "abbreviation",
    "question": "What is the full form of A/D?",
    "answer": "Analog to Digital"
  },
  {
    "id": 620,
    "type": "abbreviation",
    "question": "What is the full form of ADA?",
    "answer": "Automatic Data Acquisitions + Programming"
  },
  {
    "id": 621,
    "type": "abbreviation",
    "question": "What is the full form of ADC?",
    "answer": "Add with Carry + Analog to Digital Converter"
  },
  {
    "id": 622,
    "type": "abbreviation",
    "question": "What is the full form of ADL?",
    "answer": "Address Data Latch"
  },
  {
    "id": 623,
    "type": "abbreviation",
    "question": "What is the full form of ADMD?",
    "answer": "Administrative Management Domain"
  },
  {
    "id": 624,
    "type": "abbreviation",
    "question": "What is the full form of ADP?",
    "answer": "Automatic Data Processing"
  },
  {
    "id": 625,
    "type": "abbreviation",
    "question": "What is the full form of ADR?",
    "answer": "Address"
  },
  {
    "id": 626,
    "type": "abbreviation",
    "question": "What is the full form of ADSL?",
    "answer": "Asymmetrical Digital Subscriber Line"
  },
  {
    "id": 627,
    "type": "abbreviation",
    "question": "What is the full form of ADSR?",
    "answer": "Attack, Decay, Sustain, Release"
  },
  {
    "id": 628,
    "type": "abbreviation",
    "question": "What is the full form of ADU?",
    "answer": "Automatic Dialing Unit"
  },
  {
    "id": 629,
    "type": "abbreviation",
    "question": "What is the full form of AGC?",
    "answer": "Automatic Gain Control"
  },
  {
    "id": 630,
    "type": "abbreviation",
    "question": "What is the full form of ALC?",
    "answer": "Arithmetic and Logic Circuits"
  },
  {
    "id": 631,
    "type": "abbreviation",
    "question": "What is the full form of ALE?",
    "answer": "Address Latch Enable"
  },
  {
    "id": 632,
    "type": "abbreviation",
    "question": "What is the full form of ALGOL?",
    "answer": "Algorithmic Oriented Language (see IAL)"
  },
  {
    "id": 633,
    "type": "abbreviation",
    "question": "What is the full form of ALT?",
    "answer": "Alternate (mode)"
  },
  {
    "id": 634,
    "type": "abbreviation",
    "question": "What is the full form of ALU?",
    "answer": "Arithmetic Logic Unit"
  },
  {
    "id": 635,
    "type": "abbreviation",
    "question": "What is the full form of AMPS?",
    "answer": "Advanced Mobile Phone Service"
  },
  {
    "id": 636,
    "type": "abbreviation",
    "question": "What is the full form of ANI?",
    "answer": "Automatic Number Identification"
  },
  {
    "id": 637,
    "type": "abbreviation",
    "question": "What is the full form of API?",
    "answer": "Application Program Interface"
  },
  {
    "id": 638,
    "type": "abbreviation",
    "question": "What is the full form of APIC?",
    "answer": "Advanced Programmable Interrupt Controller (bus) [Intel]"
  },
  {
    "id": 639,
    "type": "abbreviation",
    "question": "What is the full form of APIS?",
    "answer": "Advanced Passenger Information System"
  },
  {
    "id": 640,
    "type": "abbreviation",
    "question": "What is the full form of APL?",
    "answer": "A Programming Language (Mathematics)"
  },
  {
    "id": 641,
    "type": "abbreviation",
    "question": "What is the full form of APM?",
    "answer": "Advanced Power Management [IBM OS2]"
  },
  {
    "id": 642,
    "type": "abbreviation",
    "question": "What is the full form of APPN?",
    "answer": "Advanced Peer-to-Peer Networking [IBM]"
  },
  {
    "id": 643,
    "type": "abbreviation",
    "question": "What is the full form of APPS?",
    "answer": "Applications"
  },
  {
    "id": 644,
    "type": "abbreviation",
    "question": "What is the full form of APRP?",
    "answer": "Adaptive Pattern Recognition Processing"
  },
  {
    "id": 645,
    "type": "abbreviation",
    "question": "What is the full form of ARC?",
    "answer": "Archive (file name extension)"
  },
  {
    "id": 646,
    "type": "abbreviation",
    "question": "What is the full form of ARCA?",
    "answer": "Advanced RISC Computing Architecture"
  },
  {
    "id": 647,
    "type": "abbreviation",
    "question": "What is the full form of ARCnet?",
    "answer": "Attached Resource Computer Network"
  },
  {
    "id": 648,
    "type": "abbreviation",
    "question": "What is the full form of ARJ?",
    "answer": "Compressed File (file name extension) [Jung]"
  },
  {
    "id": 649,
    "type": "abbreviation",
    "question": "What is the full form of ARP?",
    "answer": "Address Resolution Protocol [Novell]"
  },
  {
    "id": 650,
    "type": "abbreviation",
    "question": "What is the full form of ARPANET?",
    "answer": "Advanced Research Projects Agency Network"
  },
  {
    "id": 651,
    "type": "abbreviation",
    "question": "What is the full form of ARQ?",
    "answer": "Automatic Repeat Request"
  },
  {
    "id": 652,
    "type": "abbreviation",
    "question": "What is the full form of .ASC?",
    "answer": "ASCII text (file name extension)"
  },
  {
    "id": 653,
    "type": "abbreviation",
    "question": "What is the full form of ASCII?",
    "answer": "American Standard Code for Information Interchange"
  },
  {
    "id": 654,
    "type": "abbreviation",
    "question": "What is the full form of ASYNC?",
    "answer": "Asynchronous"
  },
  {
    "id": 655,
    "type": "abbreviation",
    "question": "What is the full form of ATM?",
    "answer": "Adobe Typeface Manager"
  },
  {
    "id": 656,
    "type": "abbreviation",
    "question": "What is the full form of ATM?",
    "answer": "Asynchronous Transfer Mode"
  },
  {
    "id": 657,
    "type": "abbreviation",
    "question": "What is the full form of ATM?",
    "answer": "Automated Teller Machine"
  },
  {
    "id": 658,
    "type": "abbreviation",
    "question": "What is the full form of AV?",
    "answer": "Audio/Video + Audiovisual + Authenticity Verification"
  },
  {
    "id": 659,
    "type": "abbreviation",
    "question": "What is the full form of AWG?",
    "answer": "American Wire Gauge"
  },
  {
    "id": 660,
    "type": "abbreviation",
    "question": "What is the full form of BAL?",
    "answer": "Basic Assembly Language"
  },
  {
    "id": 661,
    "type": "abbreviation",
    "question": "What is the full form of BALUN?",
    "answer": "Balanced Unbalanced (device)"
  },
  {
    "id": 662,
    "type": "abbreviation",
    "question": "What is the full form of BASIC?",
    "answer": "Beginner's All-purpose Symbolic Instruction Code"
  },
  {
    "id": 663,
    "type": "abbreviation",
    "question": "What is the full form of BCC?",
    "answer": "Block Check Character"
  },
  {
    "id": 664,
    "type": "abbreviation",
    "question": "What is the full form of BIOS?",
    "answer": "Basic Input/Output System"
  },
  {
    "id": 665,
    "type": "abbreviation",
    "question": "What is the full form of BIT?",
    "answer": "Binary Digit"
  },
  {
    "id": 666,
    "type": "abbreviation",
    "question": "What is the full form of BNC?",
    "answer": "Bayonet Neill-Concelman"
  },
  {
    "id": 667,
    "type": "abbreviation",
    "question": "What is the full form of BPI?",
    "answer": "Bits Per Inch"
  },
  {
    "id": 668,
    "type": "abbreviation",
    "question": "What is the full form of BRI?",
    "answer": "Basic Rate Interface/Brain Response Interface"
  },
  {
    "id": 669,
    "type": "abbreviation",
    "question": "What is the full form of BYTE?",
    "answer": "Binary Element String"
  },
  {
    "id": 670,
    "type": "abbreviation",
    "question": "What is the full form of CAD?",
    "answer": "Computer Aided Design"
  },
  {
    "id": 671,
    "type": "abbreviation",
    "question": "What is the full form of CC:?",
    "answer": "Carbon Copy"
  },
  {
    "id": 672,
    "type": "abbreviation",
    "question": "What is the full form of CCD?",
    "answer": "Charged-Coupled Device"
  },
  {
    "id": 673,
    "type": "abbreviation",
    "question": "What is the full form of CCFT?",
    "answer": "Cold Cathode Fluorescent Tube"
  },
  {
    "id": 674,
    "type": "abbreviation",
    "question": "What is the full form of CD?",
    "answer": "Change Directory/Color Display/Compact Disk"
  },
  {
    "id": 675,
    "type": "abbreviation",
    "question": "What is the full form of CDMA?",
    "answer": "Code Division Multiple Access"
  },
  {
    "id": 676,
    "type": "abbreviation",
    "question": "What is the full form of CDOS?",
    "answer": "Concurrent Disk Operating System"
  },
  {
    "id": 677,
    "type": "abbreviation",
    "question": "What is the full form of CDR?",
    "answer": "Call Detail Record"
  },
  {
    "id": 678,
    "type": "abbreviation",
    "question": "What is the full form of CD-R?",
    "answer": "Compact Disk - Recordable"
  },
  {
    "id": 679,
    "type": "abbreviation",
    "question": "What is the full form of CD-RDx?",
    "answer": "Compact Disk - Read Only Memory Data Exchange Standard"
  },
  {
    "id": 680,
    "type": "abbreviation",
    "question": "What is the full form of CD-ROM?",
    "answer": "Compact Disk - Read Only Memory"
  },
  {
    "id": 681,
    "type": "abbreviation",
    "question": "What is the full form of CD-RTOS?",
    "answer": "Compact Disk - Real Time Operating System"
  },
  {
    "id": 682,
    "type": "abbreviation",
    "question": "What is the full form of CD-V?",
    "answer": "Compact Disk - Video"
  },
  {
    "id": 683,
    "type": "abbreviation",
    "question": "What is the full form of CD-WO?",
    "answer": "Compact Disk - Write Once"
  },
  {
    "id": 684,
    "type": "abbreviation",
    "question": "What is the full form of CERN?",
    "answer": "The European Particle Physics Laboratory"
  },
  {
    "id": 685,
    "type": "abbreviation",
    "question": "What is the full form of CFS?",
    "answer": "Common File System/Call for Service"
  },
  {
    "id": 686,
    "type": "abbreviation",
    "question": "What is the full form of CGA?",
    "answer": "Color Graphics Adapter"
  },
  {
    "id": 687,
    "type": "abbreviation",
    "question": "What is the full form of CIDR?",
    "answer": "Classless Inter-Domain Routing"
  },
  {
    "id": 688,
    "type": "abbreviation",
    "question": "What is the full form of CMOS?",
    "answer": "Complementary Metal-Oxide Semiconductor"
  },
  {
    "id": 689,
    "type": "abbreviation",
    "question": "What is the full form of CODE?",
    "answer": "Client-Server Open Development Environment"
  },
  {
    "id": 690,
    "type": "abbreviation",
    "question": "What is the full form of CODEC?",
    "answer": "Coder/Decoder + Compression/Decompression"
  },
  {
    "id": 691,
    "type": "abbreviation",
    "question": "What is the full form of COM1?",
    "answer": "First serial Port (asynchronous port)"
  },
  {
    "id": 692,
    "type": "abbreviation",
    "question": "What is the full form of CPL?",
    "answer": "Current Privilege Level"
  },
  {
    "id": 693,
    "type": "abbreviation",
    "question": "What is the full form of CRC?",
    "answer": "Cyclic Redundancy Check"
  },
  {
    "id": 694,
    "type": "abbreviation",
    "question": "What is the full form of CRT?",
    "answer": "Cathode Ray Tube"
  },
  {
    "id": 695,
    "type": "abbreviation",
    "question": "What is the full form of C/S?",
    "answer": "Client/Server"
  },
  {
    "id": 696,
    "type": "abbreviation",
    "question": "What is the full form of CSMA/CA?",
    "answer": "Carrier Sense Multiple Access/with Collision Avoidance"
  },
  {
    "id": 697,
    "type": "abbreviation",
    "question": "What is the full form of CSMA/CD?",
    "answer": "Carrier Sense Multiple Access/with Collision Detection"
  },
  {
    "id": 698,
    "type": "abbreviation",
    "question": "What is the full form of D/A?",
    "answer": "Digital to Analog"
  },
  {
    "id": 699,
    "type": "abbreviation",
    "question": "What is the full form of DAC?",
    "answer": "Digital to Analog Converter"
  },
  {
    "id": 700,
    "type": "abbreviation",
    "question": "What is the full form of DBMS?",
    "answer": "Data Base Management System"
  },
  {
    "id": 701,
    "type": "abbreviation",
    "question": "What is the full form of DCE?",
    "answer": "Data Circuit-Terminating Equipment"
  },
  {
    "id": 702,
    "type": "abbreviation",
    "question": "What is the full form of D-CHANNEL?",
    "answer": "Data Channel"
  },
  {
    "id": 703,
    "type": "abbreviation",
    "question": "What is the full form of DEL?",
    "answer": "Delete"
  },
  {
    "id": 704,
    "type": "abbreviation",
    "question": "What is the full form of DIR?",
    "answer": "Directory (file)"
  },
  {
    "id": 705,
    "type": "abbreviation",
    "question": "What is the full form of DL?",
    "answer": "Download (also D/L)"
  },
  {
    "id": 706,
    "type": "abbreviation",
    "question": "What is the full form of DMP?",
    "answer": "Dot Matrix Printer"
  },
  {
    "id": 707,
    "type": "abbreviation",
    "question": "What is the full form of DNS?",
    "answer": "Domain Naming System"
  },
  {
    "id": 708,
    "type": "abbreviation",
    "question": "What is the full form of DPI?",
    "answer": "Dots Per Inch"
  },
  {
    "id": 709,
    "type": "abbreviation",
    "question": "What is the full form of DPSK?",
    "answer": "Differential Phase Shift Keying"
  },
  {
    "id": 710,
    "type": "abbreviation",
    "question": "What is the full form of DRAM?",
    "answer": "Dynamic Random Access Memory"
  },
  {
    "id": 711,
    "type": "abbreviation",
    "question": "What is the full form of DSL?",
    "answer": "Digital Subscriber Line"
  },
  {
    "id": 712,
    "type": "abbreviation",
    "question": "What is the full form of DSP?",
    "answer": "Digital Signal Processing/Processor"
  },
  {
    "id": 713,
    "type": "abbreviation",
    "question": "What is the full form of EATA?",
    "answer": "Enhanced AT Bus Attachment"
  },
  {
    "id": 714,
    "type": "abbreviation",
    "question": "What is the full form of EBCDIC?",
    "answer": "Extended Binary Coded Decimal Interchange Code [IBM]"
  },
  {
    "id": 715,
    "type": "abbreviation",
    "question": "What is the full form of EBI?",
    "answer": "Equivalent Background Input"
  },
  {
    "id": 716,
    "type": "abbreviation",
    "question": "What is the full form of EBI?",
    "answer": "Extended Background Investigation"
  },
  {
    "id": 717,
    "type": "abbreviation",
    "question": "What is the full form of EBT?",
    "answer": "Electronic Benefits Transfer"
  },
  {
    "id": 718,
    "type": "abbreviation",
    "question": "What is the full form of EC?",
    "answer": "Electronic Commerce/Error Control"
  },
  {
    "id": 719,
    "type": "abbreviation",
    "question": "What is the full form of ECAL?",
    "answer": "Enjoy Computing And Learn"
  },
  {
    "id": 720,
    "type": "abbreviation",
    "question": "What is the full form of ECAT?",
    "answer": "Electronic Card Assembly and Test [IBM]"
  },
  {
    "id": 721,
    "type": "abbreviation",
    "question": "What is the full form of EIA?",
    "answer": "Electronic Industries Association"
  },
  {
    "id": 722,
    "type": "abbreviation",
    "question": "What is the full form of EIDE?",
    "answer": "Enhanced Integrated Drive Electronics"
  },
  {
    "id": 723,
    "type": "abbreviation",
    "question": "What is the full form of EIS?",
    "answer": "Executive Information System"
  },
  {
    "id": 724,
    "type": "abbreviation",
    "question": "What is the full form of E-MAIL?",
    "answer": "Electronic Mail"
  },
  {
    "id": 725,
    "type": "abbreviation",
    "question": "What is the full form of EPROM?",
    "answer": "Electrically Programmable Read Only Memory"
  },
  {
    "id": 726,
    "type": "abbreviation",
    "question": "What is the full form of ETB?",
    "answer": "End of Transmission Block"
  },
  {
    "id": 727,
    "type": "abbreviation",
    "question": "What is the full form of ETC?",
    "answer": "Electronic Toll Collection"
  },
  {
    "id": 728,
    "type": "abbreviation",
    "question": "What is the full form of FD?",
    "answer": "Floppy Disk/Floppy Drive/Full Duplex"
  },
  {
    "id": 729,
    "type": "abbreviation",
    "question": "What is the full form of FDM?",
    "answer": "Frequency-Division Multiplexing"
  },
  {
    "id": 730,
    "type": "abbreviation",
    "question": "What is the full form of FET?",
    "answer": "Field Effect Transistor"
  },
  {
    "id": 731,
    "type": "abbreviation",
    "question": "What is the full form of FF?",
    "answer": "Flip-Flop/Form Feed"
  },
  {
    "id": 732,
    "type": "abbreviation",
    "question": "What is the full form of FIFO?",
    "answer": "First-In, First-Out"
  },
  {
    "id": 733,
    "type": "abbreviation",
    "question": "What is the full form of FILO?",
    "answer": "First-In, Last-Out"
  },
  {
    "id": 734,
    "type": "abbreviation",
    "question": "What is the full form of FIPS?",
    "answer": "Federal Information Processing Standard"
  },
  {
    "id": 735,
    "type": "abbreviation",
    "question": "What is the full form of FTP?",
    "answer": "File Transfer Protocol [Internet]"
  },
  {
    "id": 736,
    "type": "abbreviation",
    "question": "What is the full form of GAPI?",
    "answer": "Gateway Application Programming Interface"
  },
  {
    "id": 737,
    "type": "abbreviation",
    "question": "What is the full form of GEO?",
    "answer": "Geostationary Earth Orbit"
  },
  {
    "id": 738,
    "type": "abbreviation",
    "question": "What is the full form of GIGO?",
    "answer": "Garbage In, Garbage Out"
  },
  {
    "id": 739,
    "type": "abbreviation",
    "question": "What is the full form of GIS?",
    "answer": "Geographic Information System"
  },
  {
    "id": 740,
    "type": "abbreviation",
    "question": "What is the full form of GND?",
    "answer": "Ground (signal/system)"
  },
  {
    "id": 741,
    "type": "abbreviation",
    "question": "What is the full form of GNN?",
    "answer": "Global Network Navigator"
  },
  {
    "id": 742,
    "type": "abbreviation",
    "question": "What is the full form of GNU?",
    "answer": "Gnu's Not Unix (operating system)"
  },
  {
    "id": 743,
    "type": "abbreviation",
    "question": "What is the full form of GOSIP?",
    "answer": "Government Open Systems Interconnection Profile"
  },
  {
    "id": 744,
    "type": "abbreviation",
    "question": "What is the full form of GOV?",
    "answer": "Government(organization Domain name)"
  },
  {
    "id": 745,
    "type": "abbreviation",
    "question": "What is the full form of GP?",
    "answer": "Gas Plasma/General Purpose"
  },
  {
    "id": 746,
    "type": "abbreviation",
    "question": "What is the full form of GSM?",
    "answer": "Global System for Mobile"
  },
  {
    "id": 747,
    "type": "abbreviation",
    "question": "What is the full form of GUI?",
    "answer": "Graphical User Interface"
  },
  {
    "id": 748,
    "type": "abbreviation",
    "question": "What is the full form of HD?",
    "answer": "Hard Disk/High Density"
  },
  {
    "id": 749,
    "type": "abbreviation",
    "question": "What is the full form of HDTV?",
    "answer": "High Definition Television"
  },
  {
    "id": 750,
    "type": "abbreviation",
    "question": "What is the full form of HIFD?",
    "answer": "High-Density Floppy Disk"
  },
  {
    "id": 751,
    "type": "abbreviation",
    "question": "What is the full form of HPLJ?",
    "answer": "Hewlett-Packard Laser Jet"
  },
  {
    "id": 752,
    "type": "abbreviation",
    "question": "What is the full form of HTML?",
    "answer": "Hypertext Markup Language"
  },
  {
    "id": 753,
    "type": "abbreviation",
    "question": "What is the full form of HTTP?",
    "answer": "Hypertext Transport Protocol"
  },
  {
    "id": 754,
    "type": "abbreviation",
    "question": "What is the full form of IBM?",
    "answer": "International Business Machines (Corporation)"
  },
  {
    "id": 755,
    "type": "abbreviation",
    "question": "What is the full form of IETF?",
    "answer": "Internet Engineering Task Force"
  },
  {
    "id": 756,
    "type": "abbreviation",
    "question": "What is the full form of IGMP?",
    "answer": "Internet Group Multicast Protocol"
  },
  {
    "id": 757,
    "type": "abbreviation",
    "question": "What is the full form of IMG?",
    "answer": "Image"
  },
  {
    "id": 758,
    "type": "abbreviation",
    "question": "What is the full form of I/O?",
    "answer": "Input/output"
  },
  {
    "id": 759,
    "type": "abbreviation",
    "question": "What is the full form of IP?",
    "answer": "Instruction Pointer/Internet Protocol"
  },
  {
    "id": 760,
    "type": "abbreviation",
    "question": "What is the full form of IS?",
    "answer": "Internet Servicer"
  },
  {
    "id": 761,
    "type": "abbreviation",
    "question": "What is the full form of ISBN?",
    "answer": "International Standard Book Number"
  },
  {
    "id": 762,
    "type": "abbreviation",
    "question": "What is the full form of ISI?",
    "answer": "Internally Specified Index"
  },
  {
    "id": 763,
    "type": "abbreviation",
    "question": "What is the full form of ISC?",
    "answer": "Instruction Set Computer/Inter-Systems Communication"
  },
  {
    "id": 764,
    "type": "abbreviation",
    "question": "What is the full form of ISD?",
    "answer": "Image Section Descriptor"
  },
  {
    "id": 765,
    "type": "abbreviation",
    "question": "What is the full form of ISD?",
    "answer": "Instructional Systems Design"
  },
  {
    "id": 766,
    "type": "abbreviation",
    "question": "What is the full form of ISDN?",
    "answer": "Integrated Services Digital Network"
  },
  {
    "id": 767,
    "type": "abbreviation",
    "question": "What is the full form of ISO?",
    "answer": "International Standards Organization"
  },
  {
    "id": 768,
    "type": "abbreviation",
    "question": "What is the full form of OSI?",
    "answer": "Open Systems Interconnection"
  },
  {
    "id": 769,
    "type": "abbreviation",
    "question": "What is the full form of ISP?",
    "answer": "Internet Service Provider"
  },
  {
    "id": 770,
    "type": "abbreviation",
    "question": "What is the full form of ITV?",
    "answer": "Interactive Television"
  },
  {
    "id": 771,
    "type": "abbreviation",
    "question": "What is the full form of IVR?",
    "answer": "Interactive Voice Response"
  },
  {
    "id": 772,
    "type": "abbreviation",
    "question": "What is the full form of JFET?",
    "answer": "Junction Field Effect Transistor"
  },
  {
    "id": 773,
    "type": "abbreviation",
    "question": "What is the full form of JPEG?",
    "answer": "Joint Photographic Experts Group"
  },
  {
    "id": 774,
    "type": "abbreviation",
    "question": "What is the full form of LAN?",
    "answer": "Local Area Network"
  },
  {
    "id": 775,
    "type": "abbreviation",
    "question": "What is the full form of LASER?",
    "answer": "Light Amplification by Stimulated Emission of Radiation"
  },
  {
    "id": 776,
    "type": "abbreviation",
    "question": "What is the full form of LCD?",
    "answer": "Liquid Crystal Display"
  },
  {
    "id": 777,
    "type": "abbreviation",
    "question": "What is the full form of LCR?",
    "answer": "Line Control Register"
  },
  {
    "id": 778,
    "type": "abbreviation",
    "question": "What is the full form of LED?",
    "answer": "Light Emitting Diode"
  },
  {
    "id": 779,
    "type": "abbreviation",
    "question": "What is the full form of LIPS?",
    "answer": "Logical Inferences Per Second"
  },
  {
    "id": 780,
    "type": "abbreviation",
    "question": "What is the full form of LLC?",
    "answer": "Logical Link Control"
  },
  {
    "id": 781,
    "type": "abbreviation",
    "question": "What is the full form of LPD?",
    "answer": "Line Printer Daemon"
  },
  {
    "id": 782,
    "type": "abbreviation",
    "question": "What is the full form of Mac?",
    "answer": "Macintosh"
  },
  {
    "id": 783,
    "type": "abbreviation",
    "question": "What is the full form of MAC?",
    "answer": "Media/Medium Access Control"
  },
  {
    "id": 784,
    "type": "abbreviation",
    "question": "What is the full form of MAh?",
    "answer": "Mili ampere hour"
  },
  {
    "id": 785,
    "type": "abbreviation",
    "question": "What is the full form of MD?",
    "answer": "Make Directory + Monochrome Display"
  },
  {
    "id": 786,
    "type": "abbreviation",
    "question": "What is the full form of MIPS?",
    "answer": "Million Instructions Per Second"
  },
  {
    "id": 787,
    "type": "abbreviation",
    "question": "What is the full form of MODEM?",
    "answer": "Modulator Demodulator"
  },
  {
    "id": 788,
    "type": "abbreviation",
    "question": "What is the full form of MOS?",
    "answer": "Metal Oxide Semiconductor/Magneto-Optic Storage"
  },
  {
    "id": 789,
    "type": "abbreviation",
    "question": "What is the full form of MOSFET?",
    "answer": "Metal Oxide Semiconductor Field Effect Transistor"
  },
  {
    "id": 790,
    "type": "abbreviation",
    "question": "What is the full form of MPEG?",
    "answer": "Moving Picture Experts Group"
  },
  {
    "id": 791,
    "type": "abbreviation",
    "question": "What is the full form of MSB?",
    "answer": "Most Significant Bit"
  },
  {
    "id": 792,
    "type": "abbreviation",
    "question": "What is the full form of MS-DOS?",
    "answer": "Microsoft - Disk Operating System"
  },
  {
    "id": 793,
    "type": "abbreviation",
    "question": "What is the full form of MUX?",
    "answer": "Multiplexer"
  },
  {
    "id": 794,
    "type": "abbreviation",
    "question": "What is the full form of NAK?",
    "answer": "Negative Acknowledgment"
  },
  {
    "id": 795,
    "type": "abbreviation",
    "question": "What is the full form of NASA?",
    "answer": "National Aeronautics and Space Administration"
  },
  {
    "id": 796,
    "type": "abbreviation",
    "question": "What is the full form of NASDAQ?",
    "answer": "National Association of Securities Dealers"
  },
  {
    "id": 797,
    "type": "abbreviation",
    "question": "What is the full form of AQ?",
    "answer": "Automatic Quotation"
  },
  {
    "id": 798,
    "type": "abbreviation",
    "question": "What is the full form of NCC?",
    "answer": "Network Control Center"
  },
  {
    "id": 799,
    "type": "abbreviation",
    "question": "What is the full form of NIC?",
    "answer": "National Information Center"
  },
  {
    "id": 800,
    "type": "abbreviation",
    "question": "What is the full form of NIC?",
    "answer": "Network Interface Card"
  },
  {
    "id": 801,
    "type": "abbreviation",
    "question": "What is the full form of NMOS?",
    "answer": "Negative Channel Metal-Oxide Semiconductor"
  },
  {
    "id": 802,
    "type": "abbreviation",
    "question": "What is the full form of NRZ?",
    "answer": "Not Return to Zero"
  },
  {
    "id": 803,
    "type": "abbreviation",
    "question": "What is the full form of NRZI?",
    "answer": "Non Return to Zero Inverted"
  },
  {
    "id": 804,
    "type": "abbreviation",
    "question": "What is the full form of NTFS?",
    "answer": "New Technology File System"
  },
  {
    "id": 805,
    "type": "abbreviation",
    "question": "What is the full form of NTSC?",
    "answer": "National Television Standards Committee"
  },
  {
    "id": 806,
    "type": "abbreviation",
    "question": "What is the full form of NVRAM?",
    "answer": "Non-Volatile Random Access Memory"
  },
  {
    "id": 807,
    "type": "abbreviation",
    "question": "What is the full form of OCR?",
    "answer": "Optical Character Recognition"
  },
  {
    "id": 808,
    "type": "abbreviation",
    "question": "What is the full form of OMR?",
    "answer": "Optical Mark Recognition"
  },
  {
    "id": 809,
    "type": "abbreviation",
    "question": "What is the full form of ORACLE?",
    "answer": "On-Line Inquiry and Report Generator"
  },
  {
    "id": 810,
    "type": "abbreviation",
    "question": "What is the full form of OS?",
    "answer": "Operating System"
  },
  {
    "id": 811,
    "type": "abbreviation",
    "question": "What is the full form of OSI?",
    "answer": "Open Systems Interconnection"
  },
  {
    "id": 812,
    "type": "abbreviation",
    "question": "What is the full form of PABX?",
    "answer": "Private Automatic Branch Exchange"
  },
  {
    "id": 813,
    "type": "abbreviation",
    "question": "What is the full form of PAD?",
    "answer": "Packet Assembler/Disassembler"
  },
  {
    "id": 814,
    "type": "abbreviation",
    "question": "What is the full form of PAL?",
    "answer": "Programming Assembly Language/Phase Alternating Line"
  },
  {
    "id": 815,
    "type": "abbreviation",
    "question": "What is the full form of PAM?",
    "answer": "Pulse Amplitude Modulation"
  },
  {
    "id": 816,
    "type": "abbreviation",
    "question": "What is the full form of PBX?",
    "answer": "Private Branch Exchange"
  },
  {
    "id": 817,
    "type": "abbreviation",
    "question": "What is the full form of PC?",
    "answer": "Personal Computer/Printed Circuit/Program Counter"
  },
  {
    "id": 818,
    "type": "abbreviation",
    "question": "What is the full form of PCB?",
    "answer": "Printed Circuit Board/Program Control Block"
  },
  {
    "id": 819,
    "type": "abbreviation",
    "question": "What is the full form of PCM?",
    "answer": "Pulse Code Modulation"
  },
  {
    "id": 820,
    "type": "abbreviation",
    "question": "What is the full form of PDA?",
    "answer": "Personal Digital Assistant"
  },
  {
    "id": 821,
    "type": "abbreviation",
    "question": "What is the full form of PDF?",
    "answer": "Package Definition File/Portable Document Format"
  },
  {
    "id": 822,
    "type": "abbreviation",
    "question": "What is the full form of PGA?",
    "answer": "Pin Grid Array/Professional Graphics Adapter"
  },
  {
    "id": 823,
    "type": "abbreviation",
    "question": "What is the full form of PII?",
    "answer": "Program Integrated Information"
  },
  {
    "id": 824,
    "type": "abbreviation",
    "question": "What is the full form of PIPO?",
    "answer": "Parallel In, Parallel Out"
  },
  {
    "id": 825,
    "type": "abbreviation",
    "question": "What is the full form of PIXEL?",
    "answer": "Picture Element"
  },
  {
    "id": 826,
    "type": "abbreviation",
    "question": "What is the full form of PNG?",
    "answer": "Portable Network Graphics"
  },
  {
    "id": 827,
    "type": "abbreviation",
    "question": "What is the full form of PPP?",
    "answer": "Point-to-Point Protocol"
  },
  {
    "id": 828,
    "type": "abbreviation",
    "question": "What is the full form of PRISM?",
    "answer": "Photo-Refractive Information Storage Material"
  },
  {
    "id": 829,
    "type": "abbreviation",
    "question": "What is the full form of PROM?",
    "answer": "Programmable Read Only Memory"
  },
  {
    "id": 830,
    "type": "abbreviation",
    "question": "What is the full form of PSTN?",
    "answer": "Public Switched Telephone Network"
  },
  {
    "id": 831,
    "type": "abbreviation",
    "question": "What is the full form of PSU?",
    "answer": "Power Supply Unit"
  },
  {
    "id": 832,
    "type": "abbreviation",
    "question": "What is the full form of QAM?",
    "answer": "Quadrature Amplitude Modulation"
  },
  {
    "id": 833,
    "type": "abbreviation",
    "question": "What is the full form of RAM?",
    "answer": "Random Access Memory"
  },
  {
    "id": 834,
    "type": "abbreviation",
    "question": "What is the full form of RAMDAC?",
    "answer": "Random Access Memory Digital-to-Analog Converter"
  },
  {
    "id": 835,
    "type": "abbreviation",
    "question": "What is the full form of RFI?",
    "answer": "Radio Frequency Interference"
  },
  {
    "id": 836,
    "type": "abbreviation",
    "question": "What is the full form of RPPROM?",
    "answer": "Reprogrammable PROM"
  },
  {
    "id": 837,
    "type": "abbreviation",
    "question": "What is the full form of RPT?",
    "answer": "Repeat"
  },
  {
    "id": 838,
    "type": "abbreviation",
    "question": "What is the full form of RSAC?",
    "answer": "Recreational Software Advisory Council"
  },
  {
    "id": 839,
    "type": "abbreviation",
    "question": "What is the full form of R/T?",
    "answer": "Receive/Transmit"
  },
  {
    "id": 840,
    "type": "abbreviation",
    "question": "What is the full form of R/W?",
    "answer": "Read/Write"
  },
  {
    "id": 841,
    "type": "abbreviation",
    "question": "What is the full form of RWM?",
    "answer": "Read-Write Memory"
  },
  {
    "id": 842,
    "type": "abbreviation",
    "question": "What is the full form of SCR?",
    "answer": "Silicon Controlled Rectifier"
  },
  {
    "id": 843,
    "type": "abbreviation",
    "question": "What is the full form of SD?",
    "answer": "Super Density"
  },
  {
    "id": 844,
    "type": "abbreviation",
    "question": "What is the full form of SIPP?",
    "answer": "Single In-line Pin Package"
  },
  {
    "id": 845,
    "type": "abbreviation",
    "question": "What is the full form of SMD?",
    "answer": "Surface Mounted Device"
  },
  {
    "id": 846,
    "type": "abbreviation",
    "question": "What is the full form of S/N?",
    "answer": "Signal-to-Noise Ratio"
  },
  {
    "id": 847,
    "type": "abbreviation",
    "question": "What is the full form of SONET?",
    "answer": "Synchronous Optical Network"
  },
  {
    "id": 848,
    "type": "abbreviation",
    "question": "What is the full form of SST?",
    "answer": "Spread-Spectrum Technology"
  },
  {
    "id": 849,
    "type": "abbreviation",
    "question": "What is the full form of TCP/IP?",
    "answer": "Transmission Control Protocol/Internet Protocol"
  },
  {
    "id": 850,
    "type": "abbreviation",
    "question": "What is the full form of TDMA?",
    "answer": "Time Division Multiple Access"
  },
  {
    "id": 851,
    "type": "abbreviation",
    "question": "What is the full form of TFT?",
    "answer": "Thin-Film Transistor (screens)"
  },
  {
    "id": 852,
    "type": "abbreviation",
    "question": "What is the full form of UA?",
    "answer": "User Agent/User Area"
  },
  {
    "id": 853,
    "type": "abbreviation",
    "question": "What is the full form of UART?",
    "answer": "Universal Asynchronous Receiver/Transmitter"
  },
  {
    "id": 854,
    "type": "abbreviation",
    "question": "What is the full form of UDP?",
    "answer": "User Datagram Protocol"
  },
  {
    "id": 855,
    "type": "abbreviation",
    "question": "What is the full form of UNIX?",
    "answer": "(AT&T Bell Laboratories Operating System)"
  },
  {
    "id": 856,
    "type": "abbreviation",
    "question": "What is the full form of UPS?",
    "answer": "Uninterruptible Power Supply"
  },
  {
    "id": 857,
    "type": "abbreviation",
    "question": "What is the full form of URL?",
    "answer": "Uniform Resource Locator"
  },
  {
    "id": 858,
    "type": "abbreviation",
    "question": "What is the full form of USART?",
    "answer": "Universal Synchronous-Asynchronous Receiver/Transmitter"
  },
  {
    "id": 859,
    "type": "abbreviation",
    "question": "What is the full form of USB?",
    "answer": "Universal Serial Bus"
  },
  {
    "id": 860,
    "type": "abbreviation",
    "question": "What is the full form of USRT?",
    "answer": "Universal Synchronous Receiver/Transmitter"
  }
];

// Quick reference metadata used by the Home screen
const QUIZ_META = {
  total: QUIZ_QUESTIONS.length,
  fillCount: QUIZ_QUESTIONS.filter(function (q) { return q.type === 'fill'; }).length,
  abbrCount: QUIZ_QUESTIONS.filter(function (q) { return q.type === 'abbreviation'; }).length
};
