import { getRepository } from "typeorm";
import Exam from "../entities/Exam";

import Subject from "../entities/Subject";

export async function fetchSubjects() {
    const subjects = await getRepository(Subject).find({
        select: ["id", "name", "period"],
    });

    for (let i = 0; i < subjects.length; i++) {
        const examsCount = await getRepository(Exam)
            .createQueryBuilder("exams")
            .innerJoinAndSelect("exams.class", "classes")
            .where("classes.subject_id = :subjectId", {
                subjectId: subjects[i].id,
            })
            .getCount();
        subjects[i].exams = examsCount;
    }

    return subjects;
}
