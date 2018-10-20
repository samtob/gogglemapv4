import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Marker',
      url: '/marker'
    },
    {
      title: 'HtmlInfoWindow',
      url: '/html-info-window'
    },
    {
      title: 'MarkerCluster',
      url: '/marker-cluster'
    },
    {
      title: 'Polyline',
      url: '/polyline'
    },
    {
      title: 'Polygon',
      url: '/polygon'
    },
    {
      title: 'Circle',
      url: '/circle'
    },
    {
      title: 'GroundOverlay',
      url: '/ground-overlay'
    },
    {
      title: 'Geocoding',
      url: '/geocoding'
    },
    {
      title: 'TileOverlay',
      url: '/tile-overlay'
    },
    {
      title: 'KmlOverlay',
      url: '/kml-overlay'
    },
    {
      title: 'StreetView',
      url: '/street-view'
    },
    {
      title: 'BaseArrayClass',
      url: '/base-array-class'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': ''
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
