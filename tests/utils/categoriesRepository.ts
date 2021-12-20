import { getManager } from "typeorm";

export async function getCategories() {
    try {
        const result = await getManager().query(
            `SELECT id FROM exam_categories;`
        );
        if (!result) {
            console.log("Fail to getCategories at tests");
        }
        return result;
    } catch (error) {
        console.log("Fail to getCategories at tests");
        console.log(error.message);
    }
}
