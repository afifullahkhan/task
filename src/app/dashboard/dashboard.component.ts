import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from './dashboard.constant';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'avatar',
    
  ];
  dataSource = new MatTableDataSource();
  @ViewChild('paginator', { static: true }) paginator: MatPaginator | undefined;
  totalLength = 0;
  EmpData: any;
  public page = 1;
  public pageSize = 5;
  public totalCount = 0;
  params: any = {
    page: this.page,
    perPage: this.pageSize,
  };
  
  constructor(public dashboardService:DashboardService) {}
  longText :string= `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator !;
   
  }
  ngOnInit(): void {
    this.GetUserList()
  }
  GetUserList(){
    // const limit = event.pageSize;
    // const skip = event.pageIndex * limit;
    
   
    this.dashboardService.getUser(this.params)
      .subscribe({
        next: (res: any) => {
          let data =res.data
      this.totalCount = res.total
      // this.EmpData=new MatTableDataSource(res.data);
      this.EmpData = new MatTableDataSource(data);
          // console.log(response)
          
        },
        error: (e) => {
        },
        complete: () => {

        }
      });
  }

  onPageChange(pageInfo: any) {
    this.params.page = pageInfo.pageIndex + 1;
    this.params.perPage = pageInfo.pageSize;
    this.GetUserList();
  }
}
