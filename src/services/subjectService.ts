import { getRepository } from "typeorm";

import Subject from "../entities/Subject";

export async function fetchSubjects() {
    const subjects = await getRepository(Subject).find({
        select: ["id", "name", "period"],
    });

    return subjects;
}
