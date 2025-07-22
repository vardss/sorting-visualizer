async function lomuto(ele,l,h){
    let i=l-1;
    
    ele[h].style.background='red';
    for(let j=l; j<=h-1; j++)
    {
        ele[j].style.background='brown';
        await delay(time);
        if(parseInt(ele[j].style.height) < parseInt(ele[h].style.height))
        {
              if(i>=l)
            {
                ele[i].style.background='SlateBlue';
            }
          
            i++;
            swap(ele[i],ele[j]);
            ele[i].style.background='orange';
            await delay(time);
        }
        ele[j].style.background='SlateBlue';
    }
    if(i>=l){
        ele[i].style.background='SlateBlue';
    }

    await delay(time);
    swap(ele[i+1],ele[h]);
    
    ele[h].style.background='SlateBlue';

    await delay(time);
    ele[i+1].style.background='SpringGreen'


    await delay(time);      
        return i+1;
    }
    
    async function qsort(ele,l,h){
        
        if(l<h){
        let p=await lomuto(ele,l,h);
        await qsort(ele,l,p-1);
        await qsort(ele,p+1,h);
    }

    if(l==h)
    {
        ele[l].style.background='SpringGreen'
    }
    
    else{
        return;
    }
}


document.getElementById('quick').addEventListener('click', async function(){
    let ele=document.querySelectorAll('.sort');
    let l=0;
    let h=parseInt(ele.length)-1;
    disableSizeSlider();
    disableSortingBtn();
   document.getElementById("explanation").innerHTML = "Quick sort has an average-case time complexity of O(n log n), and a worst-case time complexity of O(n<sup>2</sup>) when the pivot selection is poor. It is an in-place and not always stable algorithm, with recursive space complexity of O(log n).";

    await qsort(ele,l,h);
    enableSizeSlider();
    enableSortingBtn();
});
