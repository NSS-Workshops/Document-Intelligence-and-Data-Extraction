import content from "./index.md?raw";
import {questions} from './questions.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
    id: "spacy-1",
    title: "Working with Unstructred Text Using spaCy",
    description: "Page one Description",
    previousChapterId: null,
    nextChapterId: "spacy-2",
    exercise: null,
    content,
    quiz: {component: () => <Checkpoint questions={questions}/>}
}