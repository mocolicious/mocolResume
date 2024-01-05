import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-open-source',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent implements OnInit {

  public destroy$ = new Subject<void>();
  githubStuff;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepos()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res) => {
          this.githubStuff = res;
          console.log(res);
        },
        error: err => {
          console.error('error in API call...', err)
        }
      })

    // this.githubService.getRepos().subscribe(
    //   data => console.log(data),
    //   error => console.error(error)
    // );
  }

  ngOnDestroy(): void {
    console.log('ng destroy of common');

    this.destroy$.next();
  }
}
