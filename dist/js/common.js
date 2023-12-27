
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

// Search function by default it will search column 1 if pass parameter then it takes parameter

const searchFun = (columnIndex=1) => {

    const searchval = document.getElementById("searchtxt").value.toUpperCase();

    const tablelist = document.getElementById("tbllist");

    const tr=tablelist.getElementsByTagName('tr');

    let dataFound=false;

    for(let i=0;i<tr.length;i++)    
    {
         let td=tr[i].getElementsByTagName('td')[columnIndex];
    
         if(td)
         {
            let txtvalue=td.textContent || td.innerHTML;
           
            if(txtvalue.toUpperCase().indexOf(searchval) > -1)
            {
                tr[i].style.display="";
                dataFound = true; 
            }
            else
            {
                tr[i].style.display="none"
            }
         }
    }

    if(!dataFound)
    {
        document.getElementById("errorMsg").innerHTML="Data not found.";
    }
    else
    {
        document.getElementById("errorMsg").innerHTML="Click for download more data";
    }

}

// Get data according page size selection

function getRecord_IndexChanges()
{
    const selectedValue=document.getElementById("getRecord").value;
    const table = document.getElementById("tbllist");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    console.log(rows);

    //ensures that you don't attempt to display more rows than actually exist in the table
    for (let i = 0; i < Math.min(selectedValue, rows.length); i++) {
        console.log("Row " + (i + 1) + ":", rows[i].textContent.trim());
    }
}