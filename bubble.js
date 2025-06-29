
async function bubble(){

const ele=document.querySelectorAll(".sort");

for(let i=0; i<ele.length-1; i++)
{
    for(j=0; j<ele.length-i-1; j++)
    {
        ele[j].style.background='#892CDC';
        ele[j+1].style.background='#892CDC';

        if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
        {
            await delay(time);
            swap(ele[j], ele[j+1]);
        }

        ele[j].style.background='#BC6FF1';
        ele[j+1].style.background='#BC6FF1';
    }

    ele[ele.length-i-1].style.background='#52057B';
   
}
ele[0].style.background='#52057B';
}
document.getElementById('bubble').addEventListener("click", async function(){

    disableSizeSlider();
    disableSortingBtn();
   document.getElementById("theo").innerHTML = "Bubble sort has a best-case time complexity of O(n) when the array is already sorted, and a worst and average-case time complexity of O(n<sup>2</sup>). It is an in-place and stable sorting algorithm with a space complexity of O(1).";


    await bubble();
    enableSizeSlider();
    enableSortingBtn();
});

