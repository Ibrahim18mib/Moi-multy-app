import {
  Component,
  OnInit,
  ElementRef,
  Input,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ApplicationsService } from './applications.service';

@Component({
  selector: 'app-apps-lists',
  templateUrl: './apps-lists.component.html',
  styleUrl: './apps-lists.component.scss',
})
export class AppsListsComponent implements OnInit {
  @ViewChild('appbodyDiv', { static: true })
  appBody!: ElementRef;
  constructor(
    private appService: ApplicationsService,
    
  ) {}

  ngOnInit(): void {
    console.log('Applist ngoninint...');
  }

  loadIntoApp(url: string) {
    console.log('app url clicked', url);

    // Get the position and size of the div
    const appBody = this.appBody.nativeElement.getBoundingClientRect();
    const divPositionX = appBody.left;
    const divPositionY = appBody.top;
    const divWidth = appBody.width;
    const divHeight = appBody.height;

    // Log the position and size
    console.log('Div Position X:', divPositionX);
    console.log('Div Position Y:', divPositionY);
    console.log('Div Width:', divWidth);
    console.log('Div Height:', divHeight);

    // Set the URL and mark app as selected
    this.appService.isAppselected = true;

    
    console.log(this.appService.isAppselected);

    //const appBodyDiv = this.appBody.nativeElement;
    const appdivData = { url, divPositionX, divPositionY, divWidth, divHeight };
    const appUrl = url;
    const appX = divPositionX;
    const appY = divPositionY;
    const appWidth = divWidth;
    const appHeight = divHeight;

    window.ipcway.appRouter({ appUrl, appX, appY, appWidth, appHeight });
  }

}
