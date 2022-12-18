import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BundleloaderService {
  constructor() {}

  loadBundle(src: string, onload?: any, onErr?: any) {
    const isLoaded = this.isBundleLoaded(src);
    if (!isLoaded) {
      const node = document.createElement('script');
      node.src = src;
      node.type = 'text/javascript';
      node.onload = onload;
      node.onerror = onErr;
      document.getElementsByTagName('head')[0].appendChild(node);
    } else if (onload) {
      onload();
    }
  }

  isBundleLoaded(src: string) {
    const scripts = document.getElementsByTagName('script');

    return (
      Array.from(scripts).find(
        (script) => script.getAttribute('src') === src
      ) !== undefined
    );
  }
}
