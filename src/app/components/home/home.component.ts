import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/service/api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private stateService: ApiService) {}

  country: string = "";
  data: any = null;

  $result: Observable<any>;

  ngOnInit() {}

  onSubmit() {
    this.$result = this.stateService.getSatate(this.country);
    // console.log(this.country);

    // this.stateService.getSatate(this.country).subscribe(
    //   (result) => (this.data = result),
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
}
