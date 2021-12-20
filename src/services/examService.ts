import { getConnection, getRepository } from "typeorm";
import Class from "../entities/Class";

import Exam from "../entities/Exam";
import ExamCategory from "../entities/ExamCategory";

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

    const examsByCategory = categories.map((category) => {
        const categoryExams = exams.filter(
            (exam) => exam.category.name === category
        );
        if (categoryExams.length)
            return {
                category,
                exams: exams.filter((exam) => exam.category.name === category),
            };
    });

    return examsByCategory.filter((exam) => exam);
}

export async function fetchExamsCategories() {
    const examsCategories = await getRepository(ExamCategory).find({
        select: ["id", "name"],
    });

    return examsCategories;
}

export async function insertExam(newExam: any) {
    const classes = await getRepository(Class).find({
        select: ["id", "teacher", "subject"],
        relations: ["teacher", "subject"],
    });

    const examClass = classes.find(
        (c) =>
            c.teacher.id === newExam.teacher && c.subject.id === newExam.subject
    );

    delete newExam.teacher;
    delete newExam.subject;

    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Exam)
        .values([{ ...newExam, class: examClass.id }])
        .execute();
}
