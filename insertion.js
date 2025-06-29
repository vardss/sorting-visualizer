async function insertion(){
    const ele=document.querySelectorAll('.sort');

    ele[0].style.background='#52057B';
    for(let i=1; i<ele.length; i++)
    {
        ele[i].style.background='#892CDC';
        let key=ele[i].style.height;
        let j=i-1;

        while(j>=0 && (parseInt(key)<parseInt(ele[j].style.height)))
        {
            ele[j].style.background='#892CDC';
            ele[j+1].style.height=ele[j].style.height;
            j--;
            
            await delay(time);
            for(let k=0; k<i; k++)
            {
                ele[k].style.background='#52057B';
            }
        }

        ele[j+1].style.height=key;
        ele[i].style.background='#52057B';
    }
}

document.getElementById('insertion').addEventListener('click',async function(){
    disableSizeSlider();
    disableSortingBtn();
    document.getElementById("theo").innerHTML = "Insertion sort has a best-case time complexity of O(n) when the array is already sorted, and a worst and average-case time complexity of O(n<sup>2</sup>). It is an in-place and stable sorting algorithm with a space complexity of O(1).";

    await insertion();
    enableSizeSlider();
    enableSortingBtn();
});