let favNames = []

btnNext.onclick=function(){
    if (selNames.text.length > 5)
        NSB.MsgBox("only the first 5 will save")
    
    for (i = 0; i < 5; i++)
        favNames.push(selNames.text[i])
    
    ChangeForm(favBaby)
}

