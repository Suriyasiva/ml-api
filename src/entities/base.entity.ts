import { CreateDateColumn, UpdateDateColumn } from "typeorm";


// @Entity() if Entity decorator is used primary column should have
export class BaseEntity {
    // column that is automatically set to the entity's insertion time
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    // column that is automatically set to the entity's update time each time you call save
    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}