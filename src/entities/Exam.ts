import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import Class from "./Class";
import ExamCategory from "./ExamCategory";

@Entity("exams")
export default class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @ManyToOne(() => Class, (c) => c.id, { eager: true })
    @JoinColumn({ name: "class_id" })
    class: Class;

    @ManyToOne(() => ExamCategory, (examCategory) => examCategory.id, {
        eager: true,
    })
    @JoinColumn({ name: "category" })
    category: ExamCategory;
}
