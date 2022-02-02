import User from "./types";
import useUploadDataReult from "./hooks/IuseUploadDataReult";
import uerInputValueArr from './hooks/IuserInputValueArr'

export type { IWindowItem, IParam } from "./form/IWindowItem";

export interface IUser extends User {}
export interface IuseUploadDataReult extends useUploadDataReult {}
export interface IuserInputValueArr extends uerInputValueArr {}
