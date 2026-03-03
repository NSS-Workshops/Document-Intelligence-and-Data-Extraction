import { QUESTION_TYPES } from '@nss-workshops/nss-core';


export const questions = [
{
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following best describes what OCR does?</p>,
    answers: [
      "Extracts structured invoice totals and dates",
      "Converts images containing text into machine-readable text",
      "Understands document meaning and intent",
      "Automatically validates extracted data"
    ],
    correctAnswer: 1,
    explanation: "OCR converts pixels into characters, turning images of text into machine-readable text. It does not understand meaning, extract structured fields, or validate data."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>In a document intelligence workflow, what comes immediately after OCR?</p>,
    answers: [
      "Storage in a database",
      "Parsing/Post-Processing",
      "Model retraining",
      "Image cropping"
    ],
    correctAnswer: 1,
    explanation: "After OCR converts images into raw text, the next step is parsing or post-processing, where structure is extracted from the text."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What is the main purpose of the pytesseract library?</p>,
    answers: [
      "It replaces Tesseract entirely",
      "It trains custom OCR models",
      "It provides a Python interface to the Tesseract engine",
      "It stores OCR results in a database"
    ],
    correctAnswer: 2,
    explanation: "Pytesseract is a Python wrapper that allows Python code to interact with the Tesseract OCR engine."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What does the image_to_string() function return?</p>,
    answers: [
      "A pandas DataFrame",
      "A JSON object",
      "A string of recognized text",
      "A dictionary of bounding boxes"
    ],
    correctAnswer: 2,
    explanation: "The image_to_string() function returns a string containing the recognized text extracted from the image."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>When using pytesseract.image_to_data() with output_type=pytesseract.Output.DATAFRAME, what does level = 5 represent?</p>,
    answers: [
      "Page",
      "Block",
      "Line",
      "Word"
    ],
    correctAnswer: 3,
    explanation: "In Tesseract’s document hierarchy, level 5 corresponds to the word level (Level 1 = Page, 2 = Block, 3 = Paragraph, 4 = Line, 5 = Word)."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which columns from image_to_data() help you locate where text appears in an image?</p>,
    answers: [
      "text and level",
      "left, top, width, height",
      "config and psm",
      "page_num and block_num"
    ],
    correctAnswer: 1,
    explanation: "The left, top, width, and height columns provide bounding box coordinates that indicate where each word appears in the image."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What is the main difference between PSM 3 and PSM 6 in Tesseract?</p>,
    answers: [
      "PSM 3 treats the document as a single word",
      "PSM 6 performs OCR faster than PSM 3",
      "PSM 6 treats the document as a single uniform block of text",
      "PSM 3 disables text recognition"
    ],
    correctAnswer: 2,
    explanation: "PSM 6 treats the entire image as a single uniform block of text, preserving lines but not segmenting into multiple blocks. PSM 3 performs automatic page segmentation by default."
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Why might you crop an image after using image_to_data()?</p>,
    answers: [
      "To train a new OCR model",
      "To focus on a specific block, line, or word",
      "To convert text into JSON",
      "To validate extracted totals"
    ],
    correctAnswer: 1,
    explanation: "After identifying where text appears using bounding box coordinates, cropping allows you to isolate and analyze a specific region of the document."
  }
];