import content from "./index.md?raw";
import {questions} from './questions.jsx';
import { Checkpoint } from '@nss-workshops/nss-core';

export default {
    id: "page-1",
    title: "Page one Title",
    description: "Page one Description",
    previousChapterId: null,
    nextChapterId: "page-2",
    exercise: null,
    content,
    quiz: {component: () => <Checkpoint questions={questions}/>}
}