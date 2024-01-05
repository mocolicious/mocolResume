import { CommonModule } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';
import { FilterForksPipe, FilterOriginalsPipe } from 'src/app/pipes/github-filters';

@Component({
  selector: 'app-open-source',
  standalone: true,
  imports: [ CommonModule, FilterForksPipe, FilterOriginalsPipe ],
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

  getContributionsData() {
    const allContributions = {};

    this.githubStuff.forEach(repo => {
      for (const [date, count] of Object.entries(repo.commitCountByDate || {})) {
        if (allContributions[date]) {
          allContributions[date] += count;
        } else {
          allContributions[date] = count;
        }
      }
    });

    // Convert the 'allContributions' object into an array and sort by date
    const contributionsArray = Object.keys(allContributions).map(date => ({
      date: date,
      count: allContributions[date]
    }));

    contributionsArray.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return contributionsArray;
  }

  ngOnDestroy(): void {
    console.log('ng destroy of common');

    this.destroy$.next();
  }
}
