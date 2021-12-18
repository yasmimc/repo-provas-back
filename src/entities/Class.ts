import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Subject from "./Subject";
import Teacher from "./Teacher";

@Entity("classes")
export default class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teacher, (teacher) => teacher.id)
    teachers: Teacher;

    @ManyToOne(() => Subject, (subject) => subject.id)
    subjects: Subject;
}
