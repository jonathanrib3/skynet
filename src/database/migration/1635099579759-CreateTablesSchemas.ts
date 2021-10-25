import {MigrationInterface, QueryRunner} from "typeorm";

export class NameColumnAdded1635099579759 implements MigrationInterface {
    name = 'NameColumnAdded1635099579759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aircraft" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying NOT NULL, "callSign" character varying NOT NULL, "flewHours" double precision NOT NULL, CONSTRAINT "PK_46f8c680e9ff88a752b7834bba4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instructor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "courseName" character varying NOT NULL, "graduateDate" date NOT NULL, "instituteName" character varying NOT NULL, CONSTRAINT "PK_ccc0348eefb581ca002c05ef2f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pilot" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "license" character varying NOT NULL, CONSTRAINT "PK_921e16d425d1f58dcec5fe90bba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "isApproved" boolean NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "flewHours" double precision NOT NULL, "isSolo" boolean NOT NULL, "endDate" date NOT NULL, "startDate" date NOT NULL, CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class_instructors_instructor" ("classId" uuid NOT NULL, "instructorId" uuid NOT NULL, CONSTRAINT "PK_451a3ca5afc96bbf83bf25dc35e" PRIMARY KEY ("classId", "instructorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6fe8cf10ad81f339722bca131c" ON "class_instructors_instructor" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ebaa48ef5cc6360c62bacd4c7f" ON "class_instructors_instructor" ("instructorId") `);
        await queryRunner.query(`CREATE TABLE "class_students_student" ("classId" uuid NOT NULL, "studentId" uuid NOT NULL, CONSTRAINT "PK_558e17b8f77b57ac296620828cf" PRIMARY KEY ("classId", "studentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4e482f4aed887e568fd3a08153" ON "class_students_student" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cb12ba41786ba651ccf23e3df0" ON "class_students_student" ("studentId") `);
        await queryRunner.query(`CREATE TABLE "class_aircrafts_aircraft" ("classId" uuid NOT NULL, "aircraftId" uuid NOT NULL, CONSTRAINT "PK_eaaa891fea9ad9f1df4e6932f34" PRIMARY KEY ("classId", "aircraftId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0f4fe83d023f23073ff4c664c6" ON "class_aircrafts_aircraft" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8b05ff6932a4fbedc18e61562d" ON "class_aircrafts_aircraft" ("aircraftId") `);
        await queryRunner.query(`CREATE TABLE "class_pilot_pilot" ("classId" uuid NOT NULL, "pilotId" uuid NOT NULL, CONSTRAINT "PK_0936625d34ba3060457710bea84" PRIMARY KEY ("classId", "pilotId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fda097cf3c580b73b460b5ec86" ON "class_pilot_pilot" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1408f2f2b8d37e8c23a2431c03" ON "class_pilot_pilot" ("pilotId") `);
        await queryRunner.query(`ALTER TABLE "class_instructors_instructor" ADD CONSTRAINT "FK_6fe8cf10ad81f339722bca131c2" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_instructors_instructor" ADD CONSTRAINT "FK_ebaa48ef5cc6360c62bacd4c7f2" FOREIGN KEY ("instructorId") REFERENCES "instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_students_student" ADD CONSTRAINT "FK_4e482f4aed887e568fd3a081539" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_students_student" ADD CONSTRAINT "FK_cb12ba41786ba651ccf23e3df08" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_aircrafts_aircraft" ADD CONSTRAINT "FK_0f4fe83d023f23073ff4c664c6c" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_aircrafts_aircraft" ADD CONSTRAINT "FK_8b05ff6932a4fbedc18e61562d0" FOREIGN KEY ("aircraftId") REFERENCES "aircraft"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_pilot_pilot" ADD CONSTRAINT "FK_fda097cf3c580b73b460b5ec86a" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_pilot_pilot" ADD CONSTRAINT "FK_1408f2f2b8d37e8c23a2431c03c" FOREIGN KEY ("pilotId") REFERENCES "pilot"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class_pilot_pilot" DROP CONSTRAINT "FK_1408f2f2b8d37e8c23a2431c03c"`);
        await queryRunner.query(`ALTER TABLE "class_pilot_pilot" DROP CONSTRAINT "FK_fda097cf3c580b73b460b5ec86a"`);
        await queryRunner.query(`ALTER TABLE "class_aircrafts_aircraft" DROP CONSTRAINT "FK_8b05ff6932a4fbedc18e61562d0"`);
        await queryRunner.query(`ALTER TABLE "class_aircrafts_aircraft" DROP CONSTRAINT "FK_0f4fe83d023f23073ff4c664c6c"`);
        await queryRunner.query(`ALTER TABLE "class_students_student" DROP CONSTRAINT "FK_cb12ba41786ba651ccf23e3df08"`);
        await queryRunner.query(`ALTER TABLE "class_students_student" DROP CONSTRAINT "FK_4e482f4aed887e568fd3a081539"`);
        await queryRunner.query(`ALTER TABLE "class_instructors_instructor" DROP CONSTRAINT "FK_ebaa48ef5cc6360c62bacd4c7f2"`);
        await queryRunner.query(`ALTER TABLE "class_instructors_instructor" DROP CONSTRAINT "FK_6fe8cf10ad81f339722bca131c2"`);
        await queryRunner.query(`DROP INDEX "IDX_1408f2f2b8d37e8c23a2431c03"`);
        await queryRunner.query(`DROP INDEX "IDX_fda097cf3c580b73b460b5ec86"`);
        await queryRunner.query(`DROP TABLE "class_pilot_pilot"`);
        await queryRunner.query(`DROP INDEX "IDX_8b05ff6932a4fbedc18e61562d"`);
        await queryRunner.query(`DROP INDEX "IDX_0f4fe83d023f23073ff4c664c6"`);
        await queryRunner.query(`DROP TABLE "class_aircrafts_aircraft"`);
        await queryRunner.query(`DROP INDEX "IDX_cb12ba41786ba651ccf23e3df0"`);
        await queryRunner.query(`DROP INDEX "IDX_4e482f4aed887e568fd3a08153"`);
        await queryRunner.query(`DROP TABLE "class_students_student"`);
        await queryRunner.query(`DROP INDEX "IDX_ebaa48ef5cc6360c62bacd4c7f"`);
        await queryRunner.query(`DROP INDEX "IDX_6fe8cf10ad81f339722bca131c"`);
        await queryRunner.query(`DROP TABLE "class_instructors_instructor"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "pilot"`);
        await queryRunner.query(`DROP TABLE "instructor"`);
        await queryRunner.query(`DROP TABLE "aircraft"`);
    }

}
