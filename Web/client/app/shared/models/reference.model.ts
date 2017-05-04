export class Reference {

	public id: number;
	public name: string;
	public type: string;

	constructor(...args: any[]) {
		this.id = args[0][0];
		this.name = args[0][1];
		this.type = args[0][2];
	}
}
