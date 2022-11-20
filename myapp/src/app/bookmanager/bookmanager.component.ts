import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookmanager',
  templateUrl: './bookmanager.component.html',
  styleUrls: ['./bookmanager.component.css']
})
export class BookmanagerComponent implements OnInit {
  bookmark= new FormGroup({
    Title: new FormControl('', Validators.required),
    Url: new FormControl('', Validators.required),
    Category:new FormControl('Select Category', Validators.required)
  })
categoryList =["Category A","Category B","Category A"];
AllBookmark =new Array();
constructor(){
  
}
 ngOnInit(){
  // this.bookmark= new FormGroup({
  //   Title: new FormControl('', Validators.required),
  //   Url: new FormControl('', Validators.required),
  //   Category:new FormControl('Select Category', Validators.required)
  // })
 
 }
 onSubmit(frmbookMark: FormGroup){

  var obj={
    Title:frmbookMark.value.Title,
    Url:frmbookMark.value.Url,
    Category:frmbookMark.value.Category
  };
  this.AllBookmark.push(obj)
  localStorage.setItem("bm",JSON.stringify( this.AllBookmark))
  console.log(this.AllBookmark)
 }
}
