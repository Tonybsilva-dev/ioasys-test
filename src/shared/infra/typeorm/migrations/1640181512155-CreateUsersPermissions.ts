import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersPermissions1640181512155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users_permissions",
              columns: [
                { name: "permission_id", type: "uuid" },
                { name: "user_id", type: "uuid" },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()"
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()"
                }
              ],
              foreignKeys: [
                {
                  columnNames: ["permission_id"],
                  referencedColumnNames: ["id"],
                  referencedTableName: "permissions",
                  name: "fk_roles_user",
                  onDelete: "RESTRICT",
                  onUpdate: "CASCADE",
                },
                {
                  columnNames: ["user_id"],
                  referencedColumnNames: ["id"],
                  referencedTableName: "users",
                  name: "fk_users_permissions",
                  onDelete: "RESTRICT",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_permissions");
    }

}
