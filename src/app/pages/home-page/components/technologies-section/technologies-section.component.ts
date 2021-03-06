import { Component, OnInit } from '@angular/core';
import { ITechnology } from '@gdsc/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'gdsc-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.scss']
})
export class TechnologiesSectionComponent implements OnInit {
  offSet = 500;
  _counter = -1;
  audioSubject = new BehaviorSubject<HTMLAudioElement>(null);
  counter$ = this.audioSubject.asObservable();

  technologies: (ITechnology & { link?: string })[] = [
    {
      id: '0',
      image: 'assets/images/angular-logo.png',
      name: 'Angular',
      created: '',
      updated: ''
    },
    {
      id: '2',
      image: 'assets/images/django-logo.png',
      name: 'Django',
      created: '',
      updated: '',
      link: 'https://www.youtube.com/watch?v=4_OiUURbYlQ'
    },
    {
      id: '3',
      image: 'assets/images/kotlin-logo.png',
      name: 'Kotlin',
      created: '',
      updated: ''
    },
    {
      id: '4',
      image: 'assets/images/dotnet-logo.png',
      name: 'ASP .NET Core',
      created: '',
      updated: ''
    },
    {
      id: '5',
      image: 'assets/images/devops-logo.png',
      name: 'DevOps',
      created: '',
      updated: ''
    },
    {
      id: '5',
      image: 'assets/images/reactjs-logo.png',
      name: 'React',
      created: '',
      updated: ''
    },
    {
      id: '6',
      image: 'assets/images/springboot-logo.png',
      name: 'Spring Boot',
      created: '',
      updated: ''
    },
    {
      id: '7',
      image: 'assets/images/flutter-logo.png',
      name: 'Flutter',
      created: '',
      updated: ''
    },
    {
      id: '8',
      image: 'assets/images/more-logo.png',
      name: 'And more are coming...',
      created: '',
      updated: ''
    }
  ];
  breakpoint: number;

  ngOnInit(): void {
    this.breakpoint = (innerWidth / this.offSet);

    this.counter$.subscribe(async audio => {
      this._counter = this._counter + 1;
      if (this._counter > 1 && this._counter % 4 === 0) {
        await audio.play();
      } else {
        audio?.pause();
      }
    });
  }

  onResize(event): void {
    this.breakpoint = (event.target.innerWidth / this.offSet);
  }
}
