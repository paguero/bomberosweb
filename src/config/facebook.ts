export const initFbsdk = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      console.log('initFbsdk');
      window.fbAsyncInit = function(): void {
        console.log('FB.init');
      
        FB.init({
          appId: 1760250131484330,
          cookie: true, // enable cookies to allow the server to access the session
          xfbml: true, // parse social plugins on this page
          version: 'v2.8' // use graph api version 2.8
        });
      };
      
      (function(d: Document, s: string, id: string): void {
        let js: HTMLScriptElement | null;
        const fjs: HTMLScriptElement | null = d.getElementsByTagName(s)[0] as HTMLScriptElement;
        if (d.getElementById(id)) return;
        
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = '//connect.facebook.net/en_US/all.js';
        
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(document, 'script', 'facebook-jssdk');
    });
  };