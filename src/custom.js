export default class Settings {
  constructor() {
    this._theme = 'dark';
    this._music = 'trance';
    this._difficulty = 'easy';
    this.defaultSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
    this.userSettings = new Map([
      ['theme', []],
      ['music', []],
      ['difficulty', []],
    ]);
  }

  get setting() {
    const setting = new Map();
    this.defaultSettings.forEach((value, key) => {
      setting.set(key, []);
      value.forEach((element) => {
        setting.get(key).push(element);
      });
    });
    this.userSettings.forEach((value, key) => {
      value.forEach((element) => {
        setting.get(key).push(element);
      });
    });
    return setting;
  }

  set theme(value) {
    this._theme = value;
    if (this.defaultSettings.get('theme').includes(value)) return;
    if (this.userSettings.get('theme').includes(value)) return;
    this.userSettings.get('theme').push(value);
  }

  get theme() {
    return this._theme;
  }

  set music(value) {
    this._music = value;
    if (this.defaultSettings.get('music').includes(value)) return;
    if (this.userSettings.get('music').includes(value)) return;
    this.userSettings.get('music').push(value);
  }

  get music() {
    return this._music;
  }

  set difficulty(value) {
    this._difficulty = value;
    if (this.defaultSettings.get('difficulty').includes(value)) return;
    if (this.userSettings.get('difficulty').includes(value)) return;
    this.userSettings.get('difficulty').push(value);
  }

  get difficulty() {
    return this._difficulty;
  }
}
