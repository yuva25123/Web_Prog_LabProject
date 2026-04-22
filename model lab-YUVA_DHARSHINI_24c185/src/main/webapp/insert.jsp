<%@ include file="db.jspf" %>
<%
    request.setCharacterEncoding("UTF-8");
    String name = request.getParameter("name");
    String email = request.getParameter("email");
    String course = request.getParameter("course");

    try (Connection con = getConnection();
         PreparedStatement ps = con.prepareStatement(
             "INSERT INTO students(name, email, course) VALUES (?, ?, ?)")) {
        ps.setString(1, name);
        ps.setString(2, email);
        ps.setString(3, course);
        ps.executeUpdate();
    } catch (Exception e) {
        out.println("Insert Error: " + e.getMessage());
        return;
    }
    response.sendRedirect("index.jsp");
%>
