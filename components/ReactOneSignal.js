import * as React from 'react';

class ReactOneSignal extends React.Component {
  oneSignal = () => {
    return {
      __html: `window.OneSignal = window.OneSignal || []; OneSignal.push(function() { OneSignal.init({ appId: "${process.env.REACT_ONESIGNAL_APP}" });});`
    }
  }

  render = () => {
    return (
      <>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
        <script dangerouslySetInnerHTML={this.oneSignal()} />
      </>
    )
  }
}

export default ReactOneSignal;
