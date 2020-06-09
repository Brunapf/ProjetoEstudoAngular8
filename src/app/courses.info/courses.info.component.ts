import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../courses/course';
import { CourseService } from '../courses/course.service';

@Component({
    templateUrl: 'courses.info.component.html'
})

export class CourseInfoComponent implements OnInit{

     course: Course;

    // No construtor eu vou pegar esse ActivatedRoute que me devolve toda informação do meu curso.  
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}

    ngOnInit(): void {
        // Abaixo eu estou pegando o activatedRoute e com o snapshot tirando uma foto das informações e pegando o id 
        // com o get .  Usei o + no this pq ele devolve uma string  e com o mais estou convertendo para number.
      //  this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    //    this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));

        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
    }

  save(): void{
    this.courseService.save(this.course).subscribe({
        next: course => console.log('Salved with success', course),
        error: err => console.log('Error', err )
    })
  }
}