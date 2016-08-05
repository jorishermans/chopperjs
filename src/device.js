export class Device {

  _mobile = false;
  _tablet = false;
  _desktop = false;

  constructor(mobile, tablet, desktop) {
    this._mobile = mobile;
    this._tablet = tablet;
    this._desktop = desktop;
  }

  mobile() { return this._mobile; }
  tablet() { return this._tablet; }
  desktop() { return this._desktop; }
}
