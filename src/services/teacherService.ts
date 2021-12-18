import { getRepository } from "typeorm";
import Exam from "../entities/Exam";

import Teacher from "../entities/Teacher";

export async function fetchTeachers() {
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

    return teachers;
}
