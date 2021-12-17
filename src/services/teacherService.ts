import { getRepository } from "typeorm";

import Teacher from "../entities/Teacher";

export async function fetchTeachers() {
    const teachers = await getRepository(Teacher).find({
        select: ["id", "name"],
    });

    return teachers;
}
