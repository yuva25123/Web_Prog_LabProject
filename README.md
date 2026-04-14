
# AniVerseX Repository Layout

AniVerseX is organized by lab module so each experiment has a clear home and the whole repository keeps one common identity.

## Main Structure

```text
repo root/
  AGENTS.md
  README.md
  AniVerseX/

AniVerseX/
  labs/
    lab-01-client-side-form-design-and-validation/
    lab-02-javascript-events-and-objects/
    lab-03-jquery-and-ajax/
    lab-04-react-api-list-saas/
    lab-05-spring-boot-mvc-crud-mysql/
    lab-06-nodejs-express-mvc/
    lab-07-dom-processing-of-xml/
  docs/
  archive/
```

## Lab Mapping

| Lab | Folder | Current Status |
| --- | --- | --- |
| 1. Client-side form design and validation + GET and POST | `AniVerseX/labs/lab-01-client-side-form-design-and-validation/` | Includes form validation app and GET/POST app |
| 2. JavaScript events and objects | `AniVerseX/labs/lab-02-javascript-events-and-objects/` | Current static AniVerseX review app moved here |
| 3. jQuery and Ajax | `AniVerseX/labs/lab-03-jquery-and-ajax/` | Placeholder folder created |
| 4. React API / list / SaaS | `AniVerseX/labs/lab-04-react-api-list-saas/` | React frontend moved here |
| 5. JSP / Spring Boot MVC CRUD with MySQL | `AniVerseX/labs/lab-05-spring-boot-mvc-crud-mysql/` | Spring Boot project moved here |
| 6. Node.js and Express MVC | `AniVerseX/labs/lab-06-nodejs-express-mvc/` | Node backend moved here |
| 7. DOM processing of XML | `AniVerseX/labs/lab-07-dom-processing-of-xml/` | Placeholder folder created |

## What Was Reorganized

- Moved the old `Experiment 1` folder into lab 1.
- Moved the current AniVerseX static project into lab 2 because its content matches JavaScript events and objects.
- Moved the React frontend into lab 4.
- Moved the Spring Boot project into lab 5.
- Moved the Node.js backend into lab 6.
- Moved `Lab 0 Experiment` into `AniVerseX/docs/reference/` as pre-AniVerseX reference material.
- Moved unrelated academic material into `AniVerseX/archive/college-work/` so the repo root stays focused.
 - Merged GET/POST into lab 1 to match the syllabus Experiment 1.

## Duplicates and Confusing Files

- The duplicate root `Experiment-2` copy was removed after file-by-file hash verification confirmed it was identical to the active lab 3 copy.
- The old nested Git metadata folder inside the React lab folder was removed, so the React lab is now a normal folder inside the main repository.
- The leftover root `Class Test-1-YUVA _DHARSHINIC_2403917710422185/` entry was removed after its files were preserved in the archive.

## Naming Rules Used

- Each lab folder now follows the same `lab-0X-topic-name` pattern.
- AniVerseX stays the main project root for all mapped lab work.
- Reference, archive, and duplicate content are separated from active lab modules.
- The active lab 3 asset folders were normalized to lowercase `images/` and `logo/` to match the file paths used in the code.

## Manual Follow-Up

- Confirm the React frontend still points to the expected backend URL after the folder move.
- Decide whether the duplicate lab 1 PDF names should be reduced to a single final submission file.
- Review `AniVerseX/archive/college-work/` and remove anything you no longer want to keep in the repository.

