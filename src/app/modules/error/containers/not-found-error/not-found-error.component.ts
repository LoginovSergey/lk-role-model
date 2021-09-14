import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.component.html',
  styleUrls: ['./not-found-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NotFoundErrorComponent { }
