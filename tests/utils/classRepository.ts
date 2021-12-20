import { getManager } from "typeorm";

export async function getClasses() {
    try {
        const result = await getManager().query(`SELECT * FROM classes;`);
        if (!result) {
            console.log("Fail to getClasses at tests");
        }
        return result;
    } catch (error) {
        console.log("Fail to getClasses at tests");
        console.log(error.message);
    }
}
