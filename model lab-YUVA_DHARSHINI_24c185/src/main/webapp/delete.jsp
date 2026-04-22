<%@ include file="db.jspf" %>
<%
    int id = Integer.parseInt(request.getParameter("id"));

    try (Connection con = getConnection();
         PreparedStatement ps = con.prepareStatement("DELETE FROM students WHERE id=?")) {
        ps.setInt(1, id);
        ps.executeUpdate();
    } catch (Exception e) {
        out.println("Delete Error: " + e.getMessage());
        return;
    }
    response.sendRedirect("index.jsp");
%>
