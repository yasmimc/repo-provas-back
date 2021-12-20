import { getManager } from "typeorm";

export async function insertExam(exam: any) {
    try {
        const result = await getManager().query(
            `INSERT INTO exams(name, link, class_id, category) VALUES('${exam.name}', '${exam.link}', ${exam.class}, ${exam.category});`
        );
        if (!result) {
            console.log("Fail to insertExam at tests");
        }
    } catch (error) {
        console.log("Fail to insertExam at tests");
        console.log(error.message);
    }
}
