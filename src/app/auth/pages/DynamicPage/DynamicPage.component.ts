import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './DynamicPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent { }
