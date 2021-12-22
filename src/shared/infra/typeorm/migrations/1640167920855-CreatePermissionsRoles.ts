import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePermissionsRoles1640167920855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "permissions_roles",
              columns: [
                { name: "role_id", type: "uuid" },
                { name: "permission_id", type: "uuid" },
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
                  name: "fk_permissions_roles",
                  onDelete: "RESTRICT",
                  onUpdate: "CASCADE"
                },
                {
                  columnNames: ["role_id"],
                  referencedColumnNames: ["id"],
                  referencedTableName: "roles",
                  name: "fk_roles_permissions",
                  onDelete: "RESTRICT",
                  onUpdate: "CASCADE"
                }
              ]
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permissions_roles");
    }

}
