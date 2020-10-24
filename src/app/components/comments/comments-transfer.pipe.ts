import { Pipe, PipeTransform } from '@angular/core';
import {Comment} from '../../models/Comment';

@Pipe({
  name: 'commentsTransfer'
})
export class CommentsTransferPipe implements PipeTransform {

  transform(value: Comment[], nameSymbol: string, bodySymbol: string, ...args: unknown[]): string {
    let newValue = value.map(el => `${nameSymbol} ${el.name} ${nameSymbol} --- ${bodySymbol} ${el.body} ${bodySymbol}`).slice(0,5).join('          ') + '...'

    return newValue;
  }

}
