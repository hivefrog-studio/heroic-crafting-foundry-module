import { ProjectData } from './project-data';
//import {ItemPF2e} from '@league-of-foundry-developers/foundry-vtt-types'

export class CraftingProject {
  data: ProjectData;

  constructor(data: ProjectData) {
    this.data = data;
  }

  get actor() {
    return this.data.actor;
  }

  get key() {
    return this.data.key;
  }

  //get label() {
  //return this.pf2eItem.name;
  //}

  //get pf2eItem(): ItemPF2e {
  //return
  //}
}
