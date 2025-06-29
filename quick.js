async function lomuto(ele,l,h){
    let i=l-1;
    
    ele[h].style.background='#892CDC';
    for(let j=l; j<=h-1; j++)
    {
        ele[j].style.background='#77B0AA';
        await delay(time);
        if(parseInt(ele[j].style.height) < parseInt(ele[h].style.height))
        {
            if(i>=l)
            {
                ele[i].style.background='#BC6FF1';
            }
            i++;
            swap(ele[i],ele[j]);
            ele[i].style.background='#EBD3F8';
            // if(i!=j)
            // {
                // ele[j].style.background='orange';
            // }
            await delay(time);
        }
        ele[j].style.background='#BC6FF1';
    }
    if(i>=l){
        ele[i].style.background='#BC6FF1';
    }

    await delay(time);
    swap(ele[i+1],ele[h]);
    
    ele[h].style.background='#BC6FF1';
    
    await delay(time);      
        return i+1;
    }
    
    async function qsort(ele,l,h){
        
        if(l<h){
        let p=await lomuto(ele,l,h);
        await qsort(ele,l,p-1);
        await qsort(ele,p+1,h);
    }
    
    else{
        return;
    }
}

// qsort(ele,l,h);
document.getElementById('quick').addEventListener('click', async function(){
    let ele=document.querySelectorAll('.sort');
    let l=0;
    let h=parseInt(ele.length)-1;
    disableSizeSlider();
    disableSortingBtn();
   document.getElementById("theo").innerHTML = "Quick sort has an average-case time complexity of O(n log n), and a worst-case time complexity of O(n<sup>2</sup>) when the pivot selection is poor. It is an in-place and not always stable algorithm, with a space complexity of O(log n).";

    await qsort(ele,l,h);
    for(let i=0; i<=h; i++)
    {
        await delay(time);
        ele[i].style.background='#52057B';
    }
    enableSizeSlider();
    enableSortingBtn();
});