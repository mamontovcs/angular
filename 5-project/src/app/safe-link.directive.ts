import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onLeavePage($event)',
  }
})
export class SafeLinkDirective {

  queryParam = input<string>('myApp');

  onLeavePage(event: MouseEvent) {
    const isWantToLeave = confirm('Are you sure you want to leave this page?');
    if (isWantToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
