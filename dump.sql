    CREATE TABLE "subjects" (
        "id" serial NOT NULL,
        "period" int NOT NULL,
        "name" varchar(255) NOT NULL,
        CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
    ) WITH (
    OIDS=FALSE
    );



    CREATE TABLE "exams" (
        "id" serial NOT NULL,
        "class_id" int NOT NULL,
        "category" int NOT NULL,
        "name" varchar(255) NOT NULL,
        "link" varchar(255) NOT NULL,
        CONSTRAINT "exams_pk" PRIMARY KEY ("id")
    ) WITH (
    OIDS=FALSE
    );



    CREATE TABLE "teachers" (
        "id" serial NOT NULL,
        "name" varchar(255) NOT NULL,
        CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
    ) WITH (
    OIDS=FALSE
    );



    CREATE TABLE "exam_categories" (
        "id" serial NOT NULL,
        "name" varchar(255) NOT NULL,
        CONSTRAINT "exam_categories_pk" PRIMARY KEY ("id")
    ) WITH (
    OIDS=FALSE
    );



    CREATE TABLE "classes" (
        "id" serial NOT NULL,
        "subject_id" int NOT NULL,
        "teacher_id" int NOT NULL,
        CONSTRAINT "classes_pk" PRIMARY KEY ("id")
    ) WITH (
    OIDS=FALSE
    );




    ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("class_id") REFERENCES "classes"("id");
    ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("category") REFERENCES "exam_categories"("id");



    ALTER TABLE "classes" ADD CONSTRAINT "classes_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
    ALTER TABLE "classes" ADD CONSTRAINT "classes_fk1" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");



INSERT INTO teachers (name) VALUES ('Antonio Rodrigues'), ('Vanessa Alves'), ('Jose Alvarenga'), ('Olga Vasconcelos'), ('Marcos Silveira');  

INSERT INTO subjects (name, period) VALUES ('Algoritmos 1', 1), ('Algoritmos 2', 2), ('Algoritmos 3', 3), ('Calculo 1', 1), ('Calculo 2', 2), ('Calculo 3', 3);  

INSERT INTO classes (subject_id, teacher_id) VALUES (1, 1), (2, 1), (2, 2), (3, 2), (3, 3), (4, 4), (5, 4), (6, 4), (6, 5);

INSERT INTO exam_categories (name) VALUES ('P1'),('P2'),('P3'); 

