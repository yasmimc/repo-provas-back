import { getRepository } from "typeorm";
import Class from "../entities/Class";
import Exam from "../entities/Exam";

import Teacher from "../entities/Teacher";

export async function fetchTeachers(subject: any) {
    if (subject) {
        const classes = await getRepository(Class).find({
            select: ["id"],
            relations: ["subject", "teacher"],
        });
        const teachersBySubject = classes
            .filter((c) => c.subject.name === subject)
            .map((c) => c.teacher);
        return teachersBySubject.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name >= b.name) return 1;
            return 0;
        });
    }

    const teachers = await getRepository(Teacher).find({
        select: ["id", "name"],
    });

    for (let i = 0; i < teachers.length; i++) {
        const examsCount = await getRepository(Exam)
            .createQueryBuilder("exams")
            .innerJoinAndSelect("exams.class", "classes")
            .where("classes.teacher_id = :teacherId", {
                teacherId: teachers[i].id,
            })
            .getCount();
        teachers[i].exams = examsCount;
    }

    return teachers.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name >= b.name) return 1;
        return 0;
    });
}
