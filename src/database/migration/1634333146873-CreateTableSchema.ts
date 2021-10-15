import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableSchema1634333146873 implements MigrationInterface {
    name = 'CreateTableSchema1634333146873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aircraft" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying NOT NULL, "callSign" character varying NOT NULL, "flewHours" double precision NOT NULL, CONSTRAINT "PK_46f8c680e9ff88a752b7834bba4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instructor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "courseName" character varying NOT NULL, "graduateDate" date NOT NULL, "instituteName" character varying NOT NULL, CONSTRAINT "PK_ccc0348eefb581ca002c05ef2f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "isApproved" boolean NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "flewHours" double precision NOT NULL, "isSolo" boolean NOT NULL, "endTime" date NOT NULL, "startTime" date NOT NULL, "aircraftId" uuid, CONSTRAINT "REL_5849a64f3d0507f9037c25e654" UNIQUE ("aircraftId"), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pilot" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "license" character varying NOT NULL, CONSTRAINT "PK_921e16d425d1f58dcec5fe90bba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class_instructor_instructor" ("classId" uuid NOT NULL, "instructorId" uuid NOT NULL, CONSTRAINT "PK_5ddfca7f96b02ab28437c36a745" PRIMARY KEY ("classId", "instructorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5667f596118f7a44fa2f079e2d" ON "class_instructor_instructor" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9207fe7ef2e0875c538e642348" ON "class_instructor_instructor" ("instructorId") `);
        await queryRunner.query(`CREATE TABLE "class_students_student" ("classId" uuid NOT NULL, "studentId" uuid NOT NULL, CONSTRAINT "PK_558e17b8f77b57ac296620828cf" PRIMARY KEY ("classId", "studentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4e482f4aed887e568fd3a08153" ON "class_students_student" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cb12ba41786ba651ccf23e3df0" ON "class_students_student" ("studentId") `);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "FK_5849a64f3d0507f9037c25e654a" FOREIGN KEY ("aircraftId") REFERENCES "aircraft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" ADD CONSTRAINT "FK_5667f596118f7a44fa2f079e2d2" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" ADD CONSTRAINT "FK_9207fe7ef2e0875c538e642348b" FOREIGN KEY ("instructorId") REFERENCES "instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_students_student" ADD CONSTRAINT "FK_4e482f4aed887e568fd3a081539" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_students_student" ADD CONSTRAINT "FK_cb12ba41786ba651ccf23e3df08" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class_students_student" DROP CONSTRAINT "FK_cb12ba41786ba651ccf23e3df08"`);
        await queryRunner.query(`ALTER TABLE "class_students_student" DROP CONSTRAINT "FK_4e482f4aed887e568fd3a081539"`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" DROP CONSTRAINT "FK_9207fe7ef2e0875c538e642348b"`);
        await queryRunner.query(`ALTER TABLE "class_instructor_instructor" DROP CONSTRAINT "FK_5667f596118f7a44fa2f079e2d2"`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "FK_5849a64f3d0507f9037c25e654a"`);
        await queryRunner.query(`DROP INDEX "IDX_cb12ba41786ba651ccf23e3df0"`);
        await queryRunner.query(`DROP INDEX "IDX_4e482f4aed887e568fd3a08153"`);
        await queryRunner.query(`DROP TABLE "class_students_student"`);
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
