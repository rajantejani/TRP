import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { DropdownSettings } from "angular2-multiselect-dropdown/lib/multiselect.interface";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Subscription } from "rxjs";
import {
  ageGroupList,
  contentFormatList,
  countriesList,
  divisionsList,
  editionList,
  enrichmentsList,
  episodesList,
  fileFormatList,
  gradeList,
  isbns,
  languagesList,
  publishersList,
  seriesList,
  titlesList
} from "../../../data/comman-data";
import { SearchPopService } from "./search-pop.service";

@Component({
  selector: "app-search-pop",
  templateUrl: "./search-pop.component.html",
  styleUrls: ["./search-pop.component.scss"]
})
export class SearchPopComponent implements OnInit, OnDestroy {
  @ViewChild("myModal") public myModal: ModalDirective;

  ageGroups: { id: string | number; description: string }[] = ageGroupList;
  countries: { id: string; name: string }[] = countriesList;
  languages: { id: string; name: string }[] = languagesList;
  divisions: { id: string | number; description: string }[] = divisionsList;
  titles: (string | number)[] = titlesList;
  publishers: { id: string | number; description: string }[] = publishersList;
  series: (string | number)[] = seriesList;
  episodes: (string | number)[] = episodesList;
  grades: { id: string | number; description: string }[] = gradeList;
  fileFormats: { id: string; description: string }[] = fileFormatList;
  contentFormats: { id: string; description: string }[] = contentFormatList;
  editionList = editionList;
  isbns = isbns;
  enrichmentsList = enrichmentsList;
  subscription: Subscription;
  selectedEnrichments: [];

  dropdownSettings: DropdownSettings = {
    singleSelection: false,
    text: "Select Enrichments",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    enableSearchFilter: true,
    classes: ""
  };

  results: null | any[] = null;
  datas = [
    { title_id: 100001, title: "Books 1" },
    { title_id: 100002, title: "Books 2" },
    { title_id: 100003, title: "Books 3" },
    { title_id: 100004, title: "Books 4" },
    { title_id: 100005, title: "Books 5" },
    { title_id: 100006, title: "Books 5" },
    { title_id: 100007, title: "Books 5" },
    { title_id: 100008, title: "Books 5" },
    { title_id: 100009, title: "Books 5" },
    { title_id: 100010, title: "Books 5" },
    { title_id: 100011, title: "Books 5" },
    { title_id: 100012, title: "Books 5" },
    { title_id: 100013, title: "Books 5" },
    { title_id: 100014, title: "Books 5" },
    { title_id: 100015, title: "Books 5" },
    { title_id: 100016, title: "Books 5" }
  ];
  constructor(private searchService: SearchPopService) {}

  ngOnInit(): void {
    this.results = null;
    this.subscription = this.searchService.statusModal.subscribe((stat: boolean) => this.handlePop(stat));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handlePop(stat) {
    if (!this.myModal) return;
    if (stat) this.myModal.show();
    else this.myModal.hide();
  }

  findResults() {
    this.results = this.datas;
  }
}
