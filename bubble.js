async function bubble() {
    const ele = document.querySelectorAll(".sort");

    for (let i = 0; i < ele.length - 1; i++) {
        let cnt=0;
        for (let j = 0; j < ele.length - i - 1; j++) {

            ele[j].style.background = 'red';
            ele[j + 1].style.background = 'red';

            
            let height1 = parseInt(ele[j].style.height);
            let height2 = parseInt(ele[j + 1].style.height);

            if (height1 > height2) {
                cnt++;
                await delay(time);
                swap(ele[j], ele[j + 1]);
            }

            ele[j].style.background = 'SlateBlue';
            ele[j + 1].style.background = 'SlateBlue';
        }

        // Mark the last sorted element as green
        ele[ele.length - i - 1].style.background = 'SpringGreen';
        if(cnt==0)
        {
            break;
        }
    }
     // Mark the sorted part as green
  for(let i=0;i<ele.length-1;i++)
  {
    ele[i].style.background='SpringGreen'
  }

    
}
document.getElementById('bubble').addEventListener("click", async function(){

    disableSizeSlider();
    disableSortingBtn();
   document.getElementById("explanation").innerHTML = "Bubble sort has a best-case time complexity of O(n) when the array is already sorted, and a worst and average-case time complexity of O(n<sup>2</sup>). It is an in-place and stable sorting algorithm with a space complexity of O(1).";


    await bubble();
    enableSizeSlider();
    enableSortingBtn();
});



