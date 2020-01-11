import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
    private accountsSerivce: AccountsService) {
      this.accountsSerivce.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      )
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsSerivce.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
