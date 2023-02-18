import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pageSize = 10;
  currentPage = 0;
  dataSize = 100;

  pages: number[] = [];

  constructor() { }

  ngOnInit() {
    this.pages = new Array<number>(Math.ceil(this.dataSize / this.pageSize));
  }

  onNext(): void {
    if (this.pages.length - 1 > this.currentPage) {
      this.currentPage++;
    }
  }

  onPrev(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  onPageChange(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber < this.pages.length) {
      this.currentPage = pageNumber;
    }
  }

}
