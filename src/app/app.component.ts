import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'premium-calculator-app';

  memberInsuredValues = [
    {id: 1, name: 'R10000'},
    {id: 2, name: 'R15000'},
    {id: 3, name: 'R18000'}, 
    {id: 4, name: 'R20000'},
    {id: 5, name: 'R30000'}
];

nonMemberInsuredValues = [
  {id: 1, name: 'R5000'},
  {id: 2, name: 'R12000'},
  {id: 3, name: 'R18000'},
  {id: 4, name: 'R22000'},
  {id: 5, name: 'R25000'}
];

memberInsuredAmounts: any;
}
