import { getRepository } from "typeorm";

import Exam from "../entities/Exam";

export async function fetchExams(teacher: any, subject: any) {
    const exams = await getRepository(Exam).find({
        select: ["id", "name", "link"],
        relations: ["class"],
    });

    if (teacher) {
        return exams.filter((exam) => exam.class.teacher.name === teacher);
    }

    if (subject) {
        return exams.filter((exam) => exam.class.subject.name === subject);
    }

    return exams;
}
