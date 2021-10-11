import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableSchema1633972834425 implements MigrationInterface {
    name = 'CreateTableSchema1633972834425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aircraft" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying NOT NULL, "callSign" character varying NOT NULL, "flewHours" double precision NOT NULL, CONSTRAINT "PK_46f8c680e9ff88a752b7834bba4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instructor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "courseName" character varying NOT NULL, "graduateDate" date NOT NULL, "instituteName" character varying NOT NULL, CONSTRAINT "PK_ccc0348eefb581ca002c05ef2f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "isApproved" boolean NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "flewHours" double precision NOT NULL, "isSolo" boolean NOT NULL, "endTime" date NOT NULL, "startTime" date NOT NULL, "aircraftId" uuid, CONSTRAINT "REL_5849a64f3d0507f9037c25e654" UNIQUE ("aircraftId"), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pilot" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "license" character varying NOT NULL, CONSTRAINT "PK_921e16d425d1f58dcec5fe90bba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class_instructor_instructor" ("classId" uuid NOT NULL, "instructorId" uuid NOT NULL, CONSTRAINT "PK_5ddfca7f96b02ab28437c36a745" PRIMARY KEY ("classId", "instructorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5667f596118f7a44fa2f079e2d" ON "class_instructor_instructor" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9207fe7ef2e0875c538e642348" ON "class_instructor_instructor" ("instructorId") `);
        await queryRunner.query(`CREATE TABLE "class_student_student" ("classId" uuid NOT NULL, "studentId" uuid NOT NULL, CONSTRAINT "PK_a5d4c965fd63064e9bf9a4ec1c3" PRIMARY KEY ("classId", "studentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1aa0d070a1edda4b35223ded3a" ON "class_student_student" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9faf58cc6c14fb906cc9ecde84" ON "class_student_student" ("studentId") `);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "FK_5849a64f3d0507f9037c25e654a" FOREIGN KEY ("aircraftId") REFERENCES "aircraft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" ADD CONSTRAINT "FK_5667f596118f7a44fa2f079e2d2" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" ADD CONSTRAINT "FK_9207fe7ef2e0875c538e642348b" FOREIGN KEY ("instructorId") REFERENCES "instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_student_student" ADD CONSTRAINT "FK_1aa0d070a1edda4b35223ded3ab" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_student_student" ADD CONSTRAINT "FK_9faf58cc6c14fb906cc9ecde842" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class_student_student" DROP CONSTRAINT "FK_9faf58cc6c14fb906cc9ecde842"`);
        await queryRunner.query(`ALTER TABLE "class_student_student" DROP CONSTRAINT "FK_1aa0d070a1edda4b35223ded3ab"`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" DROP CONSTRAINT "FK_9207fe7ef2e0875c538e642348b"`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" DROP CONSTRAINT "FK_5667f596118f7a44fa2f079e2d2"`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "FK_5849a64f3d0507f9037c25e654a"`);
        await queryRunner.query(`DROP INDEX "IDX_9faf58cc6c14fb906cc9ecde84"`);
        await queryRunner.query(`DROP INDEX "IDX_1aa0d070a1edda4b35223ded3a"`);
        await queryRunner.query(`DROP TABLE "class_student_student"`);
        await queryRunner.query(`DROP INDEX "IDX_9207fe7ef2e0875c538e642348"`);
        await queryRunner.query(`DROP INDEX "IDX_5667f596118f7a44fa2f079e2d"`);
        await queryRunner.query(`DROP TABLE "class_instructor_instructor"`);
        await queryRunner.query(`DROP TABLE "pilot"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "instructor"`);
        await queryRunner.query(`DROP TABLE "aircraft"`);
    }

}
