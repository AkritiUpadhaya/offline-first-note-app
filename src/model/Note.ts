import { Model } from '@nozbe/watermelondb'
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators'

export default class Note extends Model {
  static table = 'notes'



  @field('note') note!:string;
  @field('description') description!:string;
  @readonly @date('created_at') createdAt!:number;
}
  
  
