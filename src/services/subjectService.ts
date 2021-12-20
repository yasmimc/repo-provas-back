import { getRepository } from "typeorm";
import Exam from "../entities/Exam";

import Subject from "../entities/Subject";

export async function fetchSubjects() {
    const subjects = await getRepository(Subject).find({
        select: ["id", "name", "period"],
    });

    const periodsAux = subjects.map((subject) => subject.period);
    const periods = periodsAux.filter(
        (period, index) => periodsAux.indexOf(period) === index
    );
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

    return periods.map((period) => ({
        period,
        subjects: subjects
            .filter((subject) => subject.period === period)
            .sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name >= b.name) return 1;
                return 0;
            }),
    }));
}
