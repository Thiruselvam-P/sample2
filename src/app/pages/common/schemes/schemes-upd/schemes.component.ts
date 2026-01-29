import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-schemes',
  standalone: true, // ✅ REQUIRED
  imports: [CommonModule], // ✅ Add CommonModule
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.scss'],
})
export class SchemesComponent {}
