import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterForks',
  standalone: true,
})
export class FilterForksPipe implements PipeTransform {
  transform(repos: any[]): any[] {
    return repos.filter(repo => repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
}

@Pipe({
  name: 'filterOriginals',
  standalone: true,
})
export class FilterOriginalsPipe implements PipeTransform {
  transform(repos: any[]): any[] {
    return repos.filter(repo => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
}