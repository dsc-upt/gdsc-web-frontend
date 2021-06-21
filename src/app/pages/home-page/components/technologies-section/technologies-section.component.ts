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

  technologies: ITechnology[] = [
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
      updated: ''
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
      image: 'assets/images/docker-logo.png',
      name: 'Docker',
      created: '',
      updated: ''
    },
    {
      id: '5',
      image: 'assets/images/reactjs-logo.png',
      name: 'React',
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
