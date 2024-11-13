import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  schema: 'public',
  name: 'employees',
})
export class Employees {
  @PrimaryColumn({ type: 'numeric' })
  id: number;

  @Column({
    type: 'character varying',
    nullable: false,
    length: 100,
  })
  name: string;

  @Column({
    type: 'character varying',
    nullable: false,
    length: 50,
  })
  position: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  start_date: Date;

  @Column({
    type: 'time without time zone',
    nullable: false,
  })
  work_time: string;

  @Column({
    type: 'numeric',
    nullable: false,
  })
  hours_per_day: number;

  @Column({
    type: 'character varying',
    nullable: false,
    length: 50,
  })
  work_schedule: string;
}
