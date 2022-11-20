import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmanager',
  templateUrl: './bookmanager.component.html',
  styleUrls: ['./bookmanager.component.css']
})
export class BookmanagerComponent implements OnInit {
  bookmark= new FormGroup({
    Title: new FormControl('', Validators.required),
    Url: new FormControl('', Validators.required),
    Category:new FormControl('', Validators.required)
  })
// categoryList =["Category A","Category B","Category C"];
categoryList :Array<string>=[];
AllBookmark:Array<object>=[]
isNewCat:boolean=false
newCate:string=""
constructor(private router: Router){
  //this.AllBookmark
}
 ngOnInit(){
  // this.bookmark= new FormGroup({
  //   Title: new FormControl('', Validators.required),
  //   Url: new FormControl('', Validators.required),
  //   Category:new FormControl('Select Category', Validators.required)
  // })
 this.loadCategory(this.newCate);
 }
 loadCategory(newCat:string){
    this.categoryList.push("Category A");
    this.categoryList.push("Category B");
    this.categoryList.push("Category C");
    this.categoryList.push(newCat);
 }
 onSubmit(frmbookMark: FormGroup){

  var obj={
    Title:frmbookMark.value.Title,
    Url:frmbookMark.value.Url,
    Category:frmbookMark.value.Category
  };
  console.log(this.categoryList.indexOf(frmbookMark.value.Category))
  if(this.categoryList.indexOf(frmbookMark.value.Category)<0){
    //this.categoryList.push(frmbookMark.value.Category)
    this.loadCategory(frmbookMark.value.Category)
    this.newCate=frmbookMark.value.Category;
  }
  console.log(this.categoryList)
  this.AllBookmark.push(obj)
  localStorage.setItem("bm",JSON.stringify( this.AllBookmark))
  console.log(this.AllBookmark)
  this.router.navigate(['/bookmark']);
 }
 Categoryshow(){
  this.isNewCat=true;
}
}
