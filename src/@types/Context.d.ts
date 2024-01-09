export interface IElectronAPI {
  updateTitle: (arg: number) => Promise<void>;
  openExternal: (arg: string) => Promise<void>;
}

declare global {
  interface Window {
    myAPI: IElectronAPI;
  }
}
