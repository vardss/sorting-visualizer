async function selection(){
const ele=document.querySelectorAll('.sort');
for(let i=0; i<ele.length; i++)
{
    let x=i;
    ele[i].style.background='#892CDC';
    for(let j=i+1; j<ele.length; j++)
    {
        ele[j].style.background='#892CDC';
        if(parseInt(ele[j].style.height)<parseInt(ele[x].style.height))
        {
            if(x!==i)
            {
                ele[x].style.background='#BC6FF1';
            }
            x=j;
        }

        else
        {
            ele[j].style.background='#BC6FF1';
        }
    }
    await delay(time);
    swap(ele[i],ele[x]);
    ele[x].style.background='#BC6FF1';
    ele[i].style.background='#52057B';
}
}
document.getElementById("selection").addEventListener('click', async function(){
    disableSizeSlider();
    disableSortingBtn();
    document.getElementById("theo").innerHTML = "Selection sort has a time complexity of O(n<sup>2</sup>) in the best, average, and worst cases. It is an in-place but not a stable sorting algorithm, with a space complexity of O(1).";


    await selection();
    enableSizeSlider();
    enableSortingBtn();
});