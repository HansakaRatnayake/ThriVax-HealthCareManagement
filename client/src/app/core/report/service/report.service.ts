import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment";
import {Moh} from "../../entity/moh";
import {CountByPdh} from "../entity/countByPdh";
import {CountByPOrders} from "../entity/countByPOrders";
import {CountByDesignation} from "../entity/countByDesignation";
import {VehicleCountByMoh} from "../entity/vehiclecountbymoh";
import {CountByVOrders} from "../entity/countbyvorders";

const API_URL = environment.apiUrl + '/admin/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  countByPdh(){
    return this.http.get<CountByPdh[]>(API_URL + "/countbypdh");
  }

  countByPorder(query:string){
    return this.http.get<CountByPOrders[]>(API_URL + "/countbyproductorderdate"+ query);
  }

  countByDesignation(){
    return this.http.get<CountByDesignation[]>(API_URL + "/countbydesignation");
  }

  vehicleCountByMoh(){
    return this.http.get<VehicleCountByMoh[]>(API_URL + "/vehiclecountbymoh");
  }

  countByVorder(query:string){
    return this.http.get<CountByVOrders[]>(API_URL + "/countbyvaccineorderdate"+ query);
  }
}
