import faker from "faker";
import { getCategories } from "../utils/categoriesRepository";
import { getClasses } from "../utils/classRepository";

export async function createExam() {
    const categories = await getCategories();
    const categoriesIds = categories.map((category: any) => category.id);
    const randomCategoryId =
        categoriesIds[Math.floor(Math.random() * categoriesIds.length)];
    const classes = await getClasses();
    const randomClassId = Math.floor(Math.random() * classes.length);

    return {
        name: faker.lorem.words(),
        link: faker.internet.url(),
        category: randomCategoryId,
        class: classes[randomClassId].id,
        teacher: classes[randomClassId].teacher_id,
        subject: classes[randomClassId].subject_id,
    };
}
