import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  allBookMark:any
  ngOnInit(): void {
    var data=localStorage.getItem("bm")
    console.log(data)
   if(data !=null)
   {
    this.allBookMark= JSON.parse( data);
    
   }
   

  }
}
