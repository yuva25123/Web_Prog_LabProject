# JSP + JDBC CRUD (Very Simple)

This is a basic student project for CRUD operations using JSP and JDBC.

## Aim
Create a small web app to manage student records:
- Add student
- View students
- Edit student
- Delete student

## Technologies
- JSP
- JDBC
- MySQL
- Tomcat

## Files Used
- `src/main/webapp/db.jspf` - DB connection
- `src/main/webapp/index.jsp` - list page
- `src/main/webapp/add.jsp` - add form
- `src/main/webapp/insert.jsp` - save data
- `src/main/webapp/edit.jsp` - edit form
- `src/main/webapp/update.jsp` - update data
- `src/main/webapp/delete.jsp` - delete data
- `database/mysql_students.sql` - DB/table script

## Database
Run:
```sql
CREATE DATABASE demo_db;
USE demo_db;

CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  course VARCHAR(100) NOT NULL
);
```

## How to Run
1. Create DB and table using `database/mysql_students.sql`.
2. Update DB username/password in `src/main/webapp/db.jspf`.
3. Build:
   - `mvn clean package`
4. Deploy WAR to Tomcat.
5. Open:
   - `http://localhost:8080/simple-jsp-jdbc-crud/`

## CRUD Logic (Simple)
- Create: `add.jsp` -> `insert.jsp`
- Read: `index.jsp` (SELECT query)
- Update: `edit.jsp` -> `update.jsp`
- Delete: `delete.jsp`
