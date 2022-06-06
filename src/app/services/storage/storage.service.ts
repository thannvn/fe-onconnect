/* eslint-disable @typescript-eslint/no-explicit-any */
class StorageService {
  private prefix = process.env.REACT_APP_BASE_NAME || 'app';

  private localStorage: Storage | undefined;

  private sessionStorage: Storage | undefined;

  init() {
    this.localStorage = window.localStorage;
    this.sessionStorage = window.sessionStorage;
  }

  // Local Storage
  public set(key: string, data: string | number): void {
    this.localStorage?.setItem(this.generateKey(key), data.toString());
  }

  public get(key: string): string | null {
    return this.localStorage
      ? this.localStorage.getItem(this.generateKey(key))
      : null;
  }

  public remove(key: string): void {
    this.localStorage?.removeItem(this.generateKey(key));
  }

  public clear(): void {
    this.localStorage?.clear();
  }

  public setObject(key: string, data: ObjectOrArray): void {
    this.set(key, JSON.stringify(data));
  }

  public getObject(key: string): ObjectOrArray {
    const value = this.get(key);
    return value !== null ? JSON.parse(value) : null;
  }

  // Session Storage
  public setSession(key: string, data: string | number): void {
    this.sessionStorage?.setItem(this.generateKey(key), data.toString());
  }

  public getSession(key: string): string | null {
    return this.sessionStorage
      ? this.sessionStorage.getItem(this.generateKey(key))
      : null;
  }

  public setSessionObject(key: string, data: ObjectOrArray): void {
    this.setSession(key, JSON.stringify(data));
  }

  public getSessionObject(key: string): ObjectOrArray {
    const value = this.getSession(key);
    return value !== null ? JSON.parse(value) : null;
  }

  private generateKey(key: string): string {
    return `${this.prefix}_${key}`;
  }
}

type ObjectOrArray = { [key: string]: any } | any[];

export default new StorageService();
