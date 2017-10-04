import { Widget } from "./widget.model";


export class Dashboard {
    public name: string;
    public description: string;
    public widgets: Widget[];
  
    constructor(name: string, desc: string, widgets: Widget[]) {
      this.name = name;
      this.description = desc;
      this.widgets = widgets;
    }
  }