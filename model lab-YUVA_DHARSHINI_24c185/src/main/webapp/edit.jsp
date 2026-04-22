<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="db.jspf" %>
<%
    int id = Integer.parseInt(request.getParameter("id"));
    String name = "";
    String email = "";
    String course = "";

    try (Connection con = getConnection();
         PreparedStatement ps = con.prepareStatement("SELECT * FROM students WHERE id=?")) {
        ps.setInt(1, id);
        try (ResultSet rs = ps.executeQuery()) {
            if (rs.next()) {
                name = rs.getString("name");
                email = rs.getString("email");
                course = rs.getString("course");
            }
        }
    } catch (Exception e) {
        out.println("Error: " + e.getMessage());
        return;
    }
%>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
</head>
<body>
<h2>Edit Student</h2>
<form action="update.jsp" method="post">
    <input type="hidden" name="id" value="<%= id %>">
    Name: <input type="text" name="name" value="<%= name %>" required><br><br>
    Email: <input type="email" name="email" value="<%= email %>" required><br><br>
    Course: <input type="text" name="course" value="<%= course %>" required><br><br>
    <button type="submit">Update</button>
</form>
<br>
<a href="index.jsp">Back</a>
</body>
</html>
