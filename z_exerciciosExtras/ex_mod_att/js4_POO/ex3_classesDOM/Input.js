import { Component } from "./Component.js";

export class Input extends Component {
  constructor(elementParentNode, elementAttributes){
    super('input', elementParentNode, elementAttributes)
  }
}