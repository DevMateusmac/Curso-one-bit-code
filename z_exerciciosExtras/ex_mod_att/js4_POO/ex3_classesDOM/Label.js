import { Component } from "./Component.js";

export class Label extends Component{
  constructor(elementParentNode, elementAttributes){
    super('label', elementParentNode, elementAttributes)
  }
}