package controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import models.Help;
import utils.Queries;
import utils.RandomID;

/**
 * Servlet implementation class HelpRequestApi
 */
@WebServlet("/HelpRequestApi")
public class HelpRequestApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Queries query = new Queries();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelpRequestApi() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Help model = new Help();
		
		RandomID id = new RandomID();
		
		model.setId(id.getuniqueid());
		model.setClientName(request.getParameter("clientName"));
		model.setNic(request.getParameter("nic"));
		model.setEmail(request.getParameter("email"));
		model.setAddress(request.getParameter("address"));
		model.setAcNumber(Integer.parseInt(request.getParameter("acNumber")));
		model.setContact(Integer.parseInt(request.getParameter("contact")));
		model.setMessage(request.getParameter("message"));
		model.setType(request.getParameter("type"));
		model.setStatus(request.getParameter("status"));
		
		String output = this.query.Insert(model);
		
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request);
		Help model = new Help();
		
		
		model.setId(Integer.parseInt((String) paras.get("hideID")));
		model.setClientName((String)paras.get("clientName"));
		model.setNic((String)paras.get("nic"));
		model.setEmail((String)paras.get("email"));
		model.setAddress((String)paras.get("address"));
		model.setAcNumber(Integer.parseInt((String)paras.get("acNumber")));
		model.setContact(Integer.parseInt((String)paras.get("contact")));
		model.setMessage((String)paras.get("message"));
		model.setType((String)paras.get("type"));
		model.setStatus((String)paras.get("status"));
		
		
		String output = this.query.Update(
				model.getId(),
				model.getClientName(),
				model.getNic(),
				model.getAcNumber(),
				model.getAddress(),
				model.getEmail(),
				model.getContact(),
				model.getMessage(),
				model.getType(),
				model.getStatus()
		);
				
		response.getWriter().write(output);
		
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String output = query.delete(Integer.parseInt(request.getParameter("requestId")));
		
		response.getWriter().write(output);
	}
	
	
	private static Map getParasMap(HttpServletRequest request){
		Map<String, String> map = new HashMap<String, String>();
	
		try{
			
		Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		String queryString = scanner.hasNext() ?
		scanner.useDelimiter("\\A").next() : "";
		scanner.close();
		String[] params = queryString.split("&");
		
				for (String param : params){
					String[] p = param.split("=");
					map.put(p[0], p[1]);
				}
		}
		catch (Exception e){
			
		}
			
		return map;
	}

}
