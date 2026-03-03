import content from "./index.md?raw";
import {questions} from './questions.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
    id: "ocr-page-3",
    title: "Advanced Pytesseract",
    description: "Page four Description",
    previousChapterId: "ocr-page-2",
    nextChapterId: "ocr-page-4",
    exercise: null,
    content,
    quiz: {component: () => <Checkpoint questions={questions}/>}
}