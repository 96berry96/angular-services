import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService{
  OnSubscribeClicked(){
    alert("Thanks for subscribing. You can access the services now.");
  }
}