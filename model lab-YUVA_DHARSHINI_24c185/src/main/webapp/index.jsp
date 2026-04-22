<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="db.jspf" %>
<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
</head>
<body>
<h2>Students</h2>
<a href="add.jsp">+ Add Student</a>
<br><br>
<table border="1" cellpadding="8">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Action</th>
    </tr>
    <%
        try (Connection con = getConnection();
             PreparedStatement ps = con.prepareStatement("SELECT * FROM students ORDER BY id DESC");
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
    %>
    <tr>
        <td><%= rs.getInt("id") %></td>
        <td><%= rs.getString("name") %></td>
        <td><%= rs.getString("email") %></td>
        <td><%= rs.getString("course") %></td>
        <td>
            <a href="edit.jsp?id=<%= rs.getInt("id") %>">Edit</a> |
            <a href="delete.jsp?id=<%= rs.getInt("id") %>" onclick="return confirm('Delete?')">Delete</a>
        </td>
    </tr>
    <%
            }
        } catch (Exception e) {
            out.println("Error: " + e.getMessage());
        }
    %>
</table>
</body>
</html>
