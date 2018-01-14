/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Peter Riis
 */
@WebServlet(name = "CORS", urlPatterns = {"/CORS"})
public class CORS extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //Make a new URL with the sent parameter.
        URL url = new URL("http://restcountries.eu/rest/v1/alpha?codes=" + request.getParameter("cc"));
        //Open a new connection to the URL. 
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        //Set the request to GET.
        con.setRequestMethod("GET");
        //Accept and set to json UTF-8.
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");
        //Read the answer from server and save it to a BufferedReader in the variable bf. 
        BufferedReader bf = new BufferedReader(new InputStreamReader(con.getInputStream()));
        
        
        //Converting BufferedReader JSONObject
        //Solution found here:
        //http://stackoverflow.com/questions/26358684/converting-bufferedreader-to-jsonobject-or-map
        StringBuilder sb = new StringBuilder();
        String line;
        
        
        while ((line = bf.readLine()) != null) {

            sb.append(line);

        }

        //toString the stringBuilder object 'sb' into the json String.
        String json = sb.toString();
       
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.setContentType("application/json;charset=UTF-8");       
        //Create new PrintWriter.
        PrintWriter out = response.getWriter();
        //Write the json object.
        out.print(json);
        
    

    }

 
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }


}
