// '///' the 3 slash is a special syntax typescript understands
/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-list.ts"/>


namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
