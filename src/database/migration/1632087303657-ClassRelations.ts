import {MigrationInterface, QueryRunner} from "typeorm";

export class ClassRelations1632087303657 implements MigrationInterface {
    name = 'ClassRelations1632087303657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aircraft" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying NOT NULL, "callSign" character varying NOT NULL, "flewHours" double precision NOT NULL, CONSTRAINT "PK_46f8c680e9ff88a752b7834bba4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instructor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "courseName" character varying NOT NULL, "graduateDate" date NOT NULL, "instituteName" character varying NOT NULL, CONSTRAINT "PK_ccc0348eefb581ca002c05ef2f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "isApproved" boolean NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "flewHours" TIME NOT NULL, "isSolo" boolean NOT NULL, "endTime" date NOT NULL, "startTime" date NOT NULL, "instructorIdId" uuid, "aircraftIdId" uuid, CONSTRAINT "REL_f9db3f4b679332792acbb62b47" UNIQUE ("aircraftIdId"), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pilot" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registration" character varying NOT NULL, "address" character varying NOT NULL, "age" smallint NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "license" character varying NOT NULL, CONSTRAINT "PK_921e16d425d1f58dcec5fe90bba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class_student_id_student" ("classId" uuid NOT NULL, "studentId" uuid NOT NULL, CONSTRAINT "PK_3802eca7126e63b6880556f5f71" PRIMARY KEY ("classId", "studentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9060e7bfca53529ee9ce95d904" ON "class_student_id_student" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_97c3115ff0570571766c6f4826" ON "class_student_id_student" ("studentId") `);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "FK_3895330e57e940d1205c9714036" FOREIGN KEY ("instructorIdId") REFERENCES "instructor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "FK_f9db3f4b679332792acbb62b471" FOREIGN KEY ("aircraftIdId") REFERENCES "aircraft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "class_student_id_student" ADD CONSTRAINT "FK_9060e7bfca53529ee9ce95d904d" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_student_id_student" ADD CONSTRAINT "FK_97c3115ff0570571766c6f4826b" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class_student_id_student" DROP CONSTRAINT "FK_97c3115ff0570571766c6f4826b"`);
        await queryRunner.query(`ALTER TABLE "class_student_id_student" DROP CONSTRAINT "FK_9060e7bfca53529ee9ce95d904d"`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "FK_f9db3f4b679332792acbb62b471"`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "FK_3895330e57e940d1205c9714036"`);
        await queryRunner.query(`DROP INDEX "IDX_97c3115ff0570571766c6f4826"`);
        await queryRunner.query(`DROP INDEX "IDX_9060e7bfca53529ee9ce95d904"`);
        await queryRunner.query(`DROP TABLE "class_student_id_student"`);
        await queryRunner.query(`DROP TABLE "pilot"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "instructor"`);
        await queryRunner.query(`DROP TABLE "aircraft"`);
    }

}
