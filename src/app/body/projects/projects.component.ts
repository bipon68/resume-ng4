import { Component, OnInit } from '@angular/core';
import {PageService} from "../../page.service";
import {UserProjectsService} from "./user-projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [UserProjectsService]
})
export class ProjectsComponent implements OnInit {
  private projectInfo;
  private pageInfo;
  private userProjectItem;

  public blog = [{
    image: 'assets/images/blog/6.jpg',
    date: '15 jun 2016',
    title: 'Lorem Ipsum has been the industry standard dummy text',
    postedBy: 'posted by johanson let, 15 hits, 30 comment',
  }, {
    image: 'assets/images/blog/7.jpg',
    date: '10 February 2012',
    title: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    postedBy: 'posted by John Shipmen, 6 hits, 8 comment',
  }, {
    image: 'assets/images/blog/8.jpg',
    date: '12 march 2015',
    title: 'The first line of Lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.',
    postedBy: 'posted by Mark jkcno, 10 hits, 50 comment',
  }, {
    image: 'assets/images/blog/9.jpg',
    date: '28 December 2017',
    title: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    postedBy: 'posted by Walo Boni, 9 hits, 4 comment',
}]

  constructor(private userProjectsService: UserProjectsService, private pageService: PageService) { }

  ngOnInit() {
    this.projectInfo = this.userProjectsService.getProjectsInfo();
    this.pageInfo = this.pageService.getPageInfo();
    this.userProjectItem = this.userProjectsService.getProjectsInfo().projects;
    console.log(this.userProjectItem)
    document.getElementById("projects").style.backgroundColor = this.pageInfo['projectsBackgroundColor'];
  }

}
