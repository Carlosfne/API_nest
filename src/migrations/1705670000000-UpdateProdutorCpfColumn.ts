import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateProdutorCpfColumn1705670000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "produtor" RENAME COLUMN "cpf" TO "cpf_cnpj"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "produtor" RENAME COLUMN "cpf_cnpj" TO "cpf"`,
    );
  }
}
