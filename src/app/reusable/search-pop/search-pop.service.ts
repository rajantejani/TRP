import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchPopService {
  private statusModalSource = new BehaviorSubject<boolean>(false);
  statusModal = this.statusModalSource.asObservable();
  constructor() {}

  updateStatus(stat: boolean) {
    this.statusModalSource.next(stat);
  }
}
