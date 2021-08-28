import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './cource-info.component.html'
})
export class CourceInfoComponent implements OnInit{

    courseId: number;

    constructor(private activatedRouter: ActivatedRoute) { 
        
     }

    ngOnInit(): void{
        this.courseId = +this.activatedRouter.snapshot.paramMap.get('id');
    }

}