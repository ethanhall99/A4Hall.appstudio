
chosenOne = ""

second.onshow=function(){
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblEmployees.textContent = "There are no employees in the database."
        else {
            drpEmployees.clear()
            for (i = 0; i < results.length; i++)
                drpEmployees.addItem(results[i])
        }
    } else
        lblEmployees.textContent = "Error code: " + req.status  
}

drpEmployees.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else {  
        drpEmployees.value = s
        chosenOne = drpEmployees.value
    }  
}

btnDelete.onclick=function(){
    query = "DELETE FROM customer WHERE name = '" + chosenOne + "'"      
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
    if (req.status == 200) {
        if (req.responseText == 500)    
            lblEmployees.textContent = `You have successfully deleted the employee named ${chosenOne}`
        else
            lblEmployees.textContent = `There was a problem deleting ${chosenOne} from the database.`
    } else
        lblEmployees.textContent = `Error: ${req.status}`  
}

btnRefresh.onclick=function(){
  location.reload()
}