import { QUESTION_TYPES } from '@nss-workshops/nss-core';


export const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following is an example of unstructured data?</p>,
    answers: [
        "A CSV file of monthly sales",
        "An invoice template with fixed fields",
        "A contract with free-form clauses",
        "A spreadsheet of employee records"
    ],
    correctAnswer: 2,
    explanation: "A contract with free-form clauses is unstructured because it does not have a fixed schema or predictable layout, unlike structured or semi-structured documents."
},
{
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What is the purpose of processing text into a spaCy Doc object?</p>,
    answers: [
        "To store the text as a string",
        "To annotate the text with linguistic features such as tokens, entities, and dependencies",
        "To compress the text for storage",
        "To convert the text into CSV format"
    ],
    correctAnswer: 1,
    explanation: "Processing text with spaCy creates a Doc object that contains tokenization, part-of-speech tags, named entities, and syntactic dependencies, allowing further analysis and extraction."
},
{
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following entity types can spaCy recognize out-of-the-box?</p>,
    answers: [
        "INVOICE_NUMBER, PRODUCT_CODE, TAX_RATE",
        "PERSON, ORG, DATE, MONEY, GPE",
        "HTML_TAG, CSS_CLASS, JSON_KEY",
        "USERNAME, PASSWORD, API_KEY"
    ],
    correctAnswer: 1,
    explanation: "spaCy’s pre-trained models include standard named entity recognition types such as PERSON (people), ORG (organizations), DATE, MONEY, and GPE (geopolitical entities)."
},
{
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Why might spaCy be preferred over regex for extracting information from unstructured text?</p>,
    answers: [
        "Because spaCy always runs faster than regex",
        "Because spaCy can recognize entities and context even when formatting varies",
        "Because regex cannot match any numbers",
        "Because spaCy requires no installation or setup"
    ],
    correctAnswer: 1,
    explanation: "spaCy uses a language model that can understand context and recognize entities in free-form, variable text, whereas regex can fail if formatting or phrasing changes."
},
{
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following best describes the output of analyzing parts of speech and dependencies with spaCy?</p>,
    answers: [
        "A list of named entities only",
        "A table of numerical values extracted from text",
        "Annotations for each token including POS tags and syntactic dependencies",
        "An HTML rendering of the text"
    ],
    correctAnswer: 2,
    explanation: "Analyzing parts of speech and dependencies in spaCy provides annotations for each token, showing its POS (part of speech) and syntactic dependency, which can be used for more complex text analysis."
}
];