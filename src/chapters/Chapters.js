import Chapter from "./Chapter";

import ChapterOne from "./ChapterOne";
import ChapterTwo from './ChapterTwo';
import ChapterThree from "./ChapterThree";
import ChapterFour from "./ChapterFour";
import ChapterFive from "./ChapterFive";
import ChapterSix from "./ChapterSix";
import ChapterSeven from "./ChapterSeven";
import ChapterEight from "./ChapterEight";

const Chapters = [
    new Chapter("/1", ChapterOne),
    new Chapter("/2", ChapterTwo),
    new Chapter("/3", ChapterThree),
    new Chapter("/4", ChapterFour),
    new Chapter("/5", ChapterFive),
    new Chapter("/6", ChapterSix),
    new Chapter("/7", ChapterSeven),
    new Chapter("/8", ChapterEight)
];

export default Chapters;
