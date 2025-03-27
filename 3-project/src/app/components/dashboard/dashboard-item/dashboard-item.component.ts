import { Component, input, ViewEncapsulation } from '@angular/core';
import { IconData } from '../../../models/iconData';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  imageData = input.required<IconData>();
  headerText = input.required<string>();
}
