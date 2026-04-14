
# AniVerseX Repository Layout

AniVerseX is organized by lab module so each experiment has a clear home and the whole repository keeps one common identity.

## Main Structure

```text
AniVerseX/
  labs/
    lab-01-client-side-form-design-and-validation/
    lab-02-get-and-post/
    lab-03-javascript-events-and-objects/
    lab-04-jquery-and-ajax/
    lab-05-react-api-list-saas/
    lab-06-spring-boot-mvc-crud-mysql/
    lab-07-nodejs-express-mvc/
    lab-08-dom-processing-of-xml/
  docs/
  archive/
```

## Lab Mapping

| Lab | Folder | Current Status |
| --- | --- | --- |
| 1. Client-side form design and validation | `AniVerseX/labs/lab-01-client-side-form-design-and-validation/` | Submission PDFs moved here |
| 2. GET and POST | `AniVerseX/labs/lab-02-get-and-post/` | Placeholder folder created |
| 3. JavaScript events and objects | `AniVerseX/labs/lab-03-javascript-events-and-objects/` | Current static AniVerseX review app moved here |
| 4. jQuery and Ajax | `AniVerseX/labs/lab-04-jquery-and-ajax/` | Placeholder folder created |
| 5. React API / list / SaaS | `AniVerseX/labs/lab-05-react-api-list-saas/` | React frontend moved here |
| 6. JSP / Spring Boot MVC CRUD with MySQL | `AniVerseX/labs/lab-06-spring-boot-mvc-crud-mysql/` | Spring Boot project moved here |
| 7. Node.js and Express MVC | `AniVerseX/labs/lab-07-nodejs-express-mvc/` | Node backend moved here |
| 8. DOM processing of XML | `AniVerseX/labs/lab-08-dom-processing-of-xml/` | Placeholder folder created |

## What Was Reorganized

- Moved the old `Experiment 1` folder into lab 1.
- Moved the current AniVerseX static project into lab 3 because its content matches JavaScript events and objects.
- Moved the React frontend into lab 5.
- Moved the Spring Boot project into lab 6.
- Moved the Node.js backend into lab 7.
- Moved `Lab 0 Experiment` into `AniVerseX/docs/reference/` as pre-AniVerseX reference material.
- Moved unrelated root files into `AniVerseX/archive/root-misc/` so the repo root stays focused.

## Duplicates and Confusing Files

- The duplicate root `Experiment-2` copy was preserved in `AniVerseX/archive/duplicates/experiment-2-root-copy/`.
- `AniVerseX/labs/lab-05-react-api-list-saas/frontend/` contains an actual hidden `.git` folder in addition to `.gitignore`. It was left untouched and needs a manual decision.
- `Class Test-1-YUVA _DHARSHINIC_2403917710422185/` is still at the repo root because it appears unrelated to AniVerseX and was not part of the lab mapping.

## Naming Rules Used

- Each lab folder now follows the same `lab-0X-topic-name` pattern.
- AniVerseX stays the main project root for all mapped lab work.
- Reference, archive, and duplicate content are separated from active lab modules.
- The active lab 3 asset folders were normalized to lowercase `images/` and `logo/` to match the file paths used in the code.

## Manual Follow-Up

- Confirm the React frontend still points to the expected backend URL after the folder move.
- Decide whether the actual nested `.git` inside the React frontend should be removed or preserved.
- Decide whether the archived duplicate `experiment-2-root-copy` is still needed.
- Decide whether the root `Class Test-1-YUVA _DHARSHINIC_2403917710422185/` folder should be archived outside this repo.
- Decide whether the duplicate lab 1 PDF names should be reduced to a single final submission file.
- Review `AniVerseX/archive/root-misc/` and remove anything you no longer want to keep in the repository.

