import { getRepository } from "typeorm";

import Exam from "../entities/Exam";

export async function fetchExams(teacher: any, subject: any) {
    let exams = await getRepository(Exam).find({
        select: ["id", "name", "link"],
        relations: ["class", "category"],
    });

    const categoriesAux = exams.map((exam) => exam.category.name);
    const categories = categoriesAux.filter(
        (category, index) => categoriesAux.indexOf(category) === index
    );

    if (teacher) {
        exams = exams.filter((exam) => exam.class.teacher.name === teacher);
    }

    if (subject) {
        exams = exams.filter((exam) => exam.class.subject.name === subject);
    }

    const examsByCategory = categories.map((category) => ({
        category,
        exams: exams.filter((exam) => exam.category.name === category),
    }));

    return examsByCategory;
}
