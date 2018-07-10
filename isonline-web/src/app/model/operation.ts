import { Farm } from "./farm";
import { Coordinate } from "./coordinate";
import { Document } from "./document";

export interface Operation {
    id?: string;
	
	uploadDate?: Date;
	
	objectId?: number;

	coordinate?: Coordinate;

	serviceOrder?: number;
	
	farm?: Farm;
	
	product?: string;
	
	occurency?: number;
	
	imageDate?: Date;
	
	awaitingImageDate?: Date;
	
	awaitingImageCondition?: Date;
	
	satellite?: string;

	file?: string;

	document?: Document;
}