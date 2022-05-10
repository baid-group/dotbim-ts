import { Expose } from "class-transformer";

@Expose({name: 'info'})
export class Info {
  [key: string]: string;
}