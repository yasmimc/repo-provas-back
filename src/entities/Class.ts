import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Subject from "./Subject";
import Teacher from "./Teacher";

@Entity("classes")
export default class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Teacher, (teacher) => teacher.id, { eager: true })
    @JoinColumn({ name: "teacher_id" })
    teacher: Teacher;

    @ManyToOne(() => Subject, (subject) => subject.id, { eager: true })
    @JoinColumn({ name: "subject_id" })
    subject: Subject;
}
