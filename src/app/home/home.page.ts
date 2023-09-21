import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Deploy } from 'cordova-plugin-ionic'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  configuration: any = null;

  constructor() {}

  async fetchLiveUpdatesConfig(){
    try {
      this.configuration = await Deploy.getConfiguration();
      console.log('Config', this.configuration)
    } catch (error){
      console.error("Error fetching")
    }
  }
}
