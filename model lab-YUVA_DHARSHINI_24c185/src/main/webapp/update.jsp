<%@ include file="db.jspf" %>
<%
    request.setCharacterEncoding("UTF-8");
    int id = Integer.parseInt(request.getParameter("id"));
    String name = request.getParameter("name");
    String email = request.getParameter("email");
    String course = request.getParameter("course");

    try (Connection con = getConnection();
         PreparedStatement ps = con.prepareStatement(
             "UPDATE students SET name=?, email=?, course=? WHERE id=?")) {
        ps.setString(1, name);
        ps.setString(2, email);
        ps.setString(3, course);
        ps.setInt(4, id);
        ps.executeUpdate();
    } catch (Exception e) {
        out.println("Update Error: " + e.getMessage());
        return;
    }
    response.sendRedirect("index.jsp");
%>
