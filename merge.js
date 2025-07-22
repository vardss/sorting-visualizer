async function merge(ele,low,mid,high){
    const n1=mid-low+1;
    const n2=high-mid;

    let left=new Array(n1);
    let right=new Array(n2);
    
    for(let i=0; i<n1; i++)
    {
        await delay(time);
        ele[low+i].style.background='#EBD3F8';//lavender
        left[i]=ele[low+i].style.height;
    }

    for(let j=0; j<n2; j++)
    {
        await delay(time);
        ele[mid+1+j].style.background='#892CDC';//purple
        right[j]=ele[mid+1+j].style.height;
    }

    // await delay(50);
    let i=0, j=0, k=low;

    while(i<n1 && j<n2)
    {
        await delay(time);
        if(parseInt(left[i])<=parseInt(right[j]))
        {
                ele[k].style.background='SpringGreen';
          
            ele[k].style.height=left[i];
            i++;
            k++;
        }

        else
        {
            ele[k].style.background='SpringGreen';
           ele[k].style.height=right[j];
            j++;
            k++;
        }
    }

    while(i<n1)
    {
        ele[k].style.background='SpringGreen';
       ele[k].style.height=left[i];
        i++;
        k++;
    }

    while(j<n2)
    {
        await delay(time);
       ele[k].style.background='SpringGreen';
       ele[k].style.height=right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele,l,r){
    if(l>=r)
    {
        return;
    }
    const m=l+Math.floor((r-l)/2);
    await mergeSort(ele,l,m);
    await mergeSort(ele,m+1,r);
    await merge(ele,l,m,r);
}

document.getElementById('merge').addEventListener('click',async function(){
    let ele=document.querySelectorAll('.sort');
    let l=0;
    let r=parseInt(ele.length)-1;
    document.getElementById("explanation").innerHTML = "Merge sort has a time complexity of O(n log n) in all cases (best, average, and worst). It is a stable sorting algorithm but not in-place, with a space complexity of O(n).";

    disableSizeSlider();
    disableSortingBtn();
    await mergeSort(ele,l,r);
    enableSizeSlider();
    enableSortingBtn();
});
