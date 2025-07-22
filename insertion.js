async function insertion(){
    const ele=document.querySelectorAll('.sort');

    ele[0].style.background='SpringGreen';
    for(let i=1; i<ele.length; i++)
    {
        ele[i].style.background='red';
        //let key=ele[i].style.height;
        let j=i;

        while(j>0 && (parseInt(ele[j-1].style.height)>parseInt(ele[j].style.height)))
        {
           // ele[j].style.background='red';
            await delay(time);
            swap(ele[j-1],ele[j]);
            
            ele[j-1].style.background='red'
            ele[j].style.background='SpringGreen'
            await delay(time);
            
              

            j--;
            //ele[j+1].style.height=ele[j].style.height;
            // j--;
            
          
           
        }

        ele[j].style.background='lightgreen'
        
        //    await delay(time);
        //  for(let k=0; k<i; k++)
        //     {
        //         ele[k].style.background='SpringGreen';
        //     }

        //ele[j+1].style.height=key;
        //ele[i].style.background='green';
    }
}

document.getElementById('insertion').addEventListener('click',async function(){
    disableSizeSlider();
    disableSortingBtn();
    document.getElementById("explanation").innerHTML = "Insertion sort has a best-case time complexity of O(n) when the array is already sorted, and a worst and average-case time complexity of O(n<sup>2</sup>). It is an in-place and stable sorting algorithm with a space complexity of O(1).";

    await insertion();
    enableSizeSlider();
    enableSortingBtn();
});
