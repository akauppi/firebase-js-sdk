## API Report File for "@firebase/app-exp"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { FirebaseApp } from '@firebase/app-types-exp';
import { FirebaseAppConfig } from '@firebase/app-types-exp';
import { FirebaseOptions } from '@firebase/app-types-exp';
import { LogCallback } from '@firebase/logger';
import { LogLevel } from '@firebase/logger';
import { LogOptions } from '@firebase/logger';

// @public
export function deleteApp(app: FirebaseApp): Promise<void>;

// @public
export function getApp(name?: string): FirebaseApp;

// @public
export function getApps(): FirebaseApp[];

// @public
export function initializeApp(options: FirebaseOptions, name?: string): FirebaseApp;

// @public
export function initializeApp(options: FirebaseOptions, config?: FirebaseAppConfig): FirebaseApp;

export { LogLevel }

// @public
export function onLog(logCallback: LogCallback | null, options?: LogOptions): void;

// @public
export function registerVersion(libraryKeyOrName: string, version: string, variant?: string): void;

// @public
export const SDK_VERSION: string;

// @public
export function setLogLevel(logLevel: LogLevel): void;


```
